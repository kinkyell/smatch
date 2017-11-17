import React, {Component} from 'react'
import { Footer, FooterTab, Text, View, Button } from 'native-base';
import styles from './styles'
import Icon from 'react-native-vector-icons/dist/FontAwesome';

export default class Menu extends Component {
  render() {
    return (
      <Footer>
        <FooterTab>
          <Button full style={styles.menuItem}>
            <Icon name='home' size={26} style={[styles.iconMenu, styles.activeMenuItem]} />
            <Text style={[styles.menuText, styles.activeMenuItem]}>Home</Text>
          </Button>
          <Button full style={styles.menuItem}>
            <Icon name='calendar-o' size={22} style={styles.iconMenu} />
            <Text style={styles.menuText}>Calendar</Text>
          </Button>
          <Button full style={styles.menuItem}>
            <Icon name='comment-o' size={22} style={styles.iconMenu} />
            <Text style={styles.menuText}>Messages</Text>
          </Button>
          <Button full style={styles.menuItem}>
            <Icon name='bell-o' size={20} style={styles.iconMenu} />
            <Text style={styles.menuText}>Notifications</Text>
          </Button>
          <Button full style={styles.menuItem}>
            <Icon name='user' size={24} style={styles.iconMenu} />
            <Text style={styles.menuText}>My Account</Text>
          </Button>
        </FooterTab>
      </Footer>
    )
  }
}