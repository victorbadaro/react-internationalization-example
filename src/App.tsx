import { Trans, useTranslation } from 'react-i18next';
import { ButtonsContainer } from './components/ButtonsContainer';
import { Container } from './components/Container';

import './styles/global.scss';

export function App() {
	const { t } = useTranslation();

	return (
		<Container>
			<h1>{t('container.title')}</h1>
			<p><Trans i18nKey="container.description" components={[<b />, <i />]} /></p>
			<ButtonsContainer />
		</Container>
	);
}
