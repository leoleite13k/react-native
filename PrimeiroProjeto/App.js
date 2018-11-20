import React, { Component } from 'react';

import {
    StyleSheet,
    View,
    ScrollView,
    Platform,
    Text,
    TextInput,
    Button,
    Picker,
    Slider,
    Switch,
    DatePickerIOS,
} from 'react-native';

class PrimeiroProjeto extends Component {

    static navigationOptions = ({navigation}) => ({
        title:'Cadastro'
    });

    constructor(props) {
        super(props);

        this.state = {
            nome:'',
            sexo:0,
            sexoData:[
                {nsexo:'Masculino'},
                {nsexo:'Feminino'},
                {nsexo:'Outros'},
            ],
            altura:1.5,
            peso:90,
            dOrgaos:false,
            salario:1000,
            banco:0,
            bancoData:[
                {nbanco:'Banco do Brasil'},
                {nbanco:'Banco Itau'},
                {nbanco:'Banco Santander'},
                {nbanco:'Caixa Economica'},
                {nbanco:'City Bank'},
                {nbanco:'Banco Inter'},
            ],
            qtCartoes:0,
            chosenDate: new Date()
        };

        this.setDate = this.setDate.bind(this);
        this.incremento = this.incremento.bind(this);
        this.decremento = this.decremento.bind(this);
    }

    setDate(newDate) {
        this.setState({chosenDate: newDate});
    }

    incremento() {
        let s = this.state;
        s.qtCartoes = s.qtCartoes + 1;

        this.setState(s);
    }

    decremento() {
        let s = this.state;
        if (s.qtCartoes > 0) {
            s.qtCartoes = s.qtCartoes - 1;
        }

        this.setState(s);
    }

    render() {
        let sexoItems = this.state.sexoData.map((v,k) => {
            return <Picker.PickerItem key={k} value={k} label={v.nsexo} />
        });

        let bancoItems = this.state.bancoData.map((v,k) => {
           return <Picker.PickerItem key={k} value={k} label={v.nbanco} />
        });

        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.pessoal}>
                        <Text style={styles.titulo}>Nome</Text>
                        <TextInput style={styles.input} placeholder='Nome' onChangeText={({nome}) => this.setState({nome})} />
                        <Text style={styles.titulo}>Data de Nascimento</Text>
                        <DatePickerIOS date={this.state.chosenDate} onDateChange={this.setDate}/>
                        <Text style={styles.titulo}>Sexo</Text>
                        <Picker selectedValue={this.state.sexo} onValueChange={(itemValue, itemIndex) => this.setState({sexo:itemValue})} >
                            {sexoItems}
                        </Picker>
                        <Text style={styles.titulo}>Altura </Text>
                        <View style={styles.medida}>
                            <Slider style={styles.slider} value={this.state.altura} minimumValue={1} maximumValue={3} onValueChange={(a) => this.setState({altura:a})} />
                            <Text>{this.state.altura.toFixed(2)} m</Text>
                        </View>
                        <Text style={styles.titulo}>Peso</Text>
                        <View style={styles.medida}>
                            <Slider style={styles.slider} value={this.state.peso} minimumValue={10} maximumValue={300} onValueChange={(p) => this.setState({peso:p})} />
                            <Text>{this.state.peso.toFixed(2)} kg</Text>
                        </View>
                        <Text style={styles.titulo}>Doador de Orgões</Text>
                        <Switch value={this.state.dOrgaos} onValueChange={(d) => this.setState({dOrgaos:d})} />
                    </View>
                    <View style={styles.financeiro}>
                        <Text style={styles.titulo}>Salário</Text>
                        <View style={styles.medida}>
                            <Slider style={styles.slider} value={this.state.salario} minimumValue={0} maximumValue={30000} onValueChange={(s) => this.setState({salario:s})} />
                            <Text>R$ {this.state.salario.toFixed(2)}</Text>
                        </View>
                        <Text style={styles.titulo}>Banco</Text>
                        <Picker selectedValue={this.state.banco} onValueChange={(itemValue, itemIndex) => this.setState({banco:itemValue})} >
                            {bancoItems}
                        </Picker>
                        <Text style={styles.titulo}>Quantidade de Cartões</Text>
                        <View style={styles.contador}>
                            <Button style={styles.bContador} title={'-'} onPress={this.decremento} />
                            <Text style={styles.tContador} >{this.state.qtCartoes}</Text>
                            <Button style={styles.bContador}  title={'+'} onPress={this.incremento} />
                        </View>
                    </View>
                    <Button title={'Enviar'} onPress={() => {}}/>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop: (Platform.OS == 'ios') ? 20 : 0,
    },
    pessoal:{
        flex:1,
        marginLeft: 20,
        marginRight: 50,
    },
    financeiro:{
        flex:1,
        marginLeft: 20,
        marginRight: 50,
    },
    medida:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    contador:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        marginBottom: 20,
    },
    bContador:{
        fontSize: 18,
    },
    tContador:{
        fontSize: 18,
        fontWeight: 'bold',
    },
    titulo:{
        fontSize: 17,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 5,
    },
    input:{
        borderWidth: 1,
        borderColor: '#000000',
        borderStyle: 'solid',
        padding: 10,
    },
    slider:{
        width: 250,
    },
    dia:{
        width: 20,
        height:20,
    },
    mes:{
        width: 20,
        height:20,
    },
    ano:{
        width: 20,
        height:20,
    },

});


export default PrimeiroProjeto;