import React, { Component } from 'react';
import {  
    View, 
    StyleSheet, 
    FlatList,
} from 'react-native';
import { connect } from 'react-redux';
import  Gift  from '../components/Product/Gift.component';
import { addToInventory } from '../redux/actions/inventoryActions';
import { fetchGift } from '../redux/actions/giftActions';
import Logo from '../components/TopBar/Logo.component';
import Inventory from '../components/Inventory.component';
class Gifts extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      headerTitle: 'Gifts',
      headerLeft: <Logo navigation={navigation}/>,
      headerRight: <Inventory navigation={navigation}/>
    }
  }
  constructor(props) {
      super(props);
  }  
  componentWillMount = () => {
    this.props.fetchGift();
  }  
  addToInventory = (product) => {
      this.props.addToInventory(product);
  }  
  render() {
    const { gift, navigation } = this.props
    return (
        <View style={styles.container}>
          
        <View style={styles.body}>
          <FlatList 
          data={gift} 
          renderItem={({item}) => <Inventory item={item} addToInventory={this.addToInventory} gift={item}/>}
          keyExtractor ={(item) => item.id}
          ItemSeparatorComponent= {()=> <View style={{height:0.5, backgroundColor:'#34495e90'}}/> }/>
        </View>
      </View>
 
    );
  }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    body: {
      flex: 1,
      justifyContent: 'center'
    }
});
const mapStateToProps = (state) => ({
    products: state.products.items
})
export default connect(mapStateToProps, {addToInventory,fetchGift})(Gift);