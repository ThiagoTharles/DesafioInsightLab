import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Tarifa from './Screens/tarifa';
import Planos from './Screens/planos';
import Salvos from './Screens/salvos';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer >
        <Tab.Navigator >
          <Tab.Screen name="Tarifa" component={Tarifa} />
          <Tab.Screen name="Planos" component={Planos} />
          <Tab.Screen name="Salvos" component={Salvos} />
        </Tab.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
});
