import React, { Component } from 'react';
import { connect } from 'react-redux';
import FinaliseItems from '../components/FinaliseItems.component';
import Logo from '../components/Logo.component';
import Inventory from '../components/Inventory.component';
export class FinaliseCharacter extends Component { static navigationOptions = ({navigation}) => {
    return {
      headerTitle: 'Finalise',
      headerLeft: <Logo navigation={navigation}/>,
      headerRight: <Inventory navigation={navigation}/>
    }
  }
    render() {
        const { inventoryItems, navigation } = this.props;
        return (
            <FinaliseItems inventoryItems={inventoryItems} navigation={navigation}/>
        );
    }
}const mapStateToProps = (state) => ({
    inventoryItems: state.inventory.inventory
});
export default connect(
    mapStateToProps
)(FinaliseCharacter);