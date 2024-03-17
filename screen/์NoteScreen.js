import { RiEmotionLaughLine } from "react-icons/ri";
import { RiEmotionLine } from "react-icons/ri";
import { RiEmotionNormalLine } from "react-icons/ri";
import { RiEmotionSadLine } from "react-icons/ri";
import { RiEmotionUnhappyLine } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { MdOutlineInsertPhoto } from "react-icons/md";
import AWS from 'aws-sdk';
import {
  Image,
  TextInput,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Pressable,
  StyleSheet
} from "react-native";
import { cloneElement, useEffect, useState } from "react";
import { launchImageLibrary } from "react-native-image-picker";
import LoadingScreen from "./LoadingScreen";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from '@react-navigation/native';
import Toast from 'react-native-toast-message';

export const emotions = [
  {
    icon: <RiEmotionLaughLine />,
    color: "black",
    backgroundColor: "#D0AB80",
  },
  {
    icon: <RiEmotionLine />,
    color: "black",
    backgroundColor: "#5D735D",
  },
  {
    icon: <RiEmotionNormalLine />,
    color: "black",
    backgroundColor: "#A15453",
  },
  {
    icon: <RiEmotionSadLine />,
    color: "black",
    backgroundColor: "#5E5466",
  },
  {
    icon: <RiEmotionUnhappyLine />,
    color: "black",
    backgroundColor: "#40465D",
  }
];

function NoteScreen({ navigation, route }) {
  const { date } = route.params;

  var options = {
    weekday: "long",
    month: "long",
    day: "numeric",
  };
  var convertDate = date.toLocaleDateString("en-US", options);

  const [currentNotes, setCurrentNotes] = useState([]);
  const isFocused = useIsFocused();
  const [alreadyNote, setAlreadyNote] = useState(false);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const notes = await AsyncStorage.getItem("notes");
        if (notes !== null) {
          const parseNotes = JSON.parse(notes)
          setCurrentNotes(parseNotes);
          const findNote = parseNotes.find(note => new Date(note.date).getTime() === date.getTime())
          if (findNote) {
            setAlreadyNote(true)
            setNoteData({...findNote})
          }
        }
      } catch (error) {
        console.error('Error fetching notes from AsyncStorage:', error);
      }
    };

    if (isFocused) {
      fetchData();
    }
  }, []);

  const [isLoading, setIsLoading] = useState(false)
  const [noteData, setNoteData] = useState(
    {
      note: "",
      imageSelected: null,
      emotion: null,
      toDoList: [
        {
          value: ""
        },
        {
          value: ""
        },
        {
          value: ""
        },
        {
          value: ""
        },
      ]
    }
  )

  const onValueChange = (key, value) => {
    const copyNoteData = { ...noteData }
    copyNoteData[key] = value
    setNoteData({ ...copyNoteData })
  }

  const openImagePicker = () => {
    const options = {
      mediaType: "photo",
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.error) {
        console.log("Image picker error: ", response.error);
      } else {
        let imageUri = response.uri || response.assets?.[0]?.uri;
        onValueChange("imageSelected", imageUri)
      }
    });
  };

  const base64ToFile = (base64String) => {
    // Split the base64 string to get the data and mime type
    const [mime, data] = base64String.split(';base64,');

    // Decode the base64 data
    const decodedData = atob(data);

    // Create a Uint8Array from the decoded data
    const dataArray = new Uint8Array(decodedData.length);
    for (let i = 0; i < decodedData.length; ++i) {
      dataArray[i] = decodedData.charCodeAt(i);
    }

    // Create a Blob object from the Uint8Array
    const blob = new Blob([dataArray], { type: mime });

    // Create a File object from the Blob
    return new File([blob], new Date(), { type: mime });
  }


  const uploadNote = async () => {

    try {

      if (!noteData.emotion) {
        Toast.show({
          type: 'error',
          text1: 'Please select your emotion',
          visibilityTime: 1500,
        });
        return undefined;
      }

      setIsLoading(true)
      let uploadResult = null

      if (!noteData.imageSelected?.startsWith("https") && noteData.imageSelected) {
        const s3 = new AWS.S3({
          accessKeyId: "AKIA5FTZB77QX5WWSSG5",
          secretAccessKey: "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",
          region: "us-east-1",
        });

        const convertImage = base64ToFile(noteData.imageSelected)
        const params = {
          Bucket: "daisy-daily",
          Key: `${Date.now()}.png`, // Example: Use timestamp as part of the key
          Body: convertImage,
          ContentType: "image/png",
        };

        // Upload the image to S3
        uploadResult = await s3
          .upload(params)
          .promise();
      }

      const newNote = {
        note: noteData.note,
        imageSelected: uploadResult ? uploadResult.Location : noteData.imageSelected,
        emotion: noteData.emotion,
        toDoList: noteData.toDoList,
        date: date
      }

      let newNotes = []

      if (alreadyNote) {
        const copyNotes = [...currentNotes]
        const updateIndex = currentNotes.findIndex(note => new Date(note.date).getTime() === date.getTime())
        copyNotes[updateIndex] = newNote
        newNotes = [...copyNotes]
      } else {
        newNotes = [...currentNotes, newNote]
      }
      await AsyncStorage.setItem(
        'notes',
        JSON.stringify(newNotes),
      );

      Toast.show({
        type: 'success',
        text1: `${alreadyNote ? 'Note successfully update ' : 'Note successfully add'} on ${convertDate}`,
        visibilityTime: 3000,
      });

      await navigation.navigate("Month")

    } catch (e) {
      console.log("e", e)
    } finally {
      setIsLoading(false)
    }

  }
  return (
    <>
      {
        isLoading && (
          <LoadingScreen />
        )
      }
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: "#ffffff",
          display: "flex",
          flexDirection: "column",
          paddingTop: 15,
          paddingLeft: 15,
          paddingRight: 15,
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AiOutlineClose style={{ color: "gray", fontSize: 20 }} />
        </TouchableOpacity>
        <Text
          style={{
            display: "flex",
            justifyContent: "center",
            fontSize: 18,
            fontWeight: "normal",
            fontFamily: "DMSans",
            marginTop: 20,
          }}
        >
          {convertDate}
        </Text>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: 20,
            marginLeft: 15,
            marginRight: 15,
            marginBottom: 10,
            backgroundColor: "#FFEDD2",
            borderRadius: 10,
          }}
        >
          <Text
            style={{
              display: "flex",
              justifyContent: "center",
              fontSize: 16,
              fontWeight: "normal",
              fontFamily: "DMSans",
              marginTop: 5,
              marginBottom: 10,
            }}
          >
            How was your day?
          </Text>
          <View
            style={{
              backgroundColor: "#FFEDD2",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              gap: 15,
              marginBottom: 10,
              borderBottomEndRadius: 10,
            }}
          >
            {emotions.map((item, index) => (
              <TouchableOpacity key={index} onPress={() => onValueChange("emotion", emotions.length - index)}>
                {cloneElement(item.icon, {
                  style: {
                    color: item.color,
                    backgroundColor: item.backgroundColor,
                    fontSize: 35,
                    borderRadius: "100%",
                    opacity: noteData.emotion === emotions.length - index ? 1 : 0.5
                  }
                })}
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <View
          style={{
            height: "auto",
            width: "auto",
            backgroundColor: "#FFEDD2",
            margin: (15, 15, 15, 15),
            borderRadius: 10,
            display: "flex",
            justifyContent: "center",
            marginBottom: 10,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: "normal",
              fontFamily: "DMSans",
              marginTop: 5,
              marginBottom: 10,
              marginLeft: 10,
              marginTop: 10,
            }}
          >
            Today's note
          </Text>
          <TouchableOpacity onPress={() => {
            navigation.navigate("WriteScreen", { value: noteData.note, onValueChange: onValueChange, title: convertDate })
          }}>
            <TextInput
              style={{
                marginLeft: 20,
                marginRight: 20,
                marginBottom: 15,
                backgroundColor: "#f5f5f5",
                color: "#D9D9D9",
                borderRadius: 10,
                fontSize: 14,
                fontFamily: "DMSans",
                padding: 10,
              }}
              onChangeText={(text) => onValueChange("note", text)}
              value={noteData.note.replace(/<[^>]+>/g, '')}
              numberOfLines={1}
              placeholder="Write Here..."
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            height: "auto",
            width: "auto",
            backgroundColor: "#FFEDD2",
            margin: (15, 15, 15, 15),
            borderRadius: 10,
            display: "flex",
            justifyContent: "center",
            marginBottom: 10,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: "normal",
              fontFamily: "DMSans",
              marginTop: 5,
              marginBottom: 10,
              marginLeft: 10,
            }}
          >
            Today's photo
          </Text>
          <TouchableOpacity onPress={() => onValueChange("iamgeSelected", null)}>
            <AiOutlineClose
              style={{ color: "gray", fontSize: 10, padding: 10 }}
            />
          </TouchableOpacity>
          <View
            style={{
              width: "100%",
              height: "auto",
            }}
          >
            {noteData.imageSelected ? (
              <TouchableOpacity onPress={openImagePicker}>
                <Image
                  source={noteData.imageSelected}
                  style={{ width: "100%", aspectRatio: "1/1" }}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            ) : (
              <Pressable
                onPress={openImagePicker}
                style={styles.buttonUploadImage}
              >
                <MdOutlineInsertPhoto
                  style={{
                    color: "#D9D9D9",
                    backgroundColor: "#f5f5f5",
                    fontSize: 60,
                    margin: 10,
                  }}
                />
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: "DMSans",
                    color: "#D9D9D9",
                    marginLeft: 20,
                    marginRight: 20,
                    marginBottom: 15,
                  }}
                >
                  Select up to photo
                </Text>
              </Pressable>
            )}
          </View>
        </View>
        <View
          style={{
            height: "auto",
            width: "auto",
            backgroundColor: "#FFEDD2",
            margin: (15, 15, 15, 15),
            borderRadius: 10,
            display: "flex",
            justifyContent: "center",
            marginBottom: 10,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: "normal",
              fontFamily: "DMSans",
              marginTop: 5,
              marginBottom: 10,
              marginLeft: 10,
            }}
          >
            To do list
          </Text>
          <View style={{ gap: 12, padding: 15 }}>
            {
              noteData.toDoList.map((val, index) => (
                <View key={index} style={{ flexDirection: "row", gap: 8, alignItems: "center" }}>
                  <Text>{index + 1}.</Text>
                  <TextInput
                    style={{
                      backgroundColor: "#f5f5f5",
                      color: "#D9D9D9",
                      borderRadius: 10,
                      fontSize: 14,
                      fontFamily: "DMSans",
                      width: "100%",
                      padding: 15
                    }}
                    onChangeText={(text) => {
                      const copyToDoList = [...noteData.toDoList]
                      copyToDoList[index].value = text
                      onValueChange("toDoList", copyToDoList)
                    }}
                    value={val.value}
                    multiline
                    numberOfLines={1}
                  />
                </View>
              ))
            }
          </View>
        </View>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            marginLeft: 15,
            marginRight: 15,
            marginBottom: 20,
            marginTop: 15,
            backgroundColor: "#FFCF12",
            borderRadius: 10,
          }}
        >
          <TouchableOpacity onPress={uploadNote}>
            <Text
              style={{
                color: "#ffffff",
                fontFamily: "DMSans",
                fontSize: 16,
                padding: 15,
                textAlign: "center",
              }}
            >
              DONE
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
}

export default NoteScreen;

const styles = StyleSheet.create({
  buttonUploadImage: {
    margin: 20,
    borderRadius: 10,
    backgroundColor: "#f5f5f5",
    display: "flex",
    alignItems: "center",
    marginTop: 0,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 15,
  },
});
