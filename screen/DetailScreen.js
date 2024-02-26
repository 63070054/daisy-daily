import {
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  Text,
  View,
} from "react-native";

function DetailScreen({ navigation, route }) {
  const { item } = route.params;

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: "#0f0f0f", display: "flex", flexDirection: "column" }}
    >
      <Image
        source={{ uri: item.imageUrl }}
        style={{
          width: "100%",
          aspectRatio: "130/170",
          alignSelf: "center",
        }}
        resizeMode="contain"
      />

      <ImageBackground
        source="../assets/DetailScreenBackground.jpg  "
        resizeMode="repeat"
        style={{
          width: "100%",
          height: "auto",
          alignSelf: "center",
          marginTop: -1,
        }}
      >
        <Text
          style={{
            fontFamily: "ThaiText",
            marginTop:30,
            marginLeft:20,
            marginRight:20,
            marginBottom: 20,
            color: "white",
            fontSize: 24,
            fontWeight: "bold",
            lineHeight: 20,
            color: "darkblue",
          }}
        >
          {item.title}
        </Text>
        <Text
          style={{
            fontFamily: "ThaiText",
            marginLeft: 20,
            marginRight: 20,
            marginBottom:10,
            color: "white",
            fontSize: 20,
            fontWeight: "bold",
            lineHeight: 20,
            color: "darkblue",
          }}
        >
          {item.description}
        </Text>
        <Text
          style={{
            fontFamily: "ThaiText",
            marginLeft: 20,
            marginRight: 20,
            fontSize: 18,
            color: "#fff",
            lineHeight: 24,
            marginBottom: 4,
          }}
        >
          {item.content}
        </Text>
      </ImageBackground>
    </ScrollView>
  );
}

export default DetailScreen;
