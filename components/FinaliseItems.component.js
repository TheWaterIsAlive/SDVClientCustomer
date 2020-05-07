import React, { Component } from 'react';import {
    View,
    Text,
    FlatList,
  StyleSheet,
  ScrollView
} from 'react-native';
import InventoryItems  from './InventoryItems.component.component';
import PlayerForm from './PlayerForm.component';
class FinaliseItems extends Component {  
  render() {
    const { InventoryItems, navigation } = this.props;
    return (
      <View style={styles.container}>
                
                    <View style={styles.annouc}>
                        <Text style={styles.anncText}>Please confirm your character and checkout your invenotry.</Text>
                    </View>
                    <View style={styles.ckitems}>
                    <FlatList 
                  data={InventoryItems}
                        renderItem={({item, index}) => <InventoryItems item={item} index={index} />}
                        keyExtractor={(item) => item.id}
                        ItemSeparatorComponent= {()=> <View style={{height:0.3, backgroundColor:'#34495e90'}}/> }
                    />
                    <Text style={styles.text}>Total: $ {(cartTotal).toFixed(2)}</Text>  
                    </View>
                    <View style={styles.custForm}>
                  <ScrollView>
                         <PlayerForm navigation={navigation}/>
                  </ScrollView> 
                    </View>       </View>
    );
  }
}const styles = StyleSheet.create({
  container:{
    flex: 1
  },
  custForm: {
    flex: 1
  },
  ckitems: {
    height: 170
  },
    annouc:{
      padding: 12,
      borderRadius: 5,
      backgroundColor: '#34495e90',
      margin: 10,
      justifyContent: 'center',
      alignItems: 'center'
    },
    text: {
      textAlign: 'center',
      color: 'red'
    },
    anncText:{
        textAlign: 'center',
        color: '#fff'  
    }
});export default CheckoutItems;