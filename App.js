import { StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import AppLoading from 'expo-app-loading';
import { Provider } from 'react-redux';

import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import COLORS from './constants/colors';
//import FavoritesContextProvider from './store/context/favorites-context';
import { store } from './store/redux/store';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator(){
  return <Drawer.Navigator screenOptions={{
      headerStyle:{ backgroundColor: COLORS.fifth},
      headerTintColor: COLORS.third,
      sceneContainerStyle: { backgroundColor: COLORS.third}, // == to contentStyle for StackNavigator
      drawerContentStyle: { backgroundColor: COLORS.first},
      drawerActiveBackgroundColor: COLORS.third,
      drawerActiveTintColor: COLORS.fourth,
      drawerInactiveTintColor: COLORS.third
    }}>
    <Drawer.Screen 
      name="Categories" 
      component={CategoriesScreen} 
      options={{
        title: "All Categories",
        drawerIcon: ({color, size}) => <Ionicons name="list" color={color} size={size} />
      }}/>
    <Drawer.Screen 
      name="Favorites" 
      component={FavoritesScreen}
      options={{
        drawerIcon: ({color, size}) => <Ionicons name="star" color={color} size={size} />
      }}/>
  </Drawer.Navigator>
}

export default function App() {

  const [fontsLoaded] = useFonts({
    'oswald-extralight': require('./assets/fonts/Oswald-ExtraLight.ttf'),
    'oswald-light': require('./assets/fonts/Oswald-Light.ttf'),
    'oswald-regular': require('./assets/fonts/Oswald-Regular.ttf')
  });

  if(!fontsLoaded){
    return <AppLoading />
  }

  return (
    <>
      {/* StatusBar -> Utility component */}
      <StatusBar style='light' />
      {/*<FavoritesContextProvider>*/}
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator 
            initialRouteName='MealsCategories'
            screenOptions={{
              headerStyle:{ backgroundColor: COLORS.fifth},
              headerTintColor: COLORS.third,
              contentStyle: { backgroundColor: COLORS.third}
            }} >
            <Stack.Screen name="MealsCategories" 
              component={DrawerNavigator}
              options={{
                headerShown: false
              }} />
            <Stack.Screen name="MealsOverview" 
              component={MealsOverviewScreen} 
              // DINAMIC NAVIGATION OPTION 1
              //options={({ route, navigation })=>{
              //  const catId = route.params.categoryId;
              //  return {
              //    title: catId
              //  }
              //}} 
              />
            <Stack.Screen name="MealDetail"
              component={MealDetailScreen}
              options={{
                title: "About the meal"
              }} />
          </Stack.Navigator>
        </NavigationContainer>
        </Provider>
      {/*</FavoritesContextProvider>*/}
    </>
    
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
