import { View, Pressable, Text, StyleSheet, Platform } from 'react-native';

import COLORS from '../constants/colors';

function CategoryGridTile({title, color, onPress}){
    
    return (
        <View style={styles.gridItem}>
            <Pressable 
                onPress={onPress}
                style={({pressed}) => [
                    styles.button,
                    pressed ? styles.buttonPressed : null
                ]}>
                <View style={[styles.gridContainer, { backgroundColor: COLORS.first }]}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </Pressable>
        </View>
    );  
}

export default CategoryGridTile;

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 2,
        //IOS and Android --
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
        // -----------------
    },
    button: {
        flex: 1
    },
    buttonPressed: {
        opacity: 0.5
    },
    gridContainer: {
        flex: 1,
        padding: 16,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontFamily: 'oswald-regular',
        fontSize: 22,
        color: COLORS.fourth
    }

});