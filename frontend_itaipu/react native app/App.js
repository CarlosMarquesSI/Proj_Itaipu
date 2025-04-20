import {useEffect, useRef, useState} from "react";
import { SafeAreaView } from 'react-native';
import { Provider, MD3LightTheme } from 'react-native-paper';
import useWebSocket, {ReadyState} from "react-use-websocket";

import BottomNavigator from './components/BottomNavigator';
import Header from './components/Header';


export default function App() {

  const [conectado,setConectado] = useState(false);
  const [arracoadorId,setArracoadorId] = useState(-1);

  const statusInterval = useRef()

  const {sendMessage,lastMessage,readyState} = useWebSocket("ws://localhost:8080",{
    onOpen: ()=>{setConectado(true)},
    onError: ()=>{setConectado(false)},
    onClose: ()=>{setConectado(false)},
    onMessage: (msg)=>{
      const parsed = msg.data.split("|");
      console.log(parsed)
      switch(parsed[0]) {
        case "ident":
          sendMessage("ident|1");
          break;
        case "connect":
          setArracoadorId(Number(parsed[1]));
          if(statusInterval.current) clearInterval(statusInterval.current);
          statusInterval.current = setInterval(()=>{
            sendMessage("dstat|"+parsed[1]);
          },1000)
          break;
        case "disconnect":
          setArracoadorId(-1);
          if(statusInterval.current) clearInterval(statusInterval.current);
          break;
        case "stat":
          const [,peso,tempo,servo] = parsed;
          console.log(peso,tempo,servo);
          sendMessage("stat_ack");

          //isso n vai dar nem um pouco certo
      }
    },
    shouldReconnect:()=>true,
    retryOnError:true
  });

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Provider theme={MD3LightTheme}>
        <Header conectado={conectado}/>
        <BottomNavigator />
      </Provider>
    </SafeAreaView>
  );
}
