import { useState } from 'react';

import './App.css';
import { Card, Container, Stack, TextInput, Title } from '@mantine/core';
import styles from './GirlfriendPage.module.css';
import { TopNav } from './TopNav/TopNav';
import { MainSection } from './MainSection/MainSection';
import { Steps } from './Steps/Steps';
import { GirlfriendForm } from './GirlfriendForm/GirlfriendForm';
import { useScrollIntoView } from '@mantine/hooks';

export const GirlfriendPage = () => {
	const [notification, setNotification] = useState<boolean>(false);

	const { scrollIntoView, targetRef } = useScrollIntoView<HTMLDivElement>({
		offset: 0,
	});

	return (
		<>
			<TopNav
				notification={notification}
				setNotification={setNotification}
			/>
			<MainSection scrollIntoView={scrollIntoView} />
			<Steps />
			<GirlfriendForm
				setNotification={setNotification}
				targetRef={targetRef}
			/>
		</>
	);
};
