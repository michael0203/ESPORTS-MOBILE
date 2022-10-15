
import { StatusBar } from 'react-native';
import { useFonts, Inter_400Regular, Inter_600SemiBold, Inter_700Bold, Inter_900Black } from '@expo-google-fonts/inter';

import { Rotas }      from './src/routes';
import { Background } from './src/componentes/background';
import { Loading }    from './src/componentes/Loading';
import { Subscription } from "expo-modules-core";
import "./src/services/notificationConfigs";
import { useRef, useEffect } from "react";
import * as Notifications from "expo-notifications";
import { getPushNotificationToken } from "./src/services/getPushNotificationToken";

export default function App() {

  const[fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black
  });

  const getNotificationListener = useRef<Subscription>();
  const responseNotificationListener = useRef<Subscription>();
  
  useEffect(() => {
    getPushNotificationToken();
  }, []);

  useEffect(() => {
    getNotificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {});

    responseNotificationListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {});

    return () => {
      if (
        getNotificationListener.current &&
        responseNotificationListener.current
      ) {
        Notifications.removeNotificationSubscription(
          getNotificationListener.current
        );
        Notifications.removeNotificationSubscription(
          responseNotificationListener.current
        );
      }
    };
  }, []);

  return (
    <Background >
      <StatusBar 
        barStyle        ="light-content"
        backgroundColor ="transparent"
        translucent/>
        {fontsLoaded ? <Rotas /> : <Loading/>} 
    </Background>
  );
}

