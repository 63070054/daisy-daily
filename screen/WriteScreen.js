import { AiOutlineClose } from "react-icons/ai";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { IoMdCheckmark } from "react-icons/io";

export default function WriteScreen({ navigation, route }) {
  const { value, onChangeText, title } = route.params;

  const modules = {
    toolbar: [
      ["bold", "italic", "underline", "blockquote"],
      [
        { align: null },
        { align: "center" },
        { align: "right" },
        { align: "justify" },
      ],
      [{ list: "ordered" }, { list: "bullet" }],
    ],
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#ffffff",
        display: "flex",
        flexDirection: "column",
        padding: 15,
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
        {title}
      </Text>
      <ReactQuill
        theme="snow"
        value={value}
        onChange={onChangeText}
        modules={modules}
        placeholder="Write here..."
      />
    </View>
  );
}
