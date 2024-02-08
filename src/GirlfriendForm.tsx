import { useState } from 'react';

import './App.css';
import { Card, Container, Stack, TextInput, Title } from '@mantine/core';
import styles from './GirlfriendForm.module.css';
import { TopNav } from './TopNav/TopNav';
import { MainSection } from './MainSection/MainSection';
import { Steps } from './Steps/Steps';

export const GirlfriendForm = () => {
	return (
		<>
			<TopNav />

			<MainSection />
			<Steps />
			{/* <form className={styles.form}>
					
					<Stack>
						<Title>Hello Pease Fill Out The Form</Title>
						<TextInput
							size="xs"
							label="Name"></TextInput>
					</Stack>
					
				</form> */}
		</>
	);
};
