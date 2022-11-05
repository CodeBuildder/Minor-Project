import React, { useRef, useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { RandomReveal } from "react-random-reveal";
import MapView, { Marker } from "react-native-maps";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

export const details1 = [
  {
    id: 1,
    binName: "Bin 1",
    binStat: "Fully Filled",
    binLastUpdateDate: "12/10/2022",
    binLastTime: "23:05",
  },
  {
    id: 2,
    binName: "Bin 2",
    binStat: "Half Filled",
    binLastUpdateDate: "12/10/2022",
    binLastTime: "21:05",
  },
  {
    id: 3,
    binName: "Bin 3",
    binStat: "Empty",
    binLastUpdateDate: "12/10/2022",
    binLastTime: "21:05",
  },
  {
    id: 4,
    binName: "Bin 4",
    binStat: "Half Filled",
    binLastUpdateDate: "12/10/2022",
    binLastTime: "21:05",
  },
  {
    id: 5,
    binName: "Bin 5",
    binStat: "Fully Filled",
    binLastUpdateDate: "12/10/2022",
    binLastTime: "21:05",
  },
];

export default function Dashboard({ navigation, route }) {
  const [binDetails, setBinDetails] = useState([0]);
  const data = route.params.paramKey;

  useEffect(() => {
    setBinDetails(details1);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>
          <RandomReveal isPlaying duration={2} characters={`Hello, ${data}`} />
        </Text>
      </View>

      <ScrollView>
        {binDetails.length > 0 ? (
          binDetails.map((item) => (
            <TouchableOpacity onPress={console.log("Hello")}>
              <View style={styles.whiteContainer}>
                <View style={styles.mapContainer}>
                  <Text style={{ color: "#868585" }}>Bin Details</Text>
                  <MapView
                    style={styles.map}
                    initialRegion={{
                      latitude: 12.8246444,
                      longitude: 80.04305,
                      latitudeDelta: 0.001,
                      longitudeDelta: 0.001,
                    }}
                  >
                    <Marker
                      coordinate={{
                        latitude: 12.8246444,
                        longitude: 80.04305,
                      }}
                    />
                  </MapView>
                </View>
                <View style={styles.detailsContainer}>
                  <Text style={styles.detailsText}>{item.binName}</Text>
                  <Text style={styles.detailsText}>Stat: {item.binStat}</Text>
                  <Text style={styles.detailsText}>
                    Last Updated: {item.binLastUpdateDate}
                  </Text>
                  <Text style={styles.detailsText}>
                    Time: {item.binLastTime}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          ))
        ) : (
          <Text>Poda</Text>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#77d392",
    color: "black",
  },
  nameContainer: {
    margin: 10,
  },
  name: {
    marginTop: 50,
    color: "black",
    fontSize: 20,
  },
  whiteContainer: {
    backgroundColor: "white",
    flexDirection: "row",
    margin: 15,
    padding: 10,
    borderRadius: 5,
  },
  map: {
    width: 100,
    height: 110,
    marginTop: 10,
  },
  detailsContainer: {
    margin: 10,
    marginTop: 30,
  },
  detailsText: {
    margin: 1.5,
    color: "#6C6767",
  },
});
