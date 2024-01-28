//import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';

import { MEALS } from '../data/dummy_data';
import MealsList from '../components/MealsList/MealsList';
//import { FavoritesContext } from '../store/context/favorites-context';

function FavoritesScreen({ navigation }){
    //const favoriteMealsCtx = useContext(FavoritesContext);
    const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);

    //const favoriteMeals = MEALS.filter(meal => favoriteMealsCtx.ids.includes(meal.id));
    const favoriteMeals = MEALS.filter(meal => favoriteMealIds.includes(meal.id));

    if(favoriteMeals.length === 0){
        return (
            <View style={styles.container}>
                <Text style={styles.body}>You don't have favorite meals yet!</Text>
            </View>
        );
    }
    return <MealsList items={favoriteMeals} navigation={navigation}/>
}

export default FavoritesScreen;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    body: {
        fontFamily: 'oswald-regular',
        fontSize: 16,
    }
})