import React from "react";
import { StyleSheet, Image, Text, View } from "react-native";

import logo from "../../../../assets/logo.png";

type Props = {
  nome: string
  nomeFazenda: string
  descricao: string
  preco: string
}

export default function Detalhe({nome, nomeFazenda, descricao, preco}: Props) {
  return (
    <>
        <Text style={estilos.titulocarrinho}>{nome}</Text>

        <View style={estilos.fazenda}>
          <Image style={estilos.imagemFazenda} source={logo} />
          <Text style={estilos.nomefazenda}>{nomeFazenda}</Text>
        </View>

        <Text style={estilos.descricao}>{descricao}</Text>

        <Text style={estilos.preco}>{preco}</Text>
    </>
  );
}

const estilos = StyleSheet.create({
    
    titulocarrinho: {
        fontSize: 26,
        lineHeight: 42,
        color: "#464646"
      },
    
      nomefazenda: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12
      },
    
      imagemFazenda: {
        width: 32,
        height: 32
      },
    
      fazenda: {
        flexDirection: "row",
        paddingVertical: 12
      },
      
      descricao: {
        color: "#a3a3a3",
        fontStyle: "italic"
      },
    
      preco: {
        fontSize: 26,
        lineHeight: 42,
        color: "#2a9f85",
        marginTop: 8
      }
  });