import { useTranslation } from 'react-i18next';
import { LanguageButton } from '../LanguageButton';
import { ButtonsContainerProps } from './types';

import brImg from '@/assets/br.svg';
import usImg from '@/assets/us.svg';

import styles from './styles.module.scss';

export function ButtonsContainer({ ...rest }: ButtonsContainerProps) {
	const { i18n } = useTranslation();

	return (
		<div {...rest} className={styles['buttons-container']}>
			<LanguageButton onClick={() => i18n.changeLanguage('pt-BR')}>
				<img src={brImg} />
			</LanguageButton>
			<LanguageButton onClick={() => i18n.changeLanguage('en-US')}>
				<img src={usImg} />
			</LanguageButton>
		</div>
	);
}
