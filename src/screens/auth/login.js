import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";

function LoginScreen({ navigation }) {
  const [email, onChangeEmail] = React.useState("");
  const [password, onChangePassword] = React.useState("");

  function loginHandler() {
    navigation.navigate("Dashboard", {
      paramKey: email,
    });
  }

  return (
    <View style={styles.container}>
      <View style={styles.authContainer}>
        <TextInput
          style={styles.inputEmail}
          onChangeText={onChangeEmail}
          placeholder="Enter your name"
          placeholderTextColor="#000"
          value={email}
          type="email"
        />
        <TextInput
          style={styles.inputPassword}
          onChangeText={onChangePassword}
          placeholder="Password"
          placeholderTextColor="#000"
          value={password}
          type
        />
        <Text
          style={styles.labelPass}
          onPress={() => {
            console.log("hi");
          }}
        >
          Forget Password?
        </Text>
      </View>
      <TouchableOpacity
        style={styles.loginButton}
        color="#ED6E7D"
        onPress={() => {
          loginHandler();
        }}
      >
        <Text style={{ color: "#ffffff" }}>Login</Text>
      </TouchableOpacity>

      <View style={styles.signupContainer}>
        <Text style={styles.label}>Don't have an Account?</Text>
        <Text
          style={(styles.label, { color: "blue", marginTop: 15 })}
          onPress={() => {
            console.log("hi");
          }}
        >
          {"  "}Signup Now
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
  },
  logo: {
    width: 250,
    height: 100,
    resizeMode: "stretch",
  },

  authContainer: {
    flex: 0.5,
    flexDirection: "column",
    width: 300,
  },
  labelText: {
    fontSize: 20,
    color: "#0BB7A2",
    fontWeight: "700",
    color: "#000000",
  },
  labelPass: {
    textAlign: "right",
    //marginLeft: 140,
    fontWeight: "600",
    color: "#000000",
  },
  label: {
    marginTop: 15,
    fontWeight: "600",
    color: "#000000",
  },
  inputEmail: {
    height: 40,
    margin: 12,
    marginTop: 75,
    backgroundColor: "#efeaeb",
    padding: 10,
    width: 250,
    color: "#000000",
  },
  inputPassword: {
    height: 40,
    margin: 12,
    backgroundColor: "#efeaeb",
    padding: 10,
    width: 250,
    color: "#000000",
  },
  loginButton: {
    backgroundColor: "#3D9CF3",
    alignItems: "center",
    justifyContent: "center",
    width: 250,
    padding: 10,
    marginTop: 15,
  },
  signContainer: {
    flex: 0.5,
    flexDirection: "row",
    marginTop: 20,
  },
  signupContainer: {
    flex: 0.15,
    flexDirection: "row",
  },
});

export default LoginScreen;
