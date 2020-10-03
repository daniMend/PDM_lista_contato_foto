import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button } from 'react-native';
import TiraFoto from '../componentes/TiraFoto';


const ContatoInput = (props) => {

    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');

    const [imagemURI, setImagemURI] = useState('');

    const fotoTirada = imagemURI => {
        setImagemURI(imagemURI);
    }

    return (
        <View style={estilos.contatoView}>
            <TextInput
                placeholder="Nome..."
                style={estilos.contatoTextInput}
                onChangeText={(t) => setNome(t)}
                value={nome}
            />
            <TextInput
                placeholder="Telefone..."
                style={estilos.contatoTextInput}
                onChangeText={(t) => setTelefone(t)}
                value={telefone}
            />
            <TiraFoto onFotoTirada={fotoTirada} />

            <View style={estilos.botao}>
                <Button
                    title="Adicionar Contato"
                    onPress={() => {
                        props.onAdicionarContato(nome, telefone, imagemURI);
                        setNome('');
                        setTelefone('');
                    }}
                    color='#483D8B' />
            </View>
        </View>
    );
}

const estilos = StyleSheet.create({
    contatoTextInput: {
        width: '80%',
        borderBottomColor: '#000000',
        borderBottomWidth: 1,
        marginBottom: 10,
        padding: 2,
        color: '#000000'
    },

    contatoView: {
        marginBottom: 8,
        marginTop: 8,
        alignItems: 'center'
    },

    botao: {
        width: '80%',
        marginTop: 8,
        marginBottom: 8,
        color: '#000000'
    }
});

export default ContatoInput;