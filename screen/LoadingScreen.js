import { ActivityIndicator, View } from "react-native";

export default function LoadingScreen() {
  return (
    <View style={{
      zIndex: 100, opacity: 0.8, justifyContent: "center", alignItems: "center", backgroundColor: "black", flex: 1, position: "absolute", width: '100%', height: '100%'
    }}>
      <ActivityIndicator size="large" color="#ffcf12" />
    </View>
  );
}