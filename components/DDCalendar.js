import React, { useCallback, useState } from "react";
import { Calendar } from "@natscale/react-calendar";
import "@natscale/react-calendar/dist/main.css";
import { View } from "react-native";

export default function DDCalendar({navigation}) {
  const [value, setValue] = useState(new Date());

  const onChange = useCallback(
    (val) => {
      console.log("val", val);
      var options = {
        weekday: "long",
        month: "long",
        day: "numeric",
      };
      var formattedDate = val.toLocaleDateString("en-US", options);
      console.log(formattedDate);
      navigation.navigate("NoteScreen", { item: formattedDate })
      setValue(val);
    },
    [setValue]
  );

  return (
    <View>
      {" "}
      {/* Wrap the Calendar component in a View */}
      <Calendar value={value} onChange={onChange} />
    </View>
  );
}
