import React, { Component } from 'react';
import { 
    View, 
    Text,
    StyleSheet,
    TouchableOpacity 
} from 'react-native';
class CharacterSummary extends Component {    
    render() {
        const { item } = this.props;
            return (
        <View style={styles.container}>
            
            <View style={styles.productDes}>
                <Text style={styles.text}>{item.GiftName}</Text>
                
            </View>
        </View>
    );
    }}const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    productDes: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 5,
    },
    text: {
        fontSize: 14,
        margin: 5
    }
});export default OrderSummary;