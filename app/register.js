import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import { supabase } from "./supabase";
import { router } from "expo-router";

const Register = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [user_ID, setuserID] = useState("");

  const handleRegister = async () => {
    if (Email != "" && Password != "") {
      alert(Password);
      try {
        console.log(Password);
        console.log(Email);
        const { data, error } = await supabase.auth.signInWithPassword({
          email: Email,
          password: Password,
        });
        // ------------ Send a confirmation email to the user
        const confirmationEmail = await supabase.auth.sendConfirmationEmail(
          Email
        );

        if (confirmationEmail.error) {
          // Handle the error
          Alert.prompt(confirmationEmail.error)
          return;
        }

        //--------------------- Display a message to the user letting them know that they need to confirm their account

        // setEmail('');
        // setPassword('')

        if (data != "") {
          alert("Signed Up");
        }

        // alert('signed up ')
        // console.log(data.user.email)
        console.log(data);
        // router.push('Login')
        // setEmail('')
        // setPassword('')
      } catch (error) {
        console.error(error);
      }
    } else {
      alert(" Please put complete details");
    }
  };

  return (
    <View>
      <Text>Register</Text>
      <TextInput
        placeholder="Email"
        value={Email}
        onChangeText={(text) => setEmail(text)}
        required
      />
      <TextInput
        placeholder="Password Should be atleast 6 character long"
        value={Password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
        required
      />
      <Button title="Register" onPress={handleRegister} />
    </View>
  );
};

export default Register;
