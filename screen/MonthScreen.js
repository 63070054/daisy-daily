import {
  FlatList,
  Image,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import DDCalendar from "../components/DDCalendar";

export default function MonthScreen({ navigation }) {
  const data = [
    {
      id: "1",
      title: "ความเครียด",
      description: "ความเครียดคืออะไร ?",
      imageUrl: "../assets/1.jpg",
      content: (
        <View style={{ flexDirection: "column", width: "100%" }}>
          <Text
            style={{
              fontFamily: "ThaiText",
              marginTop: 20,
              marginLeft: 10,
              marginRight: 10,
              color: "darkblue",
              fontSize: 18,
              lineHeight: 20,
            }}
          >
            ความเครียด
            คือการหดตัวของกล้ามเนื้อส่วนใดส่วนหนึ่งหรือหลายส่วนของร่างกาย
            นั่นเอง ซึ่งทุกคนจำเป็นต้องมีอยู่เสมอในการดำรงชีวิต เช่น การทรงตัว
            เคลื่อนไหวทั่วๆไป
            มีการศึกษาพบว่าทุกครั้งที่เราคิดหรือมีอารมณ์บางอย่างเกิดขึ้นจะต้องมีการหดตัว
            เคลื่อนไหวของกล้ามเนื้อแห่งใดแห่งหนึ่ง ในร่างกายเกิดขึ้นควบคู่เสมอ
          </Text>
          <Text
            style={{
              fontFamily: "ThaiText",
              marginLeft: 10,
              marginRight: 10,
              marginTop: 20,
              marginBottom: 5,
              color: "darkblue",
              fontSize: 18,
              lineHeight: 20,
            }}
          >
            สาเหตุของความเครียด
          </Text>
          <FlatList
            data={[
              { key: "1. สภาพแวดล้อมทั่วไป เช่น มลภาวะ" },
              { key: "    ได้แก่เสียงดังเกินไป จากเครื่องจักร" },
              { key: "    เครื่องยนต์ อากาศเสียจากควัน" },
              { key: "    ท่อไอเสีย น้ำเสีย ฝุ่น ละออง ยาฆ่า" },
              { key: "    แมลง การอยู่กันอย่างเบียดเสียด" },
              { key: "    ยัดเยียด เป็นต้น" },
              { key: "2. สภาพเศรษฐกิจที่ไม่น่าพอใจเช่น รายได้" },
              { key: "    น้อยกว่ารายจ่าย" },
              { key: "3. สภาพแวดล้อมทางสังคมเช่น การสอบ" },
              { key: "    แข่งขันเข้าเรียน เข้าทำงาน เลื่อนขั้น" },
              { key: "    เลื่อนตำแหน่ง เป็นต้น" },
              { key: "4. นิสัยในการกิน-ดื่ม ที่ส่งเสริมความ" },
              { key: "    เครียดเช่น ผู้ที่ดื่มกาแฟบ่อยๆ " },
              { key: "    สูบบุหรี่ ดื่มเหล้า ตลอดจนกิน" },
              { key: "    ของกินที่มีน้ำตาลมากๆ" },
              { key: "5. มีสัมพันธภาพกับคนอื่นๆที่ไม่ราบรื่น" },
              { key: "    มักมีข้อขัดแย้ง" },
              { key: "6. ทะเลาะเบาะแว้งกับคนอื่นเป็นปกติวิสัย" },
              { key: "7. ความรู้สึกตนเองต่ำต้อยกว่าคนอื่น" },
              { key: "    ต้องพยายามต่อสู้เอาชนะ" },
              { key: "8. ต้องการมีอำนาจเหนือผู้อื่น" },
            ]}
            renderItem={({ item }) => (
              <Text
                style={{
                  fontFamily: "ThaiText",
                  marginLeft: 20,
                  marginRight: 10,
                  color: "darkblue",
                  fontSize: 18,
                  lineHeight: 20,
                }}
              >
                {item.key}
              </Text>
            )}
          />
          <Text
            style={{
              fontFamily: "ThaiText",
              marginLeft: 10,
              marginRight: 10,
              marginTop: 20,
              marginBottom: 5,
              color: "darkblue",
              fontSize: 18,
              lineHeight: 20,
            }}
          >
            ที่มาของข้อมูล :
          </Text>
          <Text
            style={{
              fontFamily: "ThaiText",
              marginLeft: 20,
              marginRight: 10,
              marginBottom: 20,
              color: "#fff",
              fontSize: 18,
              lineHeight: 20,
            }}
            onPress={() =>
              Linking.openURL(
                "https://www.rama.mahidol.ac.th/ramamental/generalknowledge/general/05142014-1901"
              )
            }
          >
            https://www.rama.mahidol.ac.th/ramamental/generalknowledge/general/05142014-1901
          </Text>
        </View>
      ),
    },
    {
      id: "2",
      title: "ผ่อนคลาย",
      description: "การผ่อนคลายทำอย่างไร ?",
      imageUrl: "../assets/2.jpg",
      content: (
        <View style={{ flexDirection: "column", width: "100%" }}>
          <Text
            style={{
              fontFamily: "ThaiText",
              marginTop: 20,
              marginLeft: 10,
              marginRight: 10,
              color: "darkblue",
              fontSize: 18,
              lineHeight: 20,
            }}
          >
            7 วิธีคลายเครียด เพิ่มพลังแห่งความสุข
          </Text>
          <FlatList
            data={[
              { key: "1. ตื่นและเข้านอนเวลาเดิมทุกวัน" },
              { key: "2. ดูแลสุขอนามัยส่วนบุคคล" },
              { key: "3. กินอาหารที่มีประโยชน์ให้ตรงเวลา" },
              { key: "4. ออกกำลังกายอย่างสม่ำเสมอ" },
              { key: "5. จัดสรรเวลาสำหรับการทำงานและ" },
              { key: "    การพักผ่อน" },
              { key: "6. หาเวลาทำสิ่งที่ชื่นชอบ" },
              { key: "7. พักจากการจ้องหน้าจอบ้าง" },
            ]}
            renderItem={({ item }) => (
              <Text
                style={{
                  fontFamily: "ThaiText",
                  marginLeft: 20,
                  marginRight: 10,
                  color: "darkblue",
                  fontSize: 18,
                  lineHeight: 20,
                }}
              >
                {item.key}
              </Text>
            )}
          />
          <Text
            style={{
              fontFamily: "ThaiText",
              marginTop: 20,
              marginLeft: 10,
              marginRight: 10,
              color: "darkblue",
              fontSize: 18,
              lineHeight: 20,
            }}
          >
            สิ่งที่ไม่ควรทำ
          </Text>
          <FlatList
            data={[
              { key: "1. การดื่มเครื่องดื่มแอลกอฮอล์" },
              { key: "2. การเสพติดสารเสพติดชนิดต่าง ๆ" },
            ]}
            renderItem={({ item }) => (
              <Text
                style={{
                  fontFamily: "ThaiText",
                  marginLeft: 20,
                  marginRight: 10,
                  color: "darkblue",
                  fontSize: 18,
                  lineHeight: 20,
                }}
              >
                {item.key}
              </Text>
            )}
          />
          <Text
            style={{
              fontFamily: "ThaiText",
              marginLeft: 10,
              marginRight: 10,
              marginTop: 20,
              marginBottom: 5,
              color: "darkblue",
              fontSize: 18,
              lineHeight: 20,
            }}
          >
            ที่มาของข้อมูล :
          </Text>
          <Text
            style={{
              fontFamily: "ThaiText",
              marginLeft: 20,
              marginRight: 10,
              marginBottom: 20,
              color: "#fff",
              fontSize: 18,
              lineHeight: 20,
            }}
            onPress={() =>
              Linking.openURL(
                "https://www.tiscoautocash.com/th/article/7wayrelax.html"
              )
            }
          >
            https://www.tiscoautocash.com/th/article/7wayrelax.html
          </Text>
        </View>
      ),
    },
    {
      id: "3",
      title: "ผู้เชี่ยวชาญ",
      description: "ปรึกกษา/ช่องทางการติดต่อผู้เชี่ยวชาญ ?",
      imageUrl: "../assets/3.jpg",
      content: (
        <View style={{ flexDirection: "column", width: "100%" }}>
          <Text
            style={{
              fontFamily: "ThaiText",
              marginLeft: 10,
              marginRight: 10,
              marginTop: 20,
              marginBottom: 5,
              color: "darkblue",
              fontSize: 18,
              lineHeight: 20,
              fontWeight: "bold",
            }}
          >
            Doctor Anywhere Thailand :
          </Text>
          <Text
            style={{
              fontFamily: "ThaiText",
              marginLeft: 20,
              marginRight: 10,
              color: "#fff",
              fontSize: 18,
              lineHeight: 20,
            }}
            onPress={() =>
              Linking.openURL(
                "https://www.doctoranywhere.co.th/mentalwellness?lang=th"
              )
            }
          >
            https://www.doctoranywhere.co.th/mentalwellness?lang=th
          </Text>
          <Text
            style={{
              fontFamily: "ThaiText",
              marginLeft: 20,
              marginRight: 10,
              marginBottom: 5,
              color: "darkblue",
              fontSize: 18,
              lineHeight: 20,
            }}
          >
            ปรึกกษาผู้เชี่ยวชาญด้านสุขภาพจิตได้ทุกที่ทุกเวลา
          </Text>
          <Text
            style={{
              fontFamily: "ThaiText",
              marginLeft: 10,
              marginRight: 10,
              marginTop: 20,
              marginBottom: 5,
              color: "darkblue",
              fontSize: 18,
              lineHeight: 20,
              fontWeight: "bold",
            }}
          >
            iSTRONG:
          </Text>
          <Text
            style={{
              fontFamily: "ThaiText",
              marginLeft: 20,
              marginRight: 10,
              color: "#fff",
              fontSize: 18,
              lineHeight: 20,
            }}
            onPress={() => Linking.openURL("https://www.istrong.co/experts")}
          >
            https://www.istrong.co/experts
          </Text>
          <Text
            style={{
              fontFamily: "ThaiText",
              marginLeft: 20,
              marginRight: 10,
              marginBottom: 5,
              color: "darkblue",
              fontSize: 18,
              lineHeight: 20,
            }}
          >
            นักจิตวิทยยา
          </Text>
          <Text
            style={{
              fontFamily: "ThaiText",
              marginLeft: 10,
              marginRight: 10,
              marginTop: 20,
              marginBottom: 5,
              color: "darkblue",
              fontSize: 18,
              lineHeight: 20,
              fontWeight: "bold",
            }}
          >
            Open Government Data of Thailand :
          </Text>
          <Text
            style={{
              fontFamily: "ThaiText",
              marginLeft: 20,
              marginRight: 10,
              color: "#fff",
              fontSize: 18,
              lineHeight: 20,
            }}
            onPress={() =>
              Linking.openURL("https://data.go.th/dataset/specialist")
            }
          >
            https://data.go.th/dataset/specialist
          </Text>
          <Text
            style={{
              fontFamily: "ThaiText",
              marginLeft: 20,
              marginRight: 10,
              marginBottom: 5,
              color: "darkblue",
              fontSize: 18,
              lineHeight: 20,
            }}
          >
            ข้อมูลผู้ทำหน้าที่นักจิตวิทยาหรือนักสังคมสงเคราะห์
            ที่ขึ้นทะเบียนไว้กับกระทรวงยุติธรรม
          </Text>
          <Text
            style={{
              fontFamily: "ThaiText",
              marginLeft: 10,
              marginRight: 10,
              marginTop: 20,
              marginBottom: 5,
              color: "darkblue",
              fontSize: 18,
              lineHeight: 20,
              fontWeight: "bold",
            }}
          >
            BeDee :
          </Text>
          <Text
            style={{
              fontFamily: "ThaiText",
              marginLeft: 20,
              marginRight: 10,
              color: "#fff",
              fontSize: 18,
              lineHeight: 20,
            }}
            onPress={() =>
              Linking.openURL(
                "https://www.bedee.com/articles/mental-health/psychologist-vs-psychiatrist"
              )
            }
          >
            https://www.bedee.com/articles/mental-health/psychologist-vs-psychiatrist
          </Text>
          <Text
            style={{
              fontFamily: "ThaiText",
              marginLeft: 20,
              marginRight: 10,
              marginBottom: 5,
              color: "darkblue",
              fontSize: 18,
              lineHeight: 20,
            }}
          >
            นักจิตวิทยากับจิตแพทย์ เมื่อมีปัญหาสุขภาพจิตจะเลือกคุยกับใครดี
          </Text>
          <Text
            style={{
              fontFamily: "ThaiText",
              marginLeft: 10,
              marginRight: 10,
              marginTop: 20,
              marginBottom: 5,
              color: "darkblue",
              fontSize: 18,
              lineHeight: 20,
              fontWeight: "bold",
            }}
          >
            iHealzy Thailand :
          </Text>
          <Text
            style={{
              fontFamily: "ThaiText",
              marginLeft: 20,
              marginRight: 10,
              color: "#fff",
              fontSize: 18,
              lineHeight: 20,
            }}
            onPress={() =>
              Linking.openURL(
                "https://ihealzy.com/what-we-need-to-know-about-psychologist/"
              )
            }
          >
            https://ihealzy.com/what-we-need-to-know-about-psychologist/
          </Text>
          <Text
            style={{
              fontFamily: "ThaiText",
              marginLeft: 20,
              marginRight: 10,
              marginBottom: 5,
              color: "darkblue",
              fontSize: 18,
              lineHeight: 20,
            }}
          >
            ผู้เชี่ยวชาญด้านจิตแพทย์ (What We Need to Know About Psychologist)
          </Text>
        </View>
      ),
    },
    {
      id: "4",
      title: "ผองเพื่อน",
      description: "มาคุยกับเพื่อนๆ ของคุณกันเถอะ !",
      imageUrl: "../assets/4.jpg",
      content: (
        <View style={{ flexDirection: "column", width: "100%" }}>
          <Text
            style={{
              fontFamily: "ThaiText",
              marginTop: 20,
              marginLeft: 10,
              marginRight: 10,
              color: "darkblue",
              fontSize: 18,
              lineHeight: 20,
            }}
          >
            We are so sorry. COMING SOON ขออภัยในความไม่สะดวก
            อยู่ในช่วงกำลังพัฒนา... สามารถติดต่อผู้พัฒนาได้ทางช่องทางนี้ค่ะ ^_^
          </Text>
          <Text
            style={{
              fontFamily: "ThaiText",
              marginLeft: 10,
              marginRight: 10,
              marginTop: 20,
              marginBottom: 5,
              color: "darkblue",
              fontSize: 18,
              lineHeight: 20,
              fontWeight: "bold",
            }}
          >
            Bam (Project Manager) :
          </Text>
          <Text
            style={{
              fontFamily: "ThaiText",
              marginTop:10,
              marginLeft: 20,
              marginRight: 10,
              color: "#fff",
              fontSize: 18,
              lineHeight: 20,
            }}
            onPress={() =>
              Linking.openURL(
                "https://www.instagram.com/aaibaam?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              )
            }
          >
            Instagram
          </Text>
          <Text
            style={{
              fontFamily: "ThaiText",
              marginLeft: 10,
              marginRight: 10,
              marginTop: 20,
              marginBottom: 5,
              color: "darkblue",
              fontSize: 18,
              lineHeight: 20,
              fontWeight: "bold",
            }}
          >
            Gun (Full Stack Developer) :
          </Text>
          <Text
            style={{
              fontFamily: "ThaiText",
              marginTop:10,
              marginLeft: 20,
              marginRight: 10,
              color: "#fff",
              fontSize: 18,
              lineHeight: 20,
            }}
            onPress={() =>
              Linking.openURL(
                "https://www.instagram.com/s_likker?igsh=Z3Z6N3RnMHFpMjRm"
              )
            }
          >
            Instagram
          </Text>
          <Text
            style={{
              fontFamily: "ThaiText",
              marginLeft: 10,
              marginRight: 10,
              marginTop: 20,
              marginBottom: 5,
              color: "darkblue",
              fontSize: 18,
              lineHeight: 20,
              fontWeight: "bold",
            }}
          >
            Field (UX/UI Designer) :
          </Text>
          <Text
            style={{
              fontFamily: "ThaiText",
              marginTop:10,
              marginLeft: 20,
              marginRight: 10,
              color: "#fff",
              fontSize: 18,
              lineHeight: 20,
            }}
            onPress={() =>
              Linking.openURL(
                "https://www.instagram.com/field_ansnv?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              )
            }
          >
            Instagram
          </Text>
          <Text
            style={{
              fontFamily: "ThaiText",
              marginLeft: 10,
              marginRight: 10,
              marginTop: 20,
              marginBottom: 5,
              color: "darkblue",
              fontSize: 18,
              lineHeight: 20,
              fontWeight: "bold",
            }}
          >
            Preaw (UX/UI Designer) :
          </Text>
          <Text
            style={{
              fontFamily: "ThaiText",
              marginTop:10,
              marginLeft: 20,
              marginRight: 10,
              marginBottom:20,
              color: "#fff",
              fontSize: 18,
              lineHeight: 20,
            }}
            onPress={() =>
              Linking.openURL(
                "https://www.instagram.com/_ppreax?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              )
            }
          >
            Instagram
          </Text>
        </View>
      ),
    },
  ];
  return (
    <View style={styles.container}>
      <DDCalendar />
      <ScrollView
        horizontal={true}
        indicatorStyle="white"
        contentContainerStyle={{ alignItems: "center" }}
      >
        {data.map((item, index) => (
          <View key={item.id} style={{ height: "100%" }}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={{ marginBottom: 14, height: "100%", width: "100%" }}
              onPress={() => navigation.navigate("DetailScreen", { item })}
            >
              <Image
                style={{
                  borderRadius: 14,
                  width: "170px",
                  height: "85%",
                  marginTop: 20,
                  marginBottom: 20,
                  marginLeft: 25,
                  borderRadius: 20,
                }}
                source={{ uri: item.imageUrl }}
                resizeMode="cover"
              />
              <View
                style={{
                  position: "absolute",
                  bottom: 20,
                  left: 10,
                }}
              >
                <View style={{ flexDirection: "row" }}>
                  <View style={{ flexDirection: "column", paddingLeft: 6 }}>
                    <Text
                      style={{
                        color: "#f5f3e5",
                        fontSize: 24,
                        fontWeight: "bold",
                        fontFamily: "ThaiText",
                        lineHeight: 20,
                        marginBottom: 5,
                        marginLeft: 0,
                        textShadowColor: "#f88369", // Shadow color
                        textShadowOffset: { width: 2, height: 2 }, // Shadow offset
                        textShadowRadius: 2,
                      }}
                    >
                      {index + 1}
                    </Text>
                    <Text
                      style={{
                        color: "#f5f3e5",
                        fontSize: 22,
                        fontWeight: "bold",
                        fontFamily: "ThaiText",
                        lineHeight: 20,
                        marginBottom: 10,
                        marginLeft: 0,
                        textShadowColor: "#f88369", // Shadow color
                        textShadowOffset: { width: 2, height: 2 }, // Shadow offset
                        textShadowRadius: 2,
                      }}
                    >
                      {item.title}
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  cardContainer: {
    display: "flex",
    flex: 1,
  },
});
