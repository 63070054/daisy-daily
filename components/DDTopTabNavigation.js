import {
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function DDTopTabNavigation({
  state,
  descriptors,
  navigation,
  position,
}) {
  return (
    <View style={styles.tab}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1 }}
            key={index}
          >
            <Animated.Text
              style={[styles.defaultLabel, isFocused ? styles.activeTab : ""]}
            >
              {label}
            </Animated.Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
const styles = StyleSheet.create({
  tab: {
    marginTop: 20,
    marginBottom: 20,
    width: "50%",
    borderRadius: 1000,
    borderWidth: 3,
    borderColor: "#ffcf12",
    borderStyle: "solid",
    display: "flex",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  defaultLabel: {
    textAlign: "center",
  },
  activeTab: {
    color: "#ffff",
    backgroundColor: "#ffcf12",
    borderWidth: 3,
    borderColor: "#ffcf12",
    borderStyle: "solid",
    borderRadius: 1000,
    padding: 2,
  },
});
