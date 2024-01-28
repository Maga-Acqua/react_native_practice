import { Text, StyleSheet } from 'react-native';

function List({data}){
    return data.map((dataPoint)=>(
        <Text style={styles.body} key={dataPoint}>{dataPoint}</Text>
    ));
}

export default List;

const styles = StyleSheet.create({
    body: {
        fontFamily: 'oswald-light',
        fontSize: 16,
    }
});