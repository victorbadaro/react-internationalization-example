import { LanguageButton } from '../LanguageButton';
import { ButtonsContainerProps } from './types';

import brImg from '@/assets/br.svg';
import usImg from '@/assets/us.svg';

import styles from './styles.module.scss';

export function ButtonsContainer({ ...rest }: ButtonsContainerProps) {
	return (
		<div {...rest} className={styles['buttons-container']}>
			<LanguageButton>
				<img src={brImg} />
			</LanguageButton>
			<LanguageButton>
				<img src={usImg} />
			</LanguageButton>
		</div>
	);
}
