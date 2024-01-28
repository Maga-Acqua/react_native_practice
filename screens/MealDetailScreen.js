import { useContext, useLayoutEffect } from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

import { MEALS } from "../data/dummy_data";
import COLORS from "../constants/colors";
import List from "../components/List";
import IconButton from "../components/IconButton";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../store/redux/favorites";
//import { FavoritesContext } from "../store/context/favorites-context";

function MealDetailScreen({ route, navigation }){
    //const favoriteMealsCtx = useContext(FavoritesContext);
    const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
    const dispatch = useDispatch();

    const mealId = route.params.mealId;

    const selectedMeal = MEALS.find((meal) => meal.id === mealId);

    //const mealIsFavorite = favoriteMealsCtx.ids.includes(mealId);
    const mealIsFavorite = favoriteMealIds.includes(mealId);

    function changeFavoriteStatusHandler(){
        if(mealIsFavorite){
            //favoriteMealsCtx.removeFavorite(mealId);
            dispatch(removeFavorite({id: mealId}));
        } else {
            //favoriteMealsCtx.addFavorite(mealId);
            dispatch(addFavorite({id: mealId}));
        }
    }
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerRight: ()=>{
                return <IconButton 
                    icon={mealIsFavorite ? "star" : "star-outline"} 
                    color="white" 
                    onPress={changeFavoriteStatusHandler} />
            }
        }, [navigation, changeFavoriteStatusHandler ]);
    });

    return (
        <ScrollView style={styles.rootContainer}>
            <Image style={styles.image} source={{uri: selectedMeal.imageUrl}}/>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{selectedMeal.title}</Text>
            </View>
            <View style={styles.extraContainer}>
                <Text style={styles.extra}>Duration: {selectedMeal.duration}m</Text>
                <Text style={styles.extra}>Complexity: {selectedMeal.complexity}</Text>
            </View>
            <View style={styles.bodyContainer}>
                <Text style={styles.bodyTitle}>Ingredients</Text>
                <List data={selectedMeal.ingredients} />
                
                <Text style={styles.bodyTitle}>Steps</Text>
                <List data={selectedMeal.steps} />
            </View>
        </ScrollView>
    );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 32
    },
    image: {
        width: '100%',
        height: 300
    },
    titleContainer: {
        padding: 8,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.second
    },
    title: {
        fontFamily: 'oswald-regular',
        fontSize: 18,
        color: COLORS.fourth,
    },
    extraContainer: {
        paddingTop: 5,
        paddingBottom: 15,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.fourth
    },
    extra: {
        fontFamily: 'oswald-regular',
        fontSize: 16,
        color: 'white'
    },
    bodyContainer: {
        marginTop: 10,
        marginLeft: 25,
        marginRight: 25
    },
    bodyTitle: {
        fontFamily: 'oswald-regular',
        fontSize: 18,
    }
});