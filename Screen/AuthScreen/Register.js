import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { WindowHeight, WindowWidth } from "../../GlobalCSS";
import { ScrollView } from "react-native-gesture-handler";

export default function Registration({ navigation }) {
  const [user, setUser] = useState({
    // using single state with many objects known as object state
    name: "",
    phone: "", //keys = objects
    email: "",
    password: "",
  });

  const handleChange = (value, key) => {
    setUser({ ...user, [key]: value });
  };
  const handleClear = () => {
    setUser({
      name: " ",
      phone: " ",
      email: " ",
      password: " ",
    });
  };

  const Register = async () => {
    let old_data = await AsyncStorage.getItem("register");
    old_data = JSON.parse(old_data) || [];
    let user_id = 1001;
    if (old_data) {
      if (old_data.length === 0 || old_data.length == null) {
        user_id = 1001;
      } else {
        user_id = old_data[old_data.length - 1].user_id + 1;
      }
    }
    let details = {
      user_id: user_id,
      name: user.name,
      phone: user.phone,
      email: user.email,
      password: user.password,
    };

    let all_details = [...old_data, details];
    //console.log(details,88888)

    await AsyncStorage.setItem("register", JSON.stringify(all_details));
    navigation.navigate("Login");
  };

  return (
    <ScrollView style={styles.mainContainer}>
    <View >
      <View>
        <Image
          style={styles.image}
          source={{
            uri:"https://img.freepik.com/free-vector/social-media-marketing-mobile-phone-concept_23-2148431745.jpg?w=740&t=st=1702119667~exp=1702120267~hmac=2e04408c8b852b7670285594823ffef7b6cc8d15d0e5a51928c0772cacb2f43c",
          }}
        />
      </View>
      <Text style={styles.heading}>Register to continue</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your Name"
        onChangeText={(value) => handleChange(value, "name")}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter your Phone Number"
        onChangeText={(value) => handleChange(value, "phone")}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Your Email"
        onChangeText={(value) => handleChange(value, "email")}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter Your Password"
        onChangeText={(value) => handleChange(value, "password")}
      />
      <TouchableOpacity style={styles.button1} onPress={Register}>
        <Text style={styles.forgotText}>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleClear} style={styles.button2}>
        <Text style={styles.forgotText}>Clear</Text>
      </TouchableOpacity>
      <View>
        <Text style={styles.ForLogin}>
         Do you have an account?{" "}
          <Text
            onPress={() => navigation.navigate("Login")}
            style={styles.Login}
          >
             Login
          </Text>
        </Text>
      </View>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "white",
    height:WindowHeight,
  },
  image: {
    width: WindowWidth * 1,
    height: WindowHeight * 0.4,
    borderRadius: 30,
  },
  heading: {
    fontSize: 25,
    marginTop: 20,
    textAlign: "center",
    marginBottom: 10,
    color: "#0BA8E6",
  },
  input: {
    borderWidth: 1,
    borderRadius: 30,
    height: "20",
    width: WindowWidth - 18,
    margin: 5,
    padding: 10,
    marginLeft: 10,
    textAlign: "center",
    borderColor: "#0BA8E6",
    // marginBottom: 20,
    fontSize: 18,
  },

  button1: {
    backgroundColor: "#0BA8E6",
    height: "auto",
    width: "45%",
    elevation: 10,
    shadowColor: "gray",
    marginTop: 20,
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowRadius: 15,
    shadowOpacity: 50,
    margin: 10,
    paddingBottom: 20,
    borderRadius: 40,
  },
  button2: {
    backgroundColor: "#0BA8E6",
    height: "auto",
    width: "45%",
    elevation: 10,
    shadowColor: "gray",
    marginLeft: "52%",
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowRadius: 15,
    shadowOpacity: 50,
    paddingBottom: 20,
    marginTop: -63,
    borderRadius: 40,
  },
  forgotText: {
    color: "white",
    paddingHorizontal: 25,
    justifyContent: "center",
    textAlign: "center",
    // fontWeight: 500,
    paddingTop: 15,
    fontSize: 18,
  },

  ForLogin: {
    alignContent: "center",
    textAlign: "center",
    paddingTop: 15,
    color:"#0BA8E6"
  },

  Login: {
    textDecorationLine: "underline",
    color: "#0BA8E6",
    textAlign: "center",
  },
});
