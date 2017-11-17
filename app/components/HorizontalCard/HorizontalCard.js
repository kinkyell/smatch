import React, {Component} from 'react'
import { Image, View, Text } from 'react-native'
import styles from './styles'

export default class HorizontalCard extends Component {
  render() {
    return (
      <View style={[styles.imagesWrap, {marginRight: this.props.last ? 10 : 0}]}>
        <Image source={this.props.image} style={styles.imageBigItem} />
        <View style={[styles.colorBlock, {backgroundColor: this.props.color}]} />
        <View style={styles.topBarGroup}>
          <Text numberOfLines={1} style={styles.name}>{this.props.name}</Text>
          <Text style={styles.smallText}>{this.props.distance}</Text>
        </View>
        <View style={styles.bottomBarGroup}>
          <Text style={styles.mediumText}>{this.props.medium}</Text>
          <Text style={styles.smallText}>{this.props.small}</Text>
        </View>
      </View>
    )
  }
}