import { View, FlatList } from 'react-native';

import MealItem from './MealItem';

function MealsList({ items, navigation }) {

    function renderMealItem(itemData){
        const item = itemData.item;

        function pressHandler(){
            navigation.navigate('MealDetail', {
                mealId: item.id
            });
        }

        const mealItemProps = {
            title: item.title,
            imageUrl: item.imageUrl,
            duration: item.duration,
            complexity: item.complexity,
            onPress: pressHandler
        }
        return <MealItem {...mealItemProps} />;
    }

    return (
        <View>
            <FlatList 
            data={items} 
            keyExtractor={(item) => item.id} 
            renderItem={renderMealItem} 
            />
        </View>
    );
}
export default MealsList;