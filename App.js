import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View, Image } from 'react-native';

import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './Components/Home';
import Details from './Components/Details';


const Stack = createNativeStackNavigator();


function LogoTitle() {
  return (
    <Image
      style={{ width: '47%', height: 50, resizeMode: 'stretch', marginStart: 90 ,borderRadius: 50  }}
      source={require('./assets/image.png')}
      
    />
  );
}

function LogoTitle2() {
  return (
    <Image
      style={{ width: '50%', height: 55, resizeMode: 'cover', marginStart: 35 , }}
      source={require('./assets/details.jpg')}
      
    />
  );
}


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options=  {{ headerStyle : {backgroundColor: 'black'} ,  headerTitle: (props) => <LogoTitle {...props} /> }}
        />
        <Stack.Screen
        name='Details'
        component={Details}
        options=  {{ headerStyle : {backgroundColor: '#ffcb80'} ,  headerTitle: (props) => <LogoTitle2 {...props} /> }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;

