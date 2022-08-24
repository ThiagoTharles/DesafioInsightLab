import { FlatList, StyleSheet, Text, View } from 'react-native';
import DB from '../db.json';

export default function Planos() {
    const planos = DB.plans;
    return(
        <View style={styles.container}>
            <Text style= {styles.title}>Conheça Nossos Planos</Text>
            <FlatList
                data={planos}
                renderItem={({item}) => <Text style={styles.item}>{item.name +"\n"+ item.description}</Text>}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 22,
     backgroundColor: '#fff'
    },
    item: {
      padding: 15,
      fontSize: 18,
    },
    title:{
        paddingLeft:10,
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 28,
    },
});