import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

class List extends Component {
constructor(props) {
    super(props);
    let bg  = '#EEEEEE';
    let als = 'flex-start';
    let at  = 'left';

    if (this.props.data.uid == this.props.me) {
      bg  = '#9999FF';
      als = 'flex-end';
      at  = 'right';
    }

    this.state = {
      bg:bg,
      als:als,
      at:at,
      dateMsg:this.getFormattedDate(this.props.data.date)
    };
}

  getFormattedDate(date) {
    let cDate   = new Date();
    let dDate   = date.split(' ');
    let day     = cDate.getDate();
    let month   = cDate.getMonth() +1;

    if (day < 10) {
      day = "0" + day;
    }

    if (month < 10) {
      month = "0" + month;
    }

    let today   = cDate.getFullYear()+'-'+month+'-'+day;
    let newDate = dDate[1];

    //Forma de formatar datas
    /*
    let newDate = newDate[1].split(':');
    newDate = ((newDate[0] < 10)?'0'+newDate[0]:newDate[0]+':'+newDate[1] < 10)?'0'+newDate[1]:newDate[1])
    */

    if (today != dDate[0]) {
      let newDateDays = dDate[0].split('-');

      newDate = newDateDays[2]+'/'+newDateDays[1]+'/'+newDateDays[0]+' '+newDate;
    }

    return newDate;
  }

  render() {
    return (
      <View style={[styles.container, {backgroundColor: this.state.bg, alignSelf: this.state.als}]}>
        {this.props.data.type == 'text' &&
          <Text style={[styles.mens, {textAlign: this.state.at}]}>
           {this.props.data.message}
          </Text>
        }
        {alert(this.props.data.image)}
        {this.props.data.type == 'image' &&
          <Image
            style={styles.image}
            source={{uri: this.props.data.source}}
          />
        }
        <Text style={styles.date}>
         {this.state.dateMsg}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    marginBottom: 5,
    padding: 10,
    borderRadius: 10,
    maxWidth: '90%',
  },
  mens:{

  },
  date:{
    fontSize: 10,
    fontWeight: '200',
  },
  image:{
    width: 100,
    height: 100,
  }
});

export default List;