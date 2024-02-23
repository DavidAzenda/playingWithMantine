import { useEffect, useState } from 'react';

import './App.css';
import { Card, Container, LoadingOverlay, Stack, TextInput, Title } from '@mantine/core';
import styles from './GirlfriendPage.module.css';
import { TopNav } from './TopNav/TopNav';
import { MainSection } from './MainSection/MainSection';
import { Steps } from './Steps/Steps';
import { GirlfriendForm } from './GirlfriendForm/GirlfriendForm';
import { useLocalStorage, useScrollIntoView, useSessionStorage, useTimeout } from '@mantine/hooks';
import { Footer } from './Footer/Footer';
import { Login } from './Login/Login';

export const GirlfriendPage = () => {
	const { scrollIntoView, targetRef } = useScrollIntoView<HTMLDivElement>({
		offset: 0,
	});

	const [yes, setYes] = useSessionStorage({
		key: 'gf',
		defaultValue: false,
	});

	const [login, setlogin] = useLocalStorage({
		key: 'login',
		defaultValue: false,
	});

	const [loading, setLoading] = useState(true);

	const { start, clear } = useTimeout(() => setLoading(false), 1000);

	useEffect(() => {
		start();
	}, []);

	return (
		<div className={yes ? styles.dark : ''}>
			<LoadingOverlay
				visible={loading && !login}
				zIndex={999999999}
				overlayProps={{ backgroundOpacity: 1 }}
			/>
			{login ? (
				<>
					<TopNav />
					<MainSection scrollIntoView={scrollIntoView} />
					<Steps />
					<GirlfriendForm targetRef={targetRef} />
					<Footer />
					<div className={yes ? styles.firework : ''}></div>
					<div className={yes ? styles.firework : ''}></div>
					<div className={yes ? styles.firework : ''}></div>
					<div className={yes ? styles.firework : ''}></div>
					<div className={yes ? styles.firework : ''}></div>
				</>
			) : (
				<Login clear={clear} />
			)}
		</div>
	);
};
