import { FlatList, StyleSheet, Text, View } from 'react-native';
import OUT from '../salvos.json';


export default function Planos() {
    const salvos = OUT.salvos;
    return(
        <View style={styles.container}>
            <Text style= {styles.title}>Suas Simulações Salvas</Text>
            <Text style={styles.text}>{salvos.length == 0 ? "Voçe ainda não salvou nenhuma simulação, Vá para Tarifa para fazer simulações": ""}</Text>
            <FlatList 
                data={salvos}
                renderItem={({item}) => <Text style={styles.item}>{"(" + item.origin
                + "->"+ item.destiny + ") "+ item.plan 
                + ": "+ item.time + "min = R$"+ item.value}</Text>} 
            />
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 22,
     backgroundColor: '#fff',
     justifyContent: 'center', 
     alignItems: 'center'
    },
    item: {
      padding: 15,
      marginTop: 10,
      fontSize: 18,
      backgroundColor: '#eee',
      borderRadius: 4
    },
    title:{
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 28,
    },
    text:{
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 16,
        color: '#999',
        marginTop: 10,
        paddingHorizontal: 40,
        textAlign:'center'
    },
  });