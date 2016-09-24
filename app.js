/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React, { Component } from 'react';
 import { AppRegistry, StyleSheet, Modal, Image, Platform } from 'react-native';
 import { Spinner, Text, View, Content, Container, Header, Title, Button, Icon, InputGroup, Input, ListItem, List, Radio, CheckBox, Thumbnail, Card, CardItem, H3 } from 'native-base';

 class nativebaseTutorial extends Component {

    render() {


        return (

          <Container>
          <Header>
                    <Button transparent>
                        <Icon name='ios-arrow-back' />
                    </Button>

                    <Title>Header</Title>

                    <Button transparent>
                        <Icon name='ios-menu' />
                    </Button>
                </Header>
              <Content>
                  <Button block> Primary </Button>
                  <Button block success> Success </Button>
                  <Button block info> Info </Button>
                  <Button block warning> Warning </Button>
                  <Button block danger> Danger </Button>
              </Content>
          </Container>
         );
     }
 }



AppRegistry.registerComponent('nativebaseTutorial', () => nativebaseTutorial);
