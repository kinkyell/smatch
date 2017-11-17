import React, { Component } from 'react'
import { Image, ScrollView, TouchableOpacity } from 'react-native'
import { Container, Header, Title, Content, Footer, FooterTab,
  Button, Left, Right, Body, Text, View } from 'native-base';
import styles from './styles'
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Menu from '../../components/Menu/Menu'
import VerticalCard from '../../components/VerticalCard/VerticalCard'
import HorizontalCard from '../../components/HorizontalCard/HorizontalCard'

export default class HomeContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      openIndividual: true
    }
  }

  toggleIndividual() {
    this.setState({openIndividual: !this.state.openIndividual})
  }

  render () {
    return (
      <Container>
        <Header style={styles.header}>
          <Left>
            <Button transparent>
              <Icon name='map' size={24} style={styles.icon} />
            </Button>
          </Left>
          <Body>
          <Image source={require('../../images/logo.png')} style={{ resizeMode: 'contain', height: 50, width: 120 }} />
          </Body>
          <Right>
            <Button transparent>
              <Icon name='sliders' size={28} style={[styles.icon, {transform: [{ rotate: '90deg'}]}]} />
            </Button>
          </Right>
        </Header>
        <Content style={styles.content}>
          <View style={styles.firstSection}>
            <View style={styles.wrapHeader}>
              <TouchableOpacity activeOpacity={0.8} style={styles.collapseWrap} onPress={() => this.toggleIndividual()}>
                <Text style={styles.headerText}>Individual</Text>
                <Icon name='angle-down' size={18} style={styles.collapseIcon} />
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.8}>
                <Text style={styles.moreText}>See more</Text>
              </TouchableOpacity>
            </View>
            {this.state.openIndividual &&
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.imagesSectionWrap}>
              <VerticalCard image={require('../../images/1.jpg')}
                            name='Julle, 24'
                            medium='Tennis, Running'
                            small='Lausanne'
                            last={false} />
              <VerticalCard image={require('../../images/3.jpg')}
                            name='Elodie, 28'
                            medium='Running, Fitness'
                            small='Lausanne'
                            last={false} />
              <VerticalCard image={require('../../images/5.jpg')}
                            name='Marc, 42'
                            medium='Ski, Running'
                            small='Lausanne'
                            last={true} />
            </ScrollView>
            }
          </View>
          <View style={styles.secondSection}>
            <View style={styles.wrapHeader}>
              <Text style={styles.headerText}>Groups</Text>
              <TouchableOpacity activeOpacity={0.8}>
                <Text style={styles.moreText}>See more</Text>
              </TouchableOpacity>
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.imagesSectionWrap}>
              <HorizontalCard image={require('../../images/2.jpg')}
                            name='HEC RUNNING'
                            distance='45 members'
                            medium='Tennis, Running'
                            small='Lausanne'
                            color='coral'
                            last={false} />
              <HorizontalCard image={require('../../images/4.jpg')}
                            name='VILLE DE LAUS TEXT NEXT'
                            distance='125 members'
                            medium='Running'
                            small='Lausanne'
                            color='mediumseagreen'
                            last={false} />
              <HorizontalCard image={require('../../images/5.jpg')}
                              name='HEC RUNNING'
                              distance='45 members'
                              medium='Tennis, Running'
                              small='Lausanne'
                              color='deepskyblue'
                              last={true} />
            </ScrollView>
          </View>
        </Content>
        <Menu />
      </Container>
    )
  }
}

