/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  ScrollView,
  Image,
  
} from 'react-native';


class AwesomeProject extends Component {
  render() {
    return (

      <ScrollView style={styles.container}>
        <Image style={{height: 800, width: 400}} source={require('./akira1.jpg')} />

        <Text style={{color: 'white', textAlign: 'center', fontSize: 75, textDecorationLine: 'line-through', textDecorationStyle: 'double', textDecorationColor: 'white', margin: 0}}>
          **********
        </Text>
        <Text style={{textAlign: 'center', fontSize: 75, textDecorationLine: 'line-through', textDecorationStyle: 'double', textDecorationColor: 'black', margin: 0}}>
          **********
        </Text>

        <Text style={{textAlign: 'center', fontSize: 75, textDecorationLine: 'line-through', color: 'white', backgroundColor: '#000000', textDecorationStyle: 'double', textDecorationColor: 'white', margin: 0}}>
          .أح.ب الل,غة ا
        </Text>
        <Image style={{ margin: 12.5, height: 350, width: 350}} source={require('./dragon1.jpg')} />
        <Text style={{paddingBottom: 700, marginBottom: 5, textAlign: 'center', fontSize: 75, textDecorationLine: 'line-through', color: 'white', backgroundColor: '#000000', textDecorationStyle: 'double', textDecorationColor: 'white', margin: 0}}>
          .أح.ب الل,غة ا
        </Text>
        <Text style={styles.welcome}>
          DRAGONS
        </Text>
        <Text style={styles.welcome}>
          DRAGONS
        </Text>
        <Text style={styles.welcome}>
          DRAGONS
        </Text>
        <Text style={styles.welcome}>
          DRAGONS
        </Text>
        <Text style={styles.welcome}>
          DRAGONS
        </Text>
        <Text style={styles.welcome}>
          DRAGONS
        </Text>
        <Text style={styles.welcome}>
          DRAGONS
        </Text>
        <Text style={styles.welcome}>
          DRAGONS
        </Text>
        <Text style={styles.welcome}>
          DRAGONS
        </Text>
        <Text style={styles.welcome}>
          DRAGONS
        </Text>
        <Text style={styles.welcome}>
          DRAGONS
        </Text>
        <Text style={styles.welcome}>
          DRAGONS
        </Text>
        <Text style={styles.welcome}>
          DRAGONS
        </Text>
        <Text style={styles.welcome}>
          DRAGONS
        </Text>
        <Text style={styles.welcome}>
          DRAGONS
        </Text>
        <Text style={styles.welcome}>
          DRAGONS
        </Text>
        <Text style={styles.welcome}>
          DRAGONS
        </Text>
        <Text style={styles.welcome}>
          DRAGONS
        </Text>
        <Text style={styles.welcome}>
          DRAGONS
        </Text>
        <Text style={styles.welcome}>
          DRAGONS
        </Text>
        <Text style={styles.welcome}>
          DRAGONS
        </Text>
        <Text style={styles.welcome}>
          DRAGONS
        </Text>
        <Text style={styles.welcome}>
          DRAGONS
        </Text>
        <Text style={styles.welcome}>
          DRAGONS
        </Text>






      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  welcome: {
    fontSize: 75,
    color: 'white',
    textAlign: 'center',
    marginBottom: 5,
    backgroundColor: '#000000',
    textShadowColor: '#ffffff',
    textShadowOffset: ( {width: 20, height: 20} )

  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 0,
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
