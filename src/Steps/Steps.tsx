import { Group, Stack } from '@mantine/core';
import styles from './Steps.module.css';
export function Steps() {
	return (
		<div className={styles.wrapper}>
			<Group
				px={'80px'}
				justify="space-evenly">
				<Stack align="center">
					<div className={styles.circle}> 1 </div>
					<div className={styles.header}>Info</div>
					<div className={styles.text}>
						Fill out the form below with your details (be sure to specify your hobbies).
					</div>
				</Stack>
				<Stack align="center">
					<div className={styles.circle}> 2 </div>
					<div className={styles.header}>Results</div>
					<div className={styles.text}>
						Get your perfect match results and see which type of person your perfect
						match is.
					</div>
				</Stack>
				<Stack align="center">
					<div className={styles.circle}> 3 </div>
					<div className={styles.header}>Match</div>
					<div className={styles.text}>
						Go through your notifications and accept the request from your perfect
						match.
					</div>
				</Stack>
			</Group>
		</div>
	);
}
