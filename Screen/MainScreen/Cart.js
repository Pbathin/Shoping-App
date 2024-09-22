import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useCart } from './CartContext';
import { ScrollView } from 'react-native-gesture-handler';
import { WindowWidth } from '../../GlobalCSS';
import { SafeAreaView } from 'react-native-safe-area-context';

const CartScreen = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();

  return (
    <SafeAreaView>
    <ScrollView>   
     <View style={styles.container}>
      {cartItems.length === 0 ? (
        <Text style={styles.initialTeaxt}>Your cart is empty</Text>
      ) : (
        <>
          <FlatList
            data={cartItems}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.itemContainer}>
                <Image source={{ uri: item.image }} style={styles.image} />
                <View style={styles.textContainer}>
                  <Text style={styles.name}>{item.name}</Text>
                  {item.description.split('\n').map((line, index) => (
                    <Text key={index} style={styles.description}>
                      {line}
                    </Text>
                  ))}
                  <Text style={styles.price}>Price: ₹{item.price}</Text>
                  <TouchableOpacity onPress={() => removeFromCart(item.id)}>
                    <Text style={styles.removeButton}>Remove</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          />
          <TouchableOpacity onPress={clearCart} style={styles.clearButton}>
            <Text style={styles.clearText} >Clear Cart</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
    </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer: {
    flexDirection: 'row',
    padding:10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  image: {
    width: 100,
    height: 150,
    borderRadius: 8,
    paddingLeft:0
  },
  textContainer: {
    flex: 1,
    marginLeft: 8, // Add margin to separate image and text
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  description: {
    marginBottom: 4,
  },
  price: {
    marginBottom: 4,
  },
  removeButton: {
    color: 'red',
  },
  clearButton: {
    marginTop: 16,
    marginLeft: 120,
    width:WindowWidth *0.3,
    height:50,
    padding: 12,
    backgroundColor: '#ff4d4d',
    borderRadius: 20,
  },
  clearText:{
    color:"white",
    fontSize:15,
    textAlign:"center"
  },
  initialTeaxt:{
    textAlign:"center",
    color:"#b35900",
    fontSize:25,
    fontWeight:"bold",
    marginTop:300
  },
});

export default CartScreen;
