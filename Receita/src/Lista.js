import React, {Component} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import ReceitaItem from './ReceitaItem'

class Lista extends Component{

	constructor(props) {
		super(props);
  
		this.state = {
			list:[
				{
					key:1,
					nome: "Pao de Mel Macio (Receita Economica)",  
					por: "Juliana Guermandi Caride",
					descricao: "Este é  o bolo de mel macio muito bom e facil de fazer", 
					rendimento: 50,
					preparo: 60,
					imagem: 'https://img.itdg.com.br/tdg/images/recipes/000/115/197/262559/262559_original.jpg?mode=crop&width=710&height=400',
					ingredientes: [
					"4 ovos inteiros",
					"1 xícara (chá) de mel ou favinho",
					"1 xícara (chá) de açúcar mascavo",
					"1/2 xícara (chá) de chocolate em pó",
					"1 colher (chá) de canela em pó",
					"1 colher (chá) de cravo em pó",
					"2 colheres (sopa) cheias de manteiga ou margarina",
					"2 xícaras (chá) de leite",
					"4 xícaras (chá) de farinha de trigo",
					"2 colheres (chá) de bicarbonato de sódio",
					"2 colheres (chá) de fermento em pó",
					"1 kg de chocolate fracionado para banhar",
					],
					modo:[
					"Primeiramente, bata muito bem os ovos na batedeira, até ficar bem espumoso e amarelo claro",
					"Depois, adicione o mel, o açúcar, o chocolate, o cravo, a canela, a margarina, o leite e a farinha",
					"Bata muito bem até ficar uma massa totalmente homogênea",
					"Por último, adicione o bicarbonato e o fermento e misture a massa à mão, até ficar completamente misturada e homogênea (este é o segredo para a massa além de crescer, não murchar)",
					"Preaqueça o forno a 180ºC antes de começar a encher as forminhas previamente untadas com margarina ou manteiga",
					"Asse por aproximadamente 25 minutos, na mesma temperatura",
					"Corte todos os pãezinhos ao meio e recheie com o sabor de sua preferência",
					"Banhe-os no chocolate, espere secar bem e embale-os",
					"Essa receita pode ser vendida a R$ 2,50 cada pãozinho",
					]
				},
				{
					key:2,
					nome: "Bolo de bana fofinho",  
					por: "Equipe Tudo Gostoso",
					descricao: "Este é o bolo de bana fofinho muito bom e facil de fazer", 
					rendimento: 16,
					preparo: 45,
					imagem: 'https://img.itdg.com.br/tdg/images/recipes/000/188/774/268127/268127_original.jpg?mode=crop&width=710&height=400',
					ingredientes: [
					"1/2 xícara (chá) de leite",
					"1 xícara (chá) de óleo",
					"1 xícara (chá) de açúcar",
					"3 ovos",
					"2 bananas nanica médias picadas",
					"2 xícaras (chá) de farinha de trigo",
					"1 xícara (chá) de amido de milho MAIZENA",
					"1 colher (sopa) de fermento em pó",
					],
					modo:[
					"Bata no liquidificador o leite, o óleo, o açúcar e os ovos até que fique homogêneo e cremoso",
					"Junte as bananas e bata até triturar levemente",
					"Peneire o trigo, a MAIZENA e o fermento, passe para uma tigela e adicione aos poucos a mistura até obter uma massa cremosa e homogênea",
					"Coloque a massa em uma forma redonda com furo central (20 cm de diâmetro) untada e enfarinhada, polvilhe com o açúcar e a canela e leve ao forno preaquecido em temperatura média (180°C) por 40 minutos ou até que um palito saia limpo, depois de espetado na massa",
					"Espere amornar e desenforme",
					]
				},
			]
		};
	}

  render() {
    return (
		<View style={styles.container}>
			<FlatList 
				data={this.state.list}
				renderItem={ ({item}) => <ReceitaItem data={item} navigation={this.props.navigation} />}
			/>
		</View>
    );
  }
}

const styles = StyleSheet.create({
  	container: {
    	flex: 1,
  	},
});

export default Lista;