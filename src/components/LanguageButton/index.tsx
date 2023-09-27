import { LanguageButtonProps } from './types';

import styles from './styles.module.scss';

export function LanguageButton({ children, ...rest }: LanguageButtonProps) {
	return (
		<button {...rest} type="button" className={styles['language-button']}>
			{children}
		</button>
	);
}
