import React, { Component } from 'react';
import { Platform, StyleSheet, View, Image, Text, TouchableHighlight, BackHandler } from 'react-native';
import { connect } from 'react-redux';
import { setActiveChat } from '../actions/ChatActions';

class InternalConversation extends Component {
  static navigationOptions = ({navigation}) => ({
    headerLeft:(
        <TouchableHighlight
          onPress={() => {navigation.state.params.backFunction()}}
          underlayColor={false}>
          <Image
            style={styles.back}
            source={require('../../node_modules/react-navigation-stack/src/views/assets/back-icon.png')}
          />
        </TouchableHighlight>
      )
  });

  constructor(props) {
      super(props);

      this.state = {

      };

      this.back = this.back.bind(this);
  }

  componentDidMount() {
    this.props.navigation.setParams({backFunction: this.back});
    BackHandler.addEventListener('hardwareBackPress', this.back);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.back);
  }

  back() {
    this.props.setActiveChat('');
    this.props.navigation.goBack();

    return true;
  }

  render() {
    return (
      <View style={styles.container}>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  }
});

const mapStateToProps = (state) => {
  return{
    status:state.auth.status,
    uid:state.auth.uid,
    activeChat:state.chat.activeChat
  };
};

const InternalConversationConnect = connect(mapStateToProps, { setActiveChat })(InternalConversation);

export default InternalConversationConnect;