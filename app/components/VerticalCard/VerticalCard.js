import React, {Component} from 'react'
import { Image, View, Text } from 'react-native'
import styles from './styles'

export default class VerticalCard extends Component {
  render() {
    return (
      <View style={[styles.imagesWrap, {marginRight: this.props.last ? 10 : 0}]}>
        <Image source={this.props.image} style={styles.imageItem}/>
        <View style={styles.topBar}>
          <Text style={styles.name}>{this.props.name}</Text>
        </View>
        <View style={styles.bottomBar}>
          <Text style={styles.mediumText}>{this.props.medium}</Text>
          <Text style={styles.smallText}>{this.props.small}</Text>
        </View>
      </View>
    )
  }
}