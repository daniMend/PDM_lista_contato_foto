import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const ContatoItem = (props) => {
    return (
        <TouchableOpacity onLongPress={() => props.onDelete(props.contato.key)}>

            <View style={estilos.itemNaLista}>
                <Image style={estilos.imagem} source={{ uri: props.imagem }} />
                <View>
                    <Text style={estilos.textoItem}>[ toque 2 segundos para excluir ]</Text>
                    <Text style={{ marginLeft: 26, marginTop: 10 }}>Nome: {props.contato.nome}</Text>
                    <Text style={{ marginLeft: 10 }}>Telefone: {props.contato.telefone}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const estilos = StyleSheet.create({
    itemNaLista: {
        padding: 12,
        backgroundColor: '#ADD8E6',
        borderColor: '#1C1C1C',
        borderWidth: 3,
        marginTop: 3,
        borderRadius: 12,
        fontSize: 16,
        width: '80%',
        alignSelf: 'center',
        flexDirection: "row"
    },
    textoItem: {
        color: '#999',
        fontSize: 10,
        marginLeft: 22
    },
    imagem: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: '#ccc',
        borderWidth: 1
    }
});

export default ContatoItem;