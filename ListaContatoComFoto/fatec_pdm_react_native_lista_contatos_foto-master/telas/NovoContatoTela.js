import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, Button, FlatList, Keyboard, ToastAndroid } from 'react-native';
import ContatoInput from '../componentes/ContatoInput';
import { useDispatch } from 'react-redux';
import * as contatosActions from '../store/contatos-actions';



const NovoContatoTela = (props) => {


    const dispatch = useDispatch();

    const adicionarContato = (nome, telefone, imagem) => {
        if (nome === '' || telefone === '') {
            ToastAndroid.show("Insira nome e telefone !", ToastAndroid.SHORT)
        } else {
            dispatch(contatosActions.addContato(nome, telefone, imagem));
            props.navigation.goBack();
            console.log('Nome: ' + nome + ' --> ' + 'Telefone: ' + telefone); // mostra o nome e tel na console
            ToastAndroid.show("Contato adicionado com sucesso !", ToastAndroid.SHORT)
            Keyboard.dismiss();
        }

    }

    return (
        <View style={{ backgroundColor: '#D3D3D3', height: '100%' }}>
            <View>
                <ContatoInput
                    onAdicionarContato={adicionarContato}
                />
            </View>
        </View>
    );
}

NovoContatoTela.navigationOptions = dadosNav => {
    return {
        headerTitle: 'Novo Contato',
        headerStyle: {
            backgroundColor: '#483D8B',
        }
    }
}

const estilos = StyleSheet.create({

});

export default NovoContatoTela;