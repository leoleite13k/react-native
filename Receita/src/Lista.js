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
					{key:1, txt: "4 ovos inteiros"},
					{key:2, txt: "1 xícara (chá) de mel ou favinho"},
					{key:3, txt: "1 xícara (chá) de açúcar mascavo"},
					{key:4, txt: "1/2 xícara (chá) de chocolate em pó"},
					{key:5, txt: "1 colher (chá) de canela em pó"},
					{key:6, txt: "1 colher (chá) de cravo em pó"},
					{key:7, txt: "2 colheres (sopa) cheias de manteiga ou margarina"},
					{key:8, txt: "2 xícaras (chá) de leite"},
					{key:9, txt: "4 xícaras (chá) de farinha de trigo"},
					{key:10, txt: "2 colheres (chá) de bicarbonato de sódio"},
					{key:11, txt: "2 colheres (chá) de fermento em pó"},
					{key:12, txt: "1 kg de chocolate fracionado para banhar"},
					],
					modo:[
						{key:1, txt: "Primeiramente, bata muito bem os ovos na batedeira, até ficar bem espumoso e amarelo claro"},
						{key:2, txt: "Depois, adicione o mel, o açúcar, o chocolate, o cravo, a canela, a margarina, o leite e a farinha"},
						{key:3, txt: "Bata muito bem até ficar uma massa totalmente homogênea"},
						{key:4, txt: "Por último, adicione o bicarbonato e o fermento e misture a massa à mão, até ficar completamente misturada e homogênea (este é o segredo para a massa além de crescer, não murchar)"},
						{key:5, txt: "Preaqueça o forno a 180ºC antes de começar a encher as forminhas previamente untadas com margarina ou manteiga"},
						{key:6, txt: "Asse por aproximadamente 25 minutos, na mesma temperatura"},
						{key:7, txt: "Corte todos os pãezinhos ao meio e recheie com o sabor de sua preferência"},
						{key:8, txt: "Banhe-os no chocolate, espere secar bem e embale-os"},
						{key:9, txt: "Essa receita pode ser vendida a R$ 2,50 cada pãozinho"},
					]
				},
				{
					key:2,
					nome: "Bolo de Banana fofinho",  
					por: "Equipe Tudo Gostoso",
					descricao: "Este é o bolo de bana fofinho muito bom e facil de fazer", 
					rendimento: 16,
					preparo: 45,
					imagem: 'https://img.itdg.com.br/tdg/images/recipes/000/188/774/268127/268127_original.jpg?mode=crop&width=710&height=400',
					ingredientes: [
						{key:1, txt: "1/2 xícara (chá) de leite"},
						{key:2, txt: "1 xícara (chá) de óleo"},
						{key:3, txt: "1 xícara (chá) de açúcar"},
						{key:4, txt: "3 ovos"},
						{key:5, txt: "2 bananas nanica médias picadas"},
						{key:6, txt: "2 xícaras (chá) de farinha de trigo"},
						{key:7, txt: "1 xícara (chá) de amido de milho MAIZENA"},
						{key:8, txt: "1 colher (sopa) de fermento em pó"},
					],
					modo:[
						{key:1, txt: "Bata no liquidificador o leite, o óleo, o açúcar e os ovos até que fique homogêneo e cremoso"},
						{key:2, txt: "Junte as bananas e bata até triturar levemente"},
						{key:3, txt: "Peneire o trigo, a MAIZENA e o fermento, passe para uma tigela e adicione aos poucos a mistura até obter uma massa cremosa e homogênea"},
						{key:4, txt: "Coloque a massa em uma forma redonda com furo central (20 cm de diâmetro) untada e enfarinhada, polvilhe com o açúcar e a canela e leve ao forno preaquecido em temperatura média (180°C) por 40 minutos ou até que um palito saia limpo, depois de espetado na massa"},
						{key:5, txt: "Espere amornar e desenforme"},
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