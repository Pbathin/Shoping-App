import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { WindowHeight,WindowWidth } from "../../GlobalCSS";
import { useCart } from "./CartContext";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";

const ProductDetailsScreen = ({ route, navigation }) => {
  const { product } = route.params;
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    // Optionally, you can navigate to the CartScreen here if needed
    navigation.navigate("Cart");
  };

  // Split the description into lines based on the new structure
  const descriptionLines = product.description.split(",");

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Image
            source={{ uri: product.image }}
            style={styles.image}
          />
          <View style={styles.textContainer}>
          <Text style={styles.initialTeaxt}>{product.name}</Text>
          <Text style={styles.description}>Description:</Text>
          {descriptionLines.map((line, index) => (
            <Text key={index}>{line}</Text>
          ))}
          <Text style={styles.price}>Price: ₹{product.price}</Text>
          </View>
          <TouchableOpacity onPress={handleAddToCart} style={styles.clearButton}>
            <Text style={styles.clearText} >Add to Cart</Text>
          </TouchableOpacity>
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
      width: 200,
      height: 250,
      borderRadius: 8,
      marginLeft:70,
    },
    textContainer: {
      flex: 1,
      marginLeft: 20, // Add margin to separate image and text
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
      marginTop:15,
      marginLeft:110,
      fontSize:15,
      fontWeight:"bold"
    },
    removeButton: {
      color: 'red',
    },
    clearButton: {
      marginTop: 16,
      marginLeft: 100,
      width:WindowWidth *0.4,
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
      marginLeft:110,
            color:"black",
      fontSize:15,
      fontWeight:"bold",
      marginTop:10
    },
  });

export default ProductDetailsScreen;
