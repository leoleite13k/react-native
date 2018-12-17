import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'

export class Filme extends Component {
  render() {
    return (
      <View style={styles.filmeArea}>
        <Image source={{uri:this.props.data.poster.replace('http:', 'https:')}} style={styles.filmeImagem} />
        <View style={styles.filmeInfo}>
          <Text style={styles.filmeNome}>{this.props.data.titulo}</Text>
          <Text>{this.props.data.data}</Text>
          <Text>{this.props.data.sinopse}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  filmeArea:{
    flex: 1,
    flexDirection:'row',
    margin:10
  },
  filmeImagem:{
    width: 80,
    height: 110
  },
  filmeInfo:{
    flex: 1,
    flexDirection:'column',
    marginLeft: 10,
    justifyContent: 'center'
  },
  filmeNome:{
    fontSize: 18,
    fontWeight: 'bold'
  }
})


export default Filme
