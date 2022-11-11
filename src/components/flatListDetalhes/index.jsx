import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import styles from './styles'

export default function FlatListItem({ item }) {
  let mensagem = replaceHtml(item.conteudo)

  function replaceHtml(data){
    let mensagem = data.replace(/<p>/g, "")
    mensagem = mensagem.replace(/<\/p>/g, "")
    mensagem = mensagem.replace(/<div>/g, "")
    mensagem = mensagem.replace(/<\/div>/g, "")
    mensagem = mensagem.replace(/<strong>/g, "")
    mensagem = mensagem.replace(/<\/strong>/g, "")
    mensagem = mensagem.replace(/ol&aacute/g, "")
    mensagem = mensagem.replace(/<b>/g, "")
    mensagem = mensagem.replace(/<\/b>/g, "")
    mensagem = mensagem.replace(/&nbsp;/g, "")
    return mensagem
}

  return (
    <View style={styles.container}>
        <View style={styles.sombra}>
      <View style={{ display: "flex", flexDirection: "row" }}>
        <Text>De: {item.nome}</Text>
        <View style={{ flex: 1 }}>
          <Text style={{ textAlign: "right" }}>{item.data}</Text>
        </View>
      </View>
      <Text style={styles.msg}>Mensagem: {mensagem}</Text>
      <Text>Anexos:</Text>
      {item.arquivo?
        <Image
        style={styles.image}
        source={{
          uri: 'http://sgnsistemas.ddns.net:65531/sgn_lgpd_nucleo/_lib/file/img/chamado/'+item.arquivo,
        }}
      />
      :
      <></>
      }
      
      </View>
    </View>
  );
}
