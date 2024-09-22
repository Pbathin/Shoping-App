import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { WindowHeight,WindowWidth } from "../../GlobalCSS";
import { ScrollView } from "react-native-gesture-handler";

export default function Login({ navigation }) {
  const [user, setUser] = useState({});

  const handleChange = (value, name) => {
    setUser({
      ...user,
      [name]: value,
    });
  };
  const Login = async () => {
    let data = await AsyncStorage.getItem("register");
    data = JSON.parse(data);
    let check = data.filter((item) => {
      return item.email == user.email && item.password == user.password;
    });
    console.log(check.length);
    if (check.length > 0) {
      alert("Login Successfull");

      navigation.navigate("Main");
    } else {
      alert("Login Unsuccessfull !!");
    }
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView>
      <View>
        <Image
          style={styles.image}
          source={{
            uri:"https://1660200928.rsc.cdn77.org/wp-content/uploads/2019/12/shopping-apps.jpg",
          }}
        />
      </View>
      <View style={styles.loginContainer}>
        <Text style={styles.heading}>Login to continue</Text>
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
        <TouchableOpacity style={styles.button} onPress={Login}>
          <Text style={styles.forgotText}>Login</Text>
        </TouchableOpacity>

        <View>
          <Text style={styles.ForRegister}>
            You don't have an account?{" "}
            <Text
              onPress={() => navigation.navigate("Register")}
              style={styles.SignUp}
            >
              Sign Up
            </Text>
          </Text>
        </View>
      </View>
      </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  image: {
    width: WindowWidth ,
    height: WindowHeight * 0.75,
    borderRadius: 30,
    marginTop: 5,
    marginLeft:5,
    
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  heading: {
    fontSize: 25,
    marginTop: 15,
    textAlign: "center",
    marginBottom: 15,
    color: "purple",
    // color: "#92735D",
  },
  input: {
    borderWidth: 1,
    borderRadius: 30,
    height: "auto",
    width: WindowWidth - 18,
    margin: 10,
    padding: 15,
    textAlign: "center",
    borderColor: "purple",
    marginTop: 15,
    marginBottom: 15,
    fontSize:18
  },

  button: {
    backgroundColor: "purple",
    height: "auto",
    width: "50%",
    elevation: 10,
    marginLeft:100,
    shadowColor: "lightpurple",
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
  forgotText: {
    color: "white",
    paddingHorizontal: 25,
    justifyContent: "center",
    textAlign: "center",
    // fontWeight: 500,
    paddingTop: 13,
    fontSize: 18,
  },

  ForRegister: {
    alignContent: "center",
    textAlign: "center",
    paddingTop: 10,
    color: "purple",
  },

  SignUp: {
    textDecorationLine: "underline",
    color: "purple",
    textAlign: "center",
    
  },

  loginContainer: {
    width: WindowWidth*0.4,
    marginTop: 10,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    alignItems:"center"
    
  },
});
