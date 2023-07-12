import HomeMap from './src/home/homemap';
import CameraMap from './src/camera/cameramap';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();
export default function App() {
  return (
   
    
    <NavigationContainer>
  <Stack.Navigator>
    <Stack.Screen name="HomeMap" component={HomeMap} />
    <Stack.Screen name="CameraMap" component={CameraMap} />
  </Stack.Navigator>
</NavigationContainer>
  );
  
}

