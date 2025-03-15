import { View,Text,TouchableOpacity,StyleSheet,ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons'

export default function Actions() {
 return (
     <ScrollView style={styles.container} horizontal={true} showsHorizontalScrollIndicator={false}>
        <TouchableOpacity style={styles.actionButton}>
            <View style={styles.areaButton}>
                <AntDesign name='addfolder' size={27} color='#000'/>
            </View>
            <Text style={styles.labelButton}>Entradas</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
            <View style={styles.areaButton}>
                <AntDesign name='tagso' size={27} color='#000'/>
            </View>
            <Text style={styles.labelButton}>Compras</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
            <View style={styles.areaButton}>
                <AntDesign name='creditcard' size={27} color='#000'/>
            </View>
            <Text style={styles.labelButton}>Carteira</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
            <View style={styles.areaButton}>
                <AntDesign name='barcode' size={27} color='#000'/>
            </View>
            <Text style={styles.labelButton}>Boletos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
            <View style={styles.areaButton}>
                <AntDesign name='setting' size={27} color='#000'/>
            </View>
            <Text style={styles.labelButton}>Configurações</Text>
        </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
    container:{
        maxHeight:100,
        marginBottom: 14,
        paddingTop: 18,
        paddingEnd: 14,
        paddingStart: 14,
    },
    actionButton:{
    alignItems: 'center',
    marginRight: 35 
    },
    areaButton:{
        backgroundColor: '#ecf0f1',
        height:60,
        width:60,
        borderRadius:30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    labelButton:{
    marginTop: 4,
    textAlign: 'center',
    fontWeight: 'bold',
    }
})
