import React, { Component } from 'react';
import { 
    View, 
    Text,
    Image,
    StyleSheet,
    TouchableOpacity 
} from 'react-native';
import themes from '../styles/theme.style';
class Gift extends Component {
    addToInventory = () => {
        this.props.addItemsToInventory(this.props.item)
    }
    render() {
        const { gift } = this.props;
            return (
        <View style={styles.container}>
            <Image source={product.picture} style={{width:150,height:150}}/>
            <View style={styles.productDes}>
                <Text>{product.giftName}</Text>
                <Text>{product.Description}</Text>
                <TouchableOpacity onPress={this.addToInventory} style={styles.addBtn}>
                    <Text style={styles.text}>Add to Inventory</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
    }}const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        margin: 10,
    },
    productDes: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    addBtn: {
        borderRadius: 30,
        margin: 10,
        backgroundColor: themes.BUTTON_COLOR
    },
    text: {
        color: '#fff',
        fontSize: 16,
        padding: 10
    }
});export default Product;