import React from 'react';
import {Button, TextInput, StyleSheet, Text, View, Switch, Alert } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown'
import DB from '../db.json';
import OUT from '../salvos.json';


export default function Tarifa() {
    const tarifas = DB.tariffs;
    const planos = DB.plans;
    const salvos = OUT.salvos;
    const [trf, setTarifa] = React.useState(null);
    const [pln, setPlano] = React.useState({"id": 4, "name": "Sem Fale mais"});
    const [number, onChangeNumber] = React.useState(0);
    const [count, setCount] = React.useState(0);
    if (planos.length == 3) {
        planos.push({"id": 4, "name": "Sem Fale Mais", "description": "Nao tem minutos de graça"});
    }
    
    function CalculaPreco(t, n, p) {
        console.log(t, n, p);
        switch (p) {
            case 1:
                return (n<30) ? 0 : ((n-30)*t*1.1).toFixed(2);
                break;
            case 2:
                return (n<60) ? 0 : ((n-60)*t*1.1).toFixed(2);
                break;
            case 3:
                return (n<120) ? 0 : ((n-120)*t*1.1).toFixed(2);
                break;
            default:
                return (n*t).toFixed(2);
                break;
        }
    }
    return(
        <View  style = {{flex: 1, backgroundColor: '#fff'}}>
            <View style={styles.container}>
                <Text style= {styles.title}>Simule Sua Chamada</Text>
                <Text style= {styles.text}>Selecione Origem e Destino</Text>
                <SelectDropdown 
                    data={tarifas}
                    onSelect={(selectedItem, index) => {
                        setTarifa(selectedItem);
                    }}
                    buttonTextAfterSelection={(selectedItem, index) => {
                        return selectedItem.origin + "->" +selectedItem.destiny
                    }}
                    rowTextForSelection={(item, index) => {
                        return item.origin +" -> "+ item.destiny +" : "+ item.fee
                    }}
                />
                <Text style= {styles.text}>Selecione Seu plano</Text>
                <SelectDropdown 
                    data={planos}
                    onSelect={(selectedItem, index) => {
                        setPlano(selectedItem)
                    }}
                    buttonTextAfterSelection={(selectedItem, index) => {
                        return selectedItem.name
                    }}
                    rowTextForSelection={(item, index) => {
                        return item.name
                    }}
                />
                <Text style= {styles.text}>Defina a Duracao</Text>
                <TextInput
                style={styles.input} keyboardType="numeric" placeholder="Duracao" onChangeText={onChangeNumber}
                />
                <Text style= {styles.text}>Total a Pagar: R${count}</Text>
            </View>
            
            <View style= {styles.buttons}>
                <Button title="Calcular"
                onPress={()=>{setCount(CalculaPreco(trf.fee, parseInt(number), pln.id))}}
                />
                <Button title="Salvar"
                onPress={()=>{
                    CalculaPreco(trf.fee, parseInt(number), pln.id);
                    setCount(CalculaPreco(trf.fee, parseInt(number), pln.id))
                    const result = {}
                    result.id = salvos.length;
                    result.origin = trf.origin;
                    result.destiny = trf.destiny;
                    result.plan = pln.name;
                    result.time = parseInt(number);
                    result.value = count;
                    salvos.push(result); 
                    Alert.alert("Simulação Registrada","R$"+ count)
                    }}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
    paddingTop: 22,
    alignItems: 'center',
    justifyContent: 'center'
    },
    item: {
    padding: 15,
    fontSize: 18,
    },
    title:{
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 28,
    },
    text:{
        marginTop:10,
        fontSize: 18
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignContent:'center',
        margin: 20,
        
    },
});