import React, { useState } from 'react';
import { View, Button, Image, Text, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';


const TiraFoto = props => {

    const [imagemURI, setImagemURI] = useState();

    const tirarFoto = async () => {
        const foto = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [16, 9],
            quality: 1
        });
        //console.log(foto);
        setImagemURI(foto.uri);
        props.onFotoTirada(foto.uri);
    }

    const getGaleria = async () => {
        const foto = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [16, 9],
            quality: 1
        });
        //console.log(foto);
        setImagemURI(foto.uri);
        props.onFotoTirada(foto.uri);
    }

    return (
        <View style={{ width: '80%' }}>
            <View style={estilos.principal}>
                <View style={estilos.previewDaImagem}>
                    {
                        !imagemURI ?
                            <Text style={{ color: '#fff' }}>Nenhuma foto</Text>
                            :
                            <Image
                                style={estilos.imagem}
                                source={{ uri: imagemURI }}
                            />
                    }
                </View>
                <View style={estilos.botao}>
                    <View style={{ marginBottom: 10 }} >
                        
                        <View style={{ flexDirection: 'row', alignSelf: "center", marginTop: 10 }}>
                            <MaterialIcons style={{ marginRight: 25 }} name="add-a-photo" size={60} color="#483D8B" onPress={tirarFoto} title="Tirar Foto" />
                            <FontAwesome style={{ marginLeft: 25, marginTop: 5 }} name="photo" size={54} color="#483D8B" onPress={getGaleria} title="Galeria" />
                        </View>

                    </View>
                    {/* <View >
                        <Button
                            title="Galeria"
                            onPress={getGaleria}
                            color='#E3A631'
                        />
                    </View> */}
                </View>
            </View>
        </View>
    )
};
const estilos = StyleSheet.create({
    principal: {
        alignItems: 'center',
        marginBottom: 15
    },
    previewDaImagem: {
        width: '100%',
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        borderColor: '#000000',
        borderWidth: 1
    },
    imagem: {
        width: '100%',
        height: '100%'
    },
    botao: {
        width: '80%',
        marginBottom: 5

    }
});
export default TiraFoto;