<template>
	<div id="experiencias">
		<h1>Experiencias</h1>
		<h2>Front - End</h2>
		<CardsExperiencia v-for="experiencia in frontEnd" :key="experiencia.label" :link_image="experiencia.link_image" :link_doc="experiencia.link_doc" :label="experiencia.label" :texto="experiencia.texto"></CardsExperiencia>
		<h2>Back - End</h2>
		<CardsExperiencia v-for="experiencia in backEnd" :key="experiencia.label" :link_image="experiencia.link_image" :link_doc="experiencia.link_doc" :label="experiencia.label" :texto="experiencia.texto"></CardsExperiencia>
		<h2>Desktop e Sistema operacional</h2>
		<CardsExperiencia v-for="experiencia in desktopOs" :key="experiencia.label" :link_image="experiencia.link_image" :link_doc="experiencia.link_doc" :label="experiencia.label" :texto="experiencia.texto"></CardsExperiencia>
		<h2>Banco de dados</h2>
		<CardsExperiencia v-for="experiencia in BancoDeDados" :key="experiencia.label" :link_image="experiencia.link_image" :link_doc="experiencia.link_doc" :label="experiencia.label" :texto="experiencia.texto"></CardsExperiencia>
	</div>
</template>

<script>
import CardsExperiencia from '@/shared/cards/cardsexperiencia'

export default {
	components: {
		CardsExperiencia
	},
	data() {
		return {
			frontEnd: [
				{'link_image': 'https://miro.medium.com/max/250/1*wqYF-8Dmh7LhtLkKfERc3Q.png', 'link_doc': 'https://vuejs.org/', 'label': 'Vue', 'texto': 'Vue é uma estrutura progressiva para a construção de interfaces com o usuário. A biblioteca principal é focada apenas na camada de visualização e é fácil de entender e integrar com outras bibliotecas ou projetos existentes.'},
				{'link_image': 'https://img.icons8.com/color/250/000000/bootstrap.png', 'link_doc': 'https://getbootstrap.com/', 'label': 'Bootstrap', 'texto': 'Bootstrap é um framework web com código-fonte aberto para desenvolvimento de componentes de interface e front-end para sites e aplicações web baseado em modelos de design.'},
				{'link_image': 'https://img.icons8.com/color/250/000000/javascript.png', 'link_doc': 'https://www.javascript.com/', 'label': 'JavaScript', 'texto': 'JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias.'},
				{'link_image': 'https://img.icons8.com/ios/250/000000/jquery.png', 'link_doc': 'https://jquery.com/', 'label': 'Jquery', 'texto': 'JQuery é uma biblioteca de funções JavaScript que interage com o HTML, desenvolvida para simplificar os scripts interpretados no navegador do cliente.'}
			],
			backEnd: [
				{'link_image': 'https://img.icons8.com/windows/250/000000/laravel.png', 'link_doc': 'https://laravel.com/docs/7.x', 'label': 'Laravel', 'texto': 'Laravel é um framework PHP livre e open-source criado por Taylor B. Otwell para o desenvolvimento de sistemas web que utilizam o padrão MVC.'},
				{'link_image': 'https://img.icons8.com/color/250/000000/nodejs.png', 'link_doc': 'https://nodejs.org/pt-br/', 'label': 'Node JS', 'texto': 'Node.js é um interpretador de JavaScript assíncrono com código aberto orientado a eventos, criado por Ryan Dahl em 2009, focado em migrar a programação do Javascript do cliente (frontend) para os servidores, criando aplicações de alta escalabilidade.'},
				{'link_image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/.NET_Core_Logo.svg/250px-.NET_Core_Logo.svg.png', 'link_doc': 'https://docs.microsoft.com/pt-br/dotnet/core/', 'label': '.NET Core', 'texto': '.NET Core é um framework livre e de código aberto para os sistemas operacionais Windows, Linux e macOS. É um sucessor de código aberto do .NET Framework.'},
				{'link_image': 'https://img.icons8.com/officel/250/000000/php-logo.png', 'link_doc': 'https://www.php.net/', 'label': 'PHP', 'texto': 'PHP é uma linguagem interpretada livre, usada originalmente apenas para o desenvolvimento de aplicações presentes e atuantes no lado do servidor.'}
			],
			BancoDeDados: [
				{'link_image': 'https://img.icons8.com/color/250/000000/postgreesql.png', 'link_doc': 'https://www.postgresql.org/', 'label': 'Postgresql', 'texto': 'PostgreSQL é um sistema gerenciador de banco de dados objeto relacional, desenvolvido como projeto de código aberto.'},
				{'link_image': 'https://img.icons8.com/ios-filled/250/000000/mysql-logo.png', 'link_doc': 'https://www.mysql.com/', 'label': 'MySql', 'texto': 'MySQL é um sistema de gerenciamento de banco de dados, que utiliza a linguagem SQL como interface.'},
				{'link_image': 'https://img.icons8.com/color/250/000000/firebase.png', 'link_doc': 'https://firebase.google.com/?hl=pt-BR', 'label': 'Firebase', 'texto': 'Firebase é uma plataforma de desenvolvimento de aplicativos para dispositivos móveis e web desenvolvida pela Firebase.'}
			],
			desktopOs: [
				{'link_image': 'https://img.icons8.com/color/250/000000/linux.png', 'link_doc': 'https://linux.org/', 'label': 'Linux', 'texto': 'Linux é um termo popularmente empregado para se referir a sistemas operativos ou sistemas operacionais que utilizam o Kernel Linux. O núcleo foi desenvolvido pelo programador finlandês Linus Torvalds.'},
				{'link_image': 'https://img.icons8.com/color/250/000000/c-sharp-logo.png', 'link_doc': 'https://docs.microsoft.com/pt-br/dotnet/csharp/getting-started/', 'label': 'C#', 'texto': 'C# é uma linguagem de programação, multiparadigma, de tipagem forte, desenvolvida pela Microsoft como parte da plataforma .NET.'}
			]
		}
	}
}
</script>