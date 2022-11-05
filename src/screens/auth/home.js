import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={{
          uri: "https://cdn.iconscout.com/icon/premium/png-256-thumb/smart-dustbin-3421340-2866349.png",
        }}
      />
      <Text style={styles.name}>SmartBin</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#77d392",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 150,
    height: 150,
  },

  name: {
    marginTop: 50,
    color: "black",
    fontSize: 55,
    fontFamily: "",
  },
});
