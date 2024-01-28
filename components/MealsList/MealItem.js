import { View, Text, Pressable, StyleSheet, Image } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';

import COLORS from '../../constants/colors';

function MealItem({ title, imageUrl, duration, complexity, onPress }){
    return (
        <View>   
            <Card containerStyle={styles.container}>
                <Card.Image source={{ uri:imageUrl }} style={styles.image} />
                <Card.Divider/>
                <Card.Title style={styles.title}>{title}</Card.Title>
                <View style={styles.extra}>
                    <Card.FeaturedSubtitle style={styles.extraText}>Duration: {duration}m</Card.FeaturedSubtitle>
                    <Card.FeaturedSubtitle style={styles.extraText}>Complexity: {complexity}</Card.FeaturedSubtitle>
                </View>
                <Button
                    icon={<Icon name='visibility' color='#ffffff'/>}
                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor: COLORS.first}}
                    title='VIEW NOW'
                    onPress={onPress} />
            </Card> 
        </View>
    )
}

export default MealItem;

const styles = StyleSheet.create({
    container: {
        padding: 0,
        backgroundColor: COLORS.second,
        borderColor: COLORS.first,
        borderWidth: 4
    },
    title: {
        fontFamily: 'oswald-light',
        fontSize: 16,
        color: COLORS.fourth
    },
    extra: {
        paddingTop: 10,
        paddingBottom: 5,
        alignItems: 'center',
        backgroundColor: COLORS.fourth
    },
    extraText: {
        fontFamily: 'oswald-light',
        fontSize: 14,
        color: 'white'
    }
});