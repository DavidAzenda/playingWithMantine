import { useState } from 'react';

import './App.css';
import { Card, Container, Stack, TextInput, Title } from '@mantine/core';
import styles from './GirlfriendPage.module.css';
import { TopNav } from './TopNav/TopNav';
import { MainSection } from './MainSection/MainSection';
import { Steps } from './Steps/Steps';
import { GirlfriendForm } from './GirlfriendForm/GirlfriendForm';
import { useScrollIntoView, useSessionStorage } from '@mantine/hooks';
import { Footer } from './Footer/Footer';

export const GirlfriendPage = () => {
	const { scrollIntoView, targetRef } = useScrollIntoView<HTMLDivElement>({
		offset: 0,
	});

	const [yes, setYes] = useSessionStorage({
		key: 'gf',
		defaultValue: false,
	});

	return (
		<div className={yes ? styles.dark : ''}>
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
		</div>
	);
};
