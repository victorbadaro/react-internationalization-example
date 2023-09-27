import { ContainerProps } from './types';

import styles from './styles.module.scss';

export function Container({ children, ...rest }: ContainerProps) {
	return (
		<main {...rest} className={styles.container}>
			{children}
		</main>
	);
}
