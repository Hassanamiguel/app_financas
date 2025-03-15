import {Text, View, StyleSheet, FlatList } from 'react-native';
import Header from '../../components/Header';
import Balance from '../../components/Balance';
import Moviments from '../../components/Moviments';
import Actions from '../../components/Actions';

const list = [
  {
    id: 1,
    label: 'Boleto conta luz',
    value: '25.000',
    date: '17/01/2024',
    type: 0 // despensas
  },
  {
    id: 2,
    label: 'Cliente Atlas',
    value: '30.000',
    date: '17/05/2024',
    type: 1 // Receitas / entradas
  },
  {
    id: 3,
    label: 'Salario',
    value: '8.000.000',
    date: '29/01/2025',
    type: 1 // Receitas / entradas
  },
]

export default function Home(){
  return (
    <View style={styles.container}>
      <Header/>
      <Balance saldo="9.250.000" gasto="-500.000"/>

      <Actions/>
      <Text style={styles.title}>Últimas movimentações</Text>

      <FlatList 
      style={styles.list} 
      data={list}
      keyExtractor={(item) => String(item.id)}showsVerticalScrollIndicator={false}
      renderItem={({item}) => <Moviments data={item}/>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fafafa',
  },
  title:{
    fontSize: 18,
    fontWeight: 'bold',
    margin:14,
  },
  list:{
    marginLeft:14,
    marginRight:14,
  }
})



