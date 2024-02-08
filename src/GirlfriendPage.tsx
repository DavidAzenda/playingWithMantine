import { useState } from 'react';

import './App.css';
import { Card, Container, Stack, TextInput, Title } from '@mantine/core';
import styles from './GirlfriendPage.module.css';
import { TopNav } from './TopNav/TopNav';
import { MainSection } from './MainSection/MainSection';
import { Steps } from './Steps/Steps';
import { GirlfriendForm } from './GirlfriendForm/GirlfriendForm';

export const GirlfriendPage = () => {
	const [notification, setNotification] = useState<boolean>(false);
	return (
		<>
			<TopNav notification={notification} />

			<MainSection />
			<Steps />
			<GirlfriendForm setNotification={setNotification} />
		</>
	);
};
