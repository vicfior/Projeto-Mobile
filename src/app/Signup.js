import React, { useState } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { HouseSimple, ArrowLeft } from "phosphor-react-native";
import { StatusBar } from "expo-status-bar";

export default function SignupScreen({ navigation }) {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [telefone, setTelefone] = useState('');
  const [cpf, setCpf] = useState('');


  const cadastro = () => {
    //alert(nome);
    //alert(email);
    //alert(senha);
    //alert(telefone);
    //alert(cpf);
    alert("Cadastro realizado com sucesso!");
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.header}>
       {/*Botão de retornar ao cardápio*/}
        <TouchableOpacity style={styles.sign} onPress={() => navigation.goBack()}>
          <HouseSimple size={28} color="rgb(252, 252, 241)" weight="bold" />
        </TouchableOpacity>
        <Text style={styles.title}>Sapore di Casa</Text>
      </View>
      
      {/*Corpo da tela*/}
      <View style={styles.body}>
        <TextInput placeholder="Seu nome..." style={styles.textInput} onChangeText={text => setNome(text)} />
        <TextInput placeholder="000.000.000-00" style={styles.textInput} onChangeText={text => setCpf(text)} />
        <TextInput placeholder="seuemail@gmail.com" style={styles.textInput} onChangeText={text => setEmail(text)} />
        <TextInput placeholder="+55 (00) 00000-0000" style={styles.textInput} onChangeText={text => setTelefone(text)} /> 
        <TextInput secureTextEntry={true} placeholder="Sua senha..." style={styles.textInput} onChangeText={text => setSenha(text)} />

        <TouchableOpacity style={styles.btnCadastro} onPress={() => cadastro()}>
          <Text style={{color: 'white', textAlign: 'center'}}>CADASTRAR</Text>
        </TouchableOpacity>
      
      </View>
    
    <StatusBar style="light" backgroundColor="rgb(19, 19, 19)" />
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
  textInput: {
    height: 40,
    width: '330',
    backgroundColor: 'rgba(252, 252, 241, 0.69)',
    borderRadius: 20,
    paddingLeft: 10,
    marginBottom: 10,
  },
  btnCadastro: {
    height: 40,
    width: '180',
    backgroundColor: 'rgba(95, 93, 93, 0.51)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15
  },
});
