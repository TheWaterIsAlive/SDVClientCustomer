import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Animated
} from 'react-native';
import { connect } from 'react-redux';
export class Inventory extends Component {
    constructor(props) {
      super(props);
    
      this.state = {
        opacity: new Animated.Value(1)
      };
    }    componentWillReceiveProps(nextProps) {
        if (nextProps.cartItems !== this.props.cartItems) {
            this.startAnimation();
        }
    }    startAnimation(){
        Animated.timing(this.state.opacity,
        {
            toValue: 0,
            duration: 500
        }).start(()=> {
            setTimeout(()=> {
                this.endAnimation()
            }, 100);
        })
    }    endAnimation(){
        Animated.timing(this.state.opacity,
        {
            toValue: 1,
            duration: 500
        }).start()
    }    onPress = () => {
        this.props.navigation.navigate('FinaliseCharacter');
    }
    render() {
        const { InventoryItems } = this.props;
        let animatedStyle = {opacity: this.state.opacity}
        return (
            <Animated.View style={[styles.container, animatedStyle]}>
                <TouchableOpacity onPress={this.onPress}>
                    <Text style={styles.inventory}>Your Inventory: {(inventoryItems).length} items</Text>
                </TouchableOpacity>
            </Animated.View>
        );
    }
}const mapStateToProps = (state) => ({
    inventoryItems: state.inventory.inventory
});
const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inventory:{
        color: 'white',
        fontSize: 14
    }
})
export default connect(
    mapStateToProps
)(Inventory);