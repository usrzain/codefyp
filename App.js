// 

// ------------------------------------------

import 'react-native-url-polyfill/auto';
import { useState, useEffect } from 'react';
import { supabase } from './lib/supabase';
import Auth from './Components/Auth';
import Account from './Components/Accounts';
import  {View , Text } from 'react-native';
import { Session } from '@supabase/supabase-js';
import { StyleSheet } from 'react-native';
import Layout from './app/_layout';

const App = () => {
  
  
  

  // useEffect(() => {
  //   supabase.auth.getSession().then(({ data: { session } }) => {
  //     setSession(session);
  //   });

  //   supabase.auth.onAuthStateChange((_event, session) => {
  //     setSession(session);
  //     console.log(session)
  //   });
  // }, []);

  return (
    

    <>
       <Layout />
    </>
  );
};

export default App;
