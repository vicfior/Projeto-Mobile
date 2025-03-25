import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from "@react-navigation/native";
import SignupScreen from "./Signup";
import { SignIn, ShoppingCartSimple } from "phosphor-react-native";
import CartScreen from "./Cart";
import { CartProvider } from "./CartContext";
import { useContext } from "react";
import { CartContext } from "./CartContext";


const Stack = createStackNavigator();

function HomeScreen() {

  const navigation = useNavigation();
  const { addToCart } = useContext(CartContext);

  const [showDescription, setShowDescription] = useState(false);
  const [showDescription2, setShowDescription2] = useState(false);
  const [showDescription3, setShowDescription3] = useState(false);
  const [showDescription4, setShowDescription4] = useState(false);
  const [showDescription5, setShowDescription5] = useState(false);
  const [showDescription6, setShowDescription6] = useState(false);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  const toggleDescription2 = () => {
    setShowDescription2(!showDescription2);
  };

  const toggleDescription3 = () => {
    setShowDescription3(!showDescription3);
  };

  const toggleDescription4 = () => {
    setShowDescription4(!showDescription4);
  };

  const toggleDescription5 = () => {
    setShowDescription5(!showDescription5);
  };

  const toggleDescription6 = () => {
    setShowDescription6(!showDescription6);
  };

  return (
    <ScrollView  contentContainerStyle={styles.scrollViewContent}>
      
      {/* HEADER */}
      <View style={styles.header}>
        {/* tela do cadastro */}
        <TouchableOpacity style={styles.sign} onPress={() => navigation.navigate("Signup")}>
          <SignIn size={32} color="rgb(219, 219, 217)" weight="bold" />
        </TouchableOpacity>

        <View style={styles.container_titulo}>
          <Text style={styles.titulo}>Sapore di Casa</Text>
        </View>

        {/* tela do carrinho */}
        <TouchableOpacity style={styles.sign} onPress={() => navigation.navigate("Cart")}>
          <ShoppingCartSimple size={30} color="rgb(219, 219, 217)" weight="bold" />
        </TouchableOpacity>

        {/* Espaço vazio para equilibrar o layout */}
        <View style={{ width: 10 }} />
      </View>

      {/* IMAGENS */}
      <View style={styles.imageContainer}>
        <View style={styles.imageWrapper}>
          <Text style={styles.subtitulo}>
              Spaghetti Carbonara
          </Text>
          <TouchableOpacity onPress={toggleDescription}>
            <Image //className="imagepinguin"
              source={{ uri: 'https://img.freepik.com/free-photo/delicious-pasta-plate_23-2150690581.jpg?ga=GA1.1.845328307.1742855144&semt=ais_hybrid' }} // URL da imagem
              style={styles.image}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnCart}onPress={() => addToCart({ name: "Spaghetti Carbonara", price: 96.90 })}>
            <Text style={styles.button}>Comprar</Text>
          </TouchableOpacity>

          {showDescription && (
            <Text style={styles.description}>
              Massa al dente{'\n'} com molho cremoso {'\n'}de ovos,{'\n'} queijo pecorino,{'\n'} pancetta crocante{'\n'} e pimenta-do-reino  {'\n'} Preço: R$ 96,90 
            </Text>
          )}
        </View>

        <View style={styles.imageWrapper}>
          <Text style={styles.subtitulo}>
            Risoto de Funghi
          </Text>  
          <TouchableOpacity onPress={toggleDescription2}>
            <Image
              source={{ uri: 'https://media.istockphoto.com/id/1368433094/photo/risotto-with-mushrooms-cheese-and-thyme-vegetarian-food-italian-food.jpg?b=1&s=612x612&w=0&k=20&c=14xy1pY5HhJsS154iemd9qi9yKh_3e9CmYhjf-Yul14=' }}
              style={styles.image}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnCart}onPress={() => addToCart({ name: "Risoto de Funghi", price: 85.00 })}>
            <Text style={styles.button}>Comprar</Text>
          </TouchableOpacity>

          {showDescription2 && (
            <Text style={styles.description}>
              Arroz arbóreo {'\n'} cremoso com{'\n'} cogumelos frescos,{'\n'} finalizado com trufa{'\n'} e parmesão. {'\n'} Preço: R$ 85,00 
            </Text>
          )}
        </View>
      </View>
      

      <View style={styles.imageContainer}> 
        <View style={styles.imageWrapper}>
          <Text style={styles.subtitulo}>
            Penne à Puttanesca
          </Text>
          <TouchableOpacity onPress={toggleDescription3}>
            <Image //className="imagepinguin"
              source={{ uri: 'https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19739.jpg?ga=GA1.1.845328307.1742855144&semt=ais_hybrid' }} // URL da imagem
              style={styles.image}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnCart}onPress={() => addToCart({ name: "Penne à Puttanesca", price: 89.90 })}>
            <Text style={styles.button}>Comprar</Text>
          </TouchableOpacity>

          {showDescription3 && (
            <Text style={styles.description}>
              Massa penne com {'\n'}molho intenso{'\n'} de tomate,{'\n'} azeitonas,{'\n'} alcaparras e alho. {'\n'} Preço: R$ 89,90 
            </Text>
          )}
        </View>

        <View style={styles.imageWrapper}>
          <Text style={styles.subtitulo}>
            Lasagna à Bolonhesa
          </Text>  
          <TouchableOpacity onPress={toggleDescription4}>
            <Image
              source={{ uri: 'https://img.freepik.com/free-photo/traditional-lasagna-with-rich-bolognese-sauce_60438-3536.jpg?ga=GA1.1.845328307.1742855144&semt=ais_hybrid' }}
              style={styles.image}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnCart}onPress={() => addToCart({ name: "Lasagna à Bolonhesa", price: 89.90 })}>
            <Text style={styles.button}>Comprar</Text>
          </TouchableOpacity>

          {showDescription4 && (
            <Text style={styles.description}>
              Camadas de massa {'\n'}caseira,{'\n'} carne suína e bovina,{'\n'} molho de tomate{'\n'} e queijo derretido. {'\n'} Preço: R$ 89,90
            </Text>
          )}
        </View>
      </View>

      <View style={styles.imageContainer}> 
        <View style={styles.imageWrapper}>
          <Text style={styles.subtitulo}>
            Frango à Parmegiana
          </Text>
          <TouchableOpacity onPress={toggleDescription5}>
            <Image //className="imagepinguin"
              source={{ uri: 'https://img.freepik.com/premium-photo/freshly-cooked-gourmet-lasagna-with-savory-bolognese-sauce-mozzarella-generated-by-ai_188544-58515.jpg?ga=GA1.1.845328307.1742855144&semt=ais_hybrid' }} // URL da imagem
              style={styles.image}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnCart}onPress={() => addToCart({ name: "Frango à Parmegiana", price: 76.90 })}>
            <Text style={styles.button}>Comprar</Text>
          </TouchableOpacity>

          {showDescription5 && (
            <Text style={styles.description}>
              Filé empanado,{'\n'} molho de tomate{'\n'} artesanal, muçarela {'\n'}derretida e{'\n'} acompanha {'\n'}espaguete. {'\n'}Preço: R$ 76,90 
            </Text>
          )}
        </View>

        <View style={styles.imageWrapper}>
          <Text style={styles.subtitulo}>
             Gnocchi a Gorgonzola
          </Text>  
          <TouchableOpacity onPress={toggleDescription6}>
            <Image
              source={{ uri: 'https://img.freepik.com/free-photo/creative-arrangement-tasty-food_23-2148949062.jpg?ga=GA1.1.845328307.1742855144&semt=ais_hybrid'}}
              style={styles.image}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnCart}onPress={() => addToCart({ name: "Gnocchi a Gorgonzola", price: 109.90 })}>
            <Text style={styles.button}>Comprar</Text>
          </TouchableOpacity>

          {showDescription6 && (
            <Text style={styles.description}>
              Pillinhos de batata {'\n'}caseiros com molho{'\n'} cremoso de{'\n'} gorgonzola e nozes.{'\n'} Preço: R$ 109,90
            </Text>
          )}
        </View>
      </View>

      <StatusBar style="light" backgroundColor="rgb(19, 19, 19)" />
    </ScrollView>
  );
}

export default function App() {

  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Signup" component={SignupScreen} />
          <Stack.Screen name="Cart" component={CartScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom: 30,
    backgroundColor: 'rgb(19, 19, 19)'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Distribui os itens igualmente
    backgroundColor: 'rgb(19, 19, 19)',
    padding: 10,
    width: '100%',
  },
  container_titulo: {
    flex: 1, // Permite que o título ocupe espaço centralizado
    alignItems: 'center',
    marginLeft: 15,
  },
  sign: {
    width: 32, // Mantém um tamanho fixo para evitar desalinhamento
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  imageWrapper: {
    alignItems: 'center',
    margin: 10,
  },
  description: {
    marginTop: 10,
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    color: 'rgb(252, 252, 241)',
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'rgb(252, 252, 241)',
  },
  subtitulo: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 7,
    color: 'rgb(252, 252, 241)',
  },
  btnCart: {
    height: 32,
    width: '90',
    backgroundColor: 'rgba(176, 173, 173, 0.27)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 6,
  },
  button: {
    color: 'rgba(228, 228, 223, 0.91)',
  }
});
