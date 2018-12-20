import React, { Component } from 'react'
import { Text, View , StyleSheet} from 'react-native'

export class ListaItem extends Component {
  render() {
    return (
      <View>
        <Text>{this.props.data.item}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{

  }
})


export default ListaItem