import React, { Component } from 'react';
import { Platform, StyleSheet, View, Image, Text, TouchableHighlight, BackHandler, FlatList, TextInput, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import { setActiveChat, sendMessage, monitorChat, monitorChatOff, sendImage } from '../actions/ChatActions';
import ImagePicker from 'react-native-image-picker';
import RNFetchBlob from 'react-native-fetch-blob';

import Menssage from '../components/InternalConversations/List';

window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest;
window.Blob = RNFetchBlob.polyfill.Blob;

class InternalConversation extends Component {
  static navigationOptions = ({navigation}) => ({
    title:navigation.state.params.nameChat,
    headerLeft:(
      <TouchableHighlight
        onPress={() => {navigation.state.params.backFunction()}}
        underlayColor={false}>
        <Image
          source={require('../../node_modules/react-navigation-stack/src/views/assets/back-icon.png')}
        />
      </TouchableHighlight>
    ),
    tabBarVisible:false,
  });

  constructor(props) {
      super(props);

      this.state = {
        inputText:'',
        pct:0
      };

      this.back        = this.back.bind(this);
      this.send        = this.send.bind(this);
      this.chooseImage = this.chooseImage.bind(this);
  }

  componentDidMount() {
    this.props.navigation.setParams({backFunction: this.back});
    BackHandler.addEventListener('hardwareBackPress', this.back);

    this.props.monitorChat(this.props.activeChat);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.back);
  }

  back() {
    this.props.monitorChatOff(this.props.activeChat);
    this.props.setActiveChat('');
    this.props.navigation.goBack();

    return true;
  }

  send(type) {
    let msg = this.state.inputText;

    let state = this.state;
    state.inputText = '';
    this.setState(state);

    this.props.sendMessage('text', msg, this.props.uid, this.props.activeChat);
  }

  chooseImage() {
    ImagePicker.showImagePicker(null, (image) => {
      /*if (image.uri) {
        let img = {uri:image.uri};
        let state = this.state;

        state.imageTmp = img;
        this.setState(state);
      }*/

      let uri = image.uri.replace('file://', '');

      RNFetchBlob.fs.readFile(uri, 'base64')
        .then((data) => {
          return RNFetchBlob.polyfill.Blob.build(data, {type:'image/jpeg;BASE64'})
        })
        .then((blob) => {
          this.props.sendImage(this.props.uid, blob,
          (snapshot) => {
            let pct = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

            let state = this.state;
            state.pct = pct;
            this.setState(state);
          }, (imageName) => {
            let state = this.state;

            state.pct = 0;
            this.setState(state);
            this.props.sendMessage('image', imageName, this.props.uid, this.props.activeChat);
          });
        });
    });
  }

  render() {
    let areaBehavior = Platform.select({ios:'padding', android:null});
    let areaOffset   = Platform.select({ios:64, android:null});

    return (
      <KeyboardAvoidingView style={styles.container} behavior={areaBehavior} keyboardVerticalOffset={areaOffset} >
        <FlatList
          style={styles.chatList}
          data={this.props.activeMessagens}
          renderItem={({item}) => <Menssage data={item} me={this.props.uid} />}
          ref={(ref) => {this.chatArea = ref}}
          onContentSizeChange={() => {this.chatArea.scrollToEnd({animated:true})}}
          onLayout={() => {this.chatArea.scrollToEnd({animated:true})}}
        />

        {this.state.pct > 0 &&
          <View style={[{width: this.state.pct+'%'}, styles.prgBar]}>
          </View>
        }

        <View style={styles.chatSend}>
          <TouchableHighlight
            onPress={this.chooseImage}
            style={styles.sendImage}
            underlayColor='#CCCCCC'>
            <Image
              style={styles.addImage}
              source={require('../assets/images/bPlus.png')}
            />
          </TouchableHighlight>
          <TextInput
            style={styles.inputMens}
            value={this.state.inputText}
            onChangeText={(inputText) => this.setState({inputText})}
          />
          <TouchableHighlight
            onPress={this.send}
            style={styles.sendMens}
            underlayColor='#CCCCCC'>
            <Image
              style={styles.isendMsg}
              source={require('../assets/images/bSend.png')}
            />
          </TouchableHighlight>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  chatList:{
    flex: 1,
    backgroundColor: '#CCCCCC',
  },
  chatSend:{
    height: 50,
    flexDirection: 'row',
    padding: 5,
    marginBottom: Platform.OS == 'ios' ? 10 : 0,
  },
  inputMens:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#EEEEEE',
    borderStyle: 'solid',
    borderRadius: 50,
    padding: 10,
    marginRight: 3,
    marginLeft: 3,
  },
  sendMens:{
    borderRadius: 50,
    width: 40,
    height: 40,
  },
  isendMsg:{
    resizeMode: 'stretch',
    width: 40,
    height: 40,
  },
  sendImage:{
    borderRadius: 50,
    width: 40,
    height: 40,
  },
  addImage:{
    resizeMode: 'stretch',
    width: 40,
    height: 40,
  },
  prgBar:{
    height: 5,
    backgroundColor: '#00FF00',
  }
});

const mapStateToProps = (state) => {
  return{
    status:state.auth.status,
    uid:state.auth.uid,
    activeChat:state.chat.activeChat,
    activeMessagens:state.chat.activeMessagens
  };
};

const InternalConversationConnect = connect(mapStateToProps, { setActiveChat, sendMessage, monitorChat, monitorChatOff, sendImage })(InternalConversation);

export default InternalConversationConnect;