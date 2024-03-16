import { RiEmotionLaughLine } from "react-icons/ri";
import { RiEmotionLine } from "react-icons/ri";
import { RiEmotionNormalLine } from "react-icons/ri";
import { RiEmotionSadLine } from "react-icons/ri";
import { RiEmotionUnhappyLine } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { MdOutlineInsertPhoto } from "react-icons/md";
import {
  Image,
  TextInput,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Pressable,
} from "react-native";
import { useState } from "react";
import { launchImageLibrary } from "react-native-image-picker";
import { StyleSheet } from "react-native-web";

function NoteScreen({ navigation, route }) {
  const { item } = route.params;
  console.log(item);
  const [text, onChangeText] = useState("");
  const [imageSelected, setImageSelected] = useState(null);

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
        setImageSelected(imageUri);
      }
    });
  };

  return (
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
        {item}
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
          <RiEmotionLaughLine
            style={{
              color: "black",
              backgroundColor: "#D0AB80",
              fontSize: 35,
              borderRadius: "100%",
            }}
          />
          <RiEmotionLine
            style={{
              color: "black",
              backgroundColor: "#5D735D",
              fontSize: 35,
              borderRadius: "100%",
            }}
          />
          <RiEmotionNormalLine
            style={{
              color: "black",
              backgroundColor: "#A15453",
              fontSize: 35,
              borderRadius: "100%",
            }}
          />
          <RiEmotionSadLine
            style={{
              color: "black",
              backgroundColor: "#5E5466",
              fontSize: 35,
              borderRadius: "100%",
            }}
          />
          <RiEmotionUnhappyLine
            style={{
              color: "black",
              backgroundColor: "#40465D",
              fontSize: 35,
              borderRadius: "100%",
            }}
          />
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
          navigation.navigate("WriteScreen", {value: text, onChangeText: onChangeText,title:item})
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
            onChangeText={onChangeText}
            value={text.replace(/<[^>]+>/g, '')}
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
        <TouchableOpacity onPress={() => setImageSelected(null)}>
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
          {imageSelected ? (
            <TouchableOpacity onPress={openImagePicker}>
              <Image
                source={imageSelected}
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
          onChangeText={onChangeText}
          value={text}
          multiline
          numberOfLines={4}
        />
      </View>
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          marginLeft: 15,
          marginRight: 15,
          marginBottom: 20,
          marginTop:15,
          backgroundColor: "#FFCF12",
          borderRadius: 10,
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text
            style={{
              color: "#ffffff",
              fontFamily: "DMSans",
              fontSize: 16,
              padding: 15,
              textAlign:"center",
            }}
          >
            DONE
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
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
