import React, { Component } from 'react';

import {
    StyleSheet,
    View,
    Platform,
    Text,
    TextInput,
    Picker,
    Slider,
    Switch
} from 'react-native';

class PrimeiroProjeto extends Component {
	
		constructor(props) {
		  	super(props);

		  		this.state = {
		  		nome:'',
		  		dtNascimento:0,
			  	data:[
					{dia:'1', mes:'1', ano:'1994'}
				],
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
		  		banco:'',
		  		qtCartoes:0
		  		};
		}

	render() {
		    let sexoItems = this.state.sexoData.map((v,k) => {
		        return <Picker.PickerItem key={k} value={k} label={v.nsexo} />
            });

		return (
		 	<View style={styles.container}>
                <View style={styles.pessoal}>
                    <Text style={styles.titulo}>Nome</Text>
                    <TextInput style={styles.input} placeholder='Nome' onChangeText={({nome}) => this.setState({nome})} />
                    <Text style={styles.titulo}>Data de Nascimento</Text>
                    <View style={styles.medida}>
                        <Text style={styles.titulo}>Sexo</Text>
                        <Picker style={styles.picker} selectedValue={this.state.sexo} onValueChange={(itemValue, itemIndex) => this.setState({sexo:itemValue}) } >
                            {sexoItems}
                        </Picker>
                    </View>
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
                    <Text style={styles.titulo}>Cartões</Text>
                </View>
		 	</View>
		);
	}
}

const styles = StyleSheet.create({
	container:{
		flex:1,
		marginTop: (Platform.OS == 'ios') ? 20 : 0,
        marginLeft: 20,
        marginRight: 50,
	},
    pessoal:{
	    flex:1,
    },
    financeiro:{
	    flex:1,
        marginTop:150,
    },
    medida:{
	    flexDirection: 'row',
        justifyContent: 'space-between'
    },
    dOrgaos:{
        flexDirection: 'row',
    },
	titulo:{
		fontSize: 15,
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
	picker:{
		height: 50,
		width: 100,
	},
    slider:{
        width: 250,
    },

});


export default PrimeiroProjeto;