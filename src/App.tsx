import { ButtonsContainer } from './components/ButtonsContainer';
import { Container } from './components/Container';

import './styles/global.scss';

export function App() {
	return (
		<Container>
			<h1>Bem vindo!</h1>
			<p>Essa é uma aplicação de exemplo de internacionalização utilizando o <i>framework</i> <b>i18n</b></p>
			<ButtonsContainer />
		</Container>
	);
}
