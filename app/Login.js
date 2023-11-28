// LoginScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button,ActivityIndicator  } from 'react-native';
import { supabase } from './supabase';
import { useRouter } from 'expo-router';



const LoginScreen = () => {

  const router =  useRouter()
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [usrdata, setData] = useState(null);

  const handleLogin = async () => {
    // try {
    //   const { user, error } = await supabase.auth.signIn({ email, password });
    //   if (error) {
    //     console.error(error.message);
    //     return;
    //   }
    //   // Login successful, navigate to home screen
    //   // You can handle user session here, for example, using AsyncStorage
    // } catch (error) {
    //   console.error(error);
    // }

    
        const { data, error } = await supabase.auth.signInWithPassword({
          email: Email,
          password: Password
        })

        if(data != ''){
          setIsLoading(true);
          // Simulate an asynchronous data fetch
          await new Promise((resolve) => setTimeout(resolve, 2000));

           setData(data.user.id);
          await new Promise((resolve) => setTimeout(resolve, 2000));
          setIsLoading(false);
          //usrdata


          alert(' Logged In ')
          // console.log(data.user.id)
          // router.push({ pathname: "home", params: { post: "random", usrdata:data.user.id} })
          router.push('home')
          // router.push({
          //   pathname: "home",
          //   // /* 1. Navigate to the details route with query params */
          //   params: { usrData: data },
          // })
        }
    
  };

  return (
    <View>

      {isLoading && <ActivityIndicator size="large" color="#0000ff" />}

      {!isLoading && !usrdata && (

        <> 
        <TextInput
        placeholder="Email"
        value={Email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Password"
        value={Password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
        
        </>
      

      )}
    </View>
  );
};

export default LoginScreen;
