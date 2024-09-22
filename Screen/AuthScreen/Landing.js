import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { WindowHeight } from "../../GlobalCSS";
import { WindowWidth } from "../../GlobalCSS";

export default function Landing({ navigation }) {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View>
        <Image
          style={styles.image}
          source={{
            uri: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.dribbble.com%2Fusers%2F4843167%2Fscreenshots%2F14540242%2Fmedia%2Fa3147b494cb28f4a874ebebea0370844.jpg%3Fcompress%3D1%26resize%3D400x300%26vertical%3Dtop&f=1&nofb=1&ipt=8edcb5f41e507e47853e9d57579bf789d10aa788429253b4aff9d8c8dc893975&ipo=images",
          }}
        />
      </View>
      <View style={styles.subContainer}>
        <View style={styles.boardHeader}>
        {/* <Text style={styles.label}>Hi.., </Text> */}
        <Text style={styles.label}>Let's   </Text>
        <Text style={styles.label}>start</Text>
        <Text style={[styles.label, { paddingBottom: -5 }]}>Shoping...! </Text>
      </View>

      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.StartedBtn}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.BtnLabel}>Get Started</Text>
      </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    height: WindowHeight *1 ,
    width: WindowWidth*1,
    backgroundColor: "black",    
  },
  subContainer:{  
    borderWidth:0.9,
    borderColor:"white",
    backgroundColor: "black",
    height: WindowHeight *0.7,
    borderRadius:35,
    padding:20,
    marginLeft:5,
    borderBottomColor:"black",
    borderBottomLeftRadius:0,
    borderBottomRightRadius:0
  },
  image: {
    height: WindowHeight * 0.45,
    width: WindowWidth,
    marginTop:10
  },
  boardHeader: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginTop: 50,
    borderColor:"white",
  },
  label: {
    fontSize: 50,
    fontWeight: "bold",
    marginBottom: -10,
    color: "white",
    paddingBottom: 20,
  },
  StartedBtn: {
    backgroundColor: "white",
    width: 180,
    padding: 20,
    borderRadius: 200,
    margin: 15,
    marginTop:50,
    alignItems: "center",
    elevation: 2,
  },
  BtnLabel: {
    fontSize: 20,
    color: "black",
  },
});
