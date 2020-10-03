import React, { useState } from 'react';
import { Text, View, Platform, FlatList, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import BotaoCabecalho from '../componentes/BotaoCabecalho';
import ContatoItem from '../componentes/ContatoItem';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import * as contatosActions from '../store/contatos-actions';


const ListaContatosTela = (props) => {

    const dispatch = useDispatch();
    const contatos = useSelector(estado => estado.contatos.contatos);

    const excluirContato = (key) => {
        dispatch(contatosActions.rmvContato(key));
    }

    return (
        <View style={{ backgroundColor: '#D3D3D3', height: '100%' }} >
            <FlatList
                data={contatos}
                keyExtractor={contato => contato.key}
                renderItem={
                    contato => (
                        <ContatoItem
                            contato={contato.item}
                            onDelete={excluirContato}
                            imagem={contato.item.imagemURI}
                        />
                    )
                }
            />
        </View>
    );
}
ListaContatosTela.navigationOptions = dadosNav => {
    return {
        headerTitle: 'Lista de contatos',
        headerStyle: {
            backgroundColor: '#483D8B'
        },
        headerRight: () =>
            <HeaderButtons
                HeaderButtonComponent={BotaoCabecalho}>
                <Item
                    title="Adicionar"
                    iconName={Platform.OS === 'android' ? 'md-add-circle-outline' : 'ios-add'}
                    onPress={() => { dadosNav.navigation.navigate('NovoContato') }} />
            </HeaderButtons>
    }
}

const styles = StyleSheet.create({

});

export default ListaContatosTela;