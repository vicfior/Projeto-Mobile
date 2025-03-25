import React, { useState, useContext } from "react"; // Importação corrigida
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { HouseSimple, ArrowLeft } from "phosphor-react-native";
import { StatusBar } from "expo-status-bar";
import { CartContext } from "./CartContext"; // Certifique-se de que o caminho está correto

export default function CartScreen({ navigation }) {

  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <View style={styles.header}>
           {/*Botão de retornar ao cardápio*/}
            <TouchableOpacity style={styles.sign} onPress={() => navigation.goBack()}>
              <HouseSimple size={28} color="rgb(252, 252, 241)" weight="bold" />
            </TouchableOpacity>
            <Text style={styles.title}>Seu carrinho</Text>
          </View>
          
          {/*Corpo da tela*/}
          {/*Fazer um component disso aqui*/}
          <View style={styles.body}>
              {cartItems.length === 0 ? (
              <Text style={styles.emptyText}>Seu carrinho está vazio</Text>
            ) : (
              cartItems.map((item, index) => (
                <View key={index} style={styles.cartItem}>
                  <Text style={styles.itemText}>{item.name} - R$ {item.price.toFixed(2)}</Text>
                  <TouchableOpacity onPress={() => removeFromCart(index)}>
                    <Text style={styles.removeButton}>Remover</Text>
                  </TouchableOpacity>
                </View>
              ))
            )}

            <Text style={styles.total}>Total: R$ {total.toFixed(2)}</Text>

            <TouchableOpacity onPress={clearCart} style={styles.clearButton}>
              <Text style={styles.clearButtonText}>Esvaziar Carrinho</Text>
            </TouchableOpacity>
              
          </View>
        <StatusBar style="light" backgroundColor="rgb(19, 19, 19)" translucent={true} />
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(19, 19, 19)'
  },
  header: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20 
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    top: -10,
    color: 'rgb(252, 252, 241)',
  },
  sign: {
    width: 32, // Mantém um tamanho fixo para evitar desalinhamento
    alignItems: 'flex-start',
    marginBottom: 16,
    justifyContent: 'flex-start'
  },
  body: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20, 
  },
  emptyText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "gray",
  },
  cartItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  itemText: {
    fontSize: 15,
    color: 'rgb(252, 252, 241)',
  },
  removeButton: {
    color: 'rgba(252, 252, 241, 0.45)',
    fontWeight: "bold",
    alignItems: 'center',
  },
  total: {
    fontSize: 22,
    fontWeight: "bold",
    marginVertical: 20,
    color: 'rgba(252, 252, 241, 0.67)',
  },
  clearButton: {
    backgroundColor: 'rgba(95, 93, 93, 0.51)',
    padding: 10,
    borderRadius: 25,
    height: 45
  },
  clearButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  button: {
    fontSize: 18,
    color: "blue",
    fontWeight: "bold",
    marginVertical: 10,
  },
});
