import { Text, View } from "react-native";
import MoodBar from "../components/MoodBar";
import { cloneElement, useEffect, useState } from "react";
import { useIsFocused } from '@react-navigation/native';
import  AsyncStorage  from '@react-native-async-storage/async-storage';
import { emotions } from './์NoteScreen';

export default function StatScreen() {



    const [currentNotes, setCurrentNotes] = useState([])
    const isFocused = useIsFocused()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const notes = await AsyncStorage.getItem("notes");
                if (notes !== null) {
                    const parseNotes = JSON.parse(notes)
                    setCurrentNotes([...parseNotes]);
                }
            } catch (error) {
                console.error('Error fetching notes from AsyncStorage:', error);
            }
        };

        if (isFocused) {
            fetchData();
        }

    }, [isFocused]);

    const getDayDiff = (date, targetDate) => {
        return (date - targetDate) / (1000 * 60 * 60 * 24)
    }

    const today = new Date();

    const filterMood = currentNotes.filter(note => {
        const noteDate = new Date(note.date);
        const differenceInDays = getDayDiff(today, noteDate)

        return differenceInDays <= 7 && differenceInDays >= 0
    })

    const moodData = [5, 4, 3, 2, 1].map(emotion => {
        return {
            percent: filterMood.filter(note => note.emotion === emotion).length / filterMood.length * 100
        };
    });

    const pastDates = [];

    // Loop backward for 7 days
    for (let i = 7; i >= 0; i--) {
        // Get the date i days ago
        const pastDate = new Date(today);
        pastDate.setDate(today.getDate() - i);
        pastDates.push(pastDate);
    }

    console.log("pastDates", pastDates)

    const isSameDay = (date1, date2) => {
        console.log(date1, date2, date1.getDate() === date2.getDate() &&
            date1.getMonth() === date2.getMonth() &&
            date1.getFullYear() === date2.getFullYear())
        return date1.getDate() === date2.getDate() &&
            date1.getMonth() === date2.getMonth() &&
            date1.getFullYear() === date2.getFullYear();
    }


    return (
        <View style={{ flex: 1 }}>
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
                    padding: 15,
                    gap: 16,
                }}
            >
                <Text style={{textAlign: "center"}}>Your mood past 7 days</Text>
                <MoodBar moodData={moodData} />
            </View>
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
                    padding: 15,
                    gap: 16,
                }}
            >
                <Text style={{ textAlign: "center" }}>Your mood past 7 days</Text>
                {
                    pastDates.map((date, index) => {
                        var options = {
                            weekday: "long",
                            month: "long",
                            day: "numeric",
                        };
                        var convertDate = date.toLocaleDateString("en-US", options);
                        const getMood = currentNotes.find(note => {
                            return isSameDay(new Date(note.date), date)
                        })
                        console.log("getMood", JSON.stringify(getMood), date)
                        return (
                            <View key={index} style={{ flexDirection: "row", gap: 8 }}>
                                <Text style={{width: "50%"}}>{convertDate}</Text>
                                {emotions?.[emotions.length - getMood?.emotion]?.icon && (
                                    <>
                                        {cloneElement(emotions?.[emotions.length - getMood?.emotion]?.icon, {
                                            style: {
                                                color: emotions?.[emotions.length - getMood?.emotion]?.color,
                                                backgroundColor: emotions?.[emotions.length - getMood?.emotion]?.backgroundColor,
                                                fontSize: 35,
                                                borderRadius: "100%",
                                            }
                                        })}
                                    </>
                                )}
                            </View>
                        )
                    })
                }
            </View>
        </View>
    );
}