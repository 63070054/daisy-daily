import React, { useCallback, useEffect, useState } from "react";
import { Calendar } from "@natscale/react-calendar";
import "@natscale/react-calendar/dist/main.css";
import { View } from "react-native";

export default function DDCalendar({navigation, currentNotes}) {
  const [value, setValue] = useState(new Date());

  const onChange = useCallback(
    (val) => {
      navigation.navigate("NoteScreen", { date: val })
    },
  );
  const isHighlight = useCallback((date) => {
    const alreadyNote = currentNotes.some(note => new Date(note.date).getTime() === date.getTime())
    return alreadyNote;

  }, [currentNotes]);

  return (
    <View>
      <Calendar isHighlight={isHighlight} value={value} onChange={onChange} />
    </View>
  );
}
