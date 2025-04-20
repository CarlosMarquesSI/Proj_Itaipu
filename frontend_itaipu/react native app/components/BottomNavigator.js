import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';

import Alimentador from "../screens/Alimentador"

import Monitorar from "../screens/Monitorar"

import Tanque from '../screens/Tanque'

import Camera from '../screens/Camera'

const ComoUsar = () => <Text>Como Usar</Text>;

export default function BottomNavigator() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: 'monitorar',
      title: 'Monitorar',
      focusedIcon: 'clipboard-text-search-outline',
      unfocusedIcon: 'clipboard-text-search',
    },
    {
      key: 'alimentador',
      title: 'Alimentador',
      focusedIcon: 'grain',
      unfocusedIcon: 'grain',
    },
    {
      key: 'tanque',
      title: 'Tanque',
      focusedIcon: 'fishbowl',
      unfocusedIcon: 'fishbowl-outline',
    },
    {
      key: 'camera',
      title: 'Camera',
      focusedIcon: 'camera',
      unfocusedIcon: 'camera-outline',
    },
    {
      key: 'comoUsar',
      title: 'Como Usar',
      focusedIcon: 'information',
      unfocusedIcon: 'information-outline',
    },
  ]);

  const [tanques,setTanques] = React.useState([
    {nome:"teste",ip:"0.0.0.0"},
    {nome:"teste",ip:"0.0.0.0"}
  ]);
  const [alimentador,setAlimentador] = React.useState([
    {horario: "07:00",status:"OK",gramas:300}
  ]);
  const [tanqueIdx,setTanqueIdx] = React.useState([]);


  const renderScene = ({route}) => {
    switch(route.key) {
      case "monitorar":
        return <Monitorar tanques={tanques} tanqueIdx={tanqueIdx}/>
      case "alimentador":
        return <Alimentador alimentador={alimentador} setAlimentador={setAlimentador}/>
      case "tanque":
        return <Tanque tanques={tanques} setTanques={setTanques} tanqueIdx={tanqueIdx} setTanqueIdx={setTanqueIdx}/>
      case "camera":
        return <Camera/>
      case "comoUsar":
        return <ComoUsar/>
      default:
        return null;
    }
  }
  /*BottomNavigation.SceneMap({
    monitorar: Monitorar,
    alimentador: Alimentador,
    tanque: Tanque,
    camera: Camera,
    comoUsar: ComoUsar,
  });*/

  return (
    <BottomNavigation
      theme={{
        colors: {
          elevation: {
            level2: '#1b1d20',
          },
          secondaryContainer: '#2b2d30',
          onSecondaryContainer: '#fff',
          onSurface: '#fff',
          onSurfaceVariant: '#aaa',
        },
      }}
      
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
}
