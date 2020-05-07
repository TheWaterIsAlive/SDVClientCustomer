import React, { Component } from 'react';import {
    StyleSheet,
    Text,
    View,
    FlatList
  } from 'react-native';import { connect } from 'react-redux';
  import CharacterSummary from '../components/Character.component';
  import Logo from '../components/Logo.component';
  import Inventory from '../components/Inventory.component';
  import themes from '../styles/theme.style';


  class Summary extends Component { static navigationOptions = ({navigation}) => {
      return {
        headerTitle: 'Summary',
        headerLeft: <Logo navigation={navigation}/>,
        headerRight: <Inventory navigation={navigation}/>
      }
    }
 
    render() {
      const { items, navigation } = this.props;
      return (
        <View style={styles.container}>
          
          <View style={styles.headings}>
              <Text>Finalised Character</Text>
          </View>
          <View style={styles.billings}>
              <Text style={styles.billtext}>Player Details</Text>
              <Text style={styles.text}>{"Allan"}</Text>
              <Text style={styles.text}>{"1/5/20"}</Text>
          </View>

          <View style={styles.orderSumm}>
              <Text style={styles.billtext}>Character summary</Text>
              <FlatList
              data={items}
              renderItem={({item}) => <OrderSummary item={item}/>}
              keyExtractor={(item) => item.id}
              ItemSeparatorComponent={() => <View style={{height:0.5, backgroundColor:'#34495e90'}} />}
              />
              {this.getTotal()}
          </View>
        </View>
      );
    }
  }const styles = StyleSheet.create({
      container:{
          flex: 1
      },
      headings: {
          backgroundColor: '#34495e90',
          padding: 12,
          borderRadius: 5,
          margin: 10,
          justifyContent: 'center',
          alignItems: 'center'
      },
      orderSumm: {
          flex: 1,
          margin: 10
      },
      billtext: {
          padding: 6,
          borderWidth: 1,
      borderRadius: 3,
      borderColor: themes.BACKGROUND_COLOR,
      justifyContent: 'center',
      },
      text: {
          margin: 5
      },
      billings: {
          height: 130,
          margin: 10
      },
      totText: {
          textAlign: 'center',
          color: 'red'
      }
  });const mapStateToProps = (state) => ({
      customer: state.order.order.customer,
      items: state.order.order.items
  })
  export default connect(mapStateToProps)(Summary);