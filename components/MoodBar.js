import { StyleSheet, Text, View } from "react-native";
import { emotions } from "../screen/์NoteScreen";
import { Fragment, cloneElement } from "react";

export default function MoodBar({
  moodData
}) {

  return (
    <>
      <View style={{ width: "100%", height: 50, flexDirection: "row" }}>
        {moodData.map((mood, index) => (
          <>
            <View key={index} style={[
              { width: `${mood.percent}%`, backgroundColor: emotions[index].backgroundColor },
              index === 0 && styles.firstBar,
              index === moodData.length - 1 && styles.lastBar
            ]} />
          </>
        ))}
      </View>
      <View style={{ width: "100%", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: 24 }}>
        {
          moodData.map((mood, index) => {
            return (
              <Fragment key={index}>
                <View style={{ justifyContent: "center", alignItems: "center", gap: 4 }}>
                  {cloneElement(emotions[index].icon, {
                    style: {
                      color: emotions[index].color,
                      backgroundColor: emotions[index].backgroundColor,
                      fontSize: 35,
                      borderRadius: "100%",
                    }
                  })}
                  <Text>{mood.percent.toFixed(2)}%</Text>
                </View>
              </Fragment>
            )
          })
        }
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  firstBar: {
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
  },
  lastBar: {
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
  },
});