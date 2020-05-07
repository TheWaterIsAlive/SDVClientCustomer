import React, { Component } from 'react';import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    FlatList,
    Alert
  } from 'react-native';
  import { connect } from 'react-redux';import { addOrder } from '../redux/actions/orderAction';
  import { emptyInventory } from '../redux/actions/inventoryActions';
  class CustomerForm extends Component {
   state = {
      name:'',
      date: ''
     
    }  
    renderTextfield(options) {
      return (
          <TextInput style={styles.textField} onChangeText={(value) => this.setState({[options.name]: value})} 
                  placeholder= {options.label} value={this.state[options.name]} keyboardType= {options.keyboard || 'default'}/>
        );
    }  onPressButton = () => {
          const {name, date} = this.state;
          const { inventoryItem, navigation, addCharacter, emptyInventory } = this.props;
          if (name === '') { return Alert.alert('enter name')}
          if (date === '') { return Alert.alert('enter date')}
          let customer = { name: name, date: date}
          addCharacter({inventoryItem: inventoryItem, customer: customer});
          emptyCart();
          this.setState({name: ''});
          this.setState({date: ''});

          navigation.navigate('Summery');
      }  
      renderButton() {
          return (
              <TouchableOpacity style={styles.btn} onPress={this.onPressButton}>
                  <Text style={styles.btnText}>proceed to checkout</Text>
              </TouchableOpacity>
          );
      }  render() {
      return (
              <View style={styles.panel}>
                  {this.renderTextfield({name: 'name', label: 'Your name'})}
                  {this.renderTextfield({name: 'date', label: 'Next Available Date'})}
             
                  {this.renderButton()}
              </View>
      );
    }
  }const styles = StyleSheet.create({
          panel: {
          backgroundColor: '#fff',
          borderRadius: 3,
          padding: 10,
          margin: 10
      },
      textField: {
          height: 40,
          margin: 8
      },
      btn: {
          backgroundColor: '#34495e',
          borderRadius: 3,
          padding: 12,
          flex: 1,
      },
      btnText: {
          textAlign: 'center',
          color: '#fff',
          fontSize: 14
      }
  });const mapStateToProps = (state) => ({
      cartItems: state.cart.cart
  })
  export default connect(mapStateToProps, {addOrder, emptyCart})(CustomerForm);