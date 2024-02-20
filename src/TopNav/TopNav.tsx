import { useState } from 'react';
import { Container, Group, Burger, Title, Drawer, Indicator } from '@mantine/core';
import { useDisclosure, useLocalStorage } from '@mantine/hooks';
import classes from './TopNav.module.css';
import { UserButton } from '../UserButton/UserButton';

interface Props {
	notification: boolean;
	setNotification: React.Dispatch<React.SetStateAction<boolean>>;
}

export function TopNav({ notification, setNotification }: Props) {
	const [opened, { open, close }] = useDisclosure(false);
	const [yes, setYes] = useLocalStorage({
		key: 'gf',
		defaultValue: false,
	});
	setNotification(
		['welcome', 'newMatch']
			.map((key) => JSON.parse(localStorage.getItem(key)!))
			.filter((notification) => notification === false).length === 0
			? false
			: true
	);

	setTimeout(() => {
		// setYes(false);
	}, 5000);

	return (
		<header className={classes.header}>
			<Group justify="space-between">
				<Title>LOVAI</Title>
				<Drawer
					offset={8}
					radius="md"
					size={'80px'}
					opened={yes ? false : opened}
					onClose={close}
					position="right"
					classNames={{ body: classes.drawer }}
					withCloseButton={false}>
					<UserButton notification={notification} />
				</Drawer>
				<Indicator
					inline
					processing
					disabled={!notification}
					color="blue"
					size={12}>
					<Burger
						opened={yes ? false : opened}
						onClick={open}
						size="sm"
						style={{ paddingRight: '20px' }}
					/>
				</Indicator>
			</Group>
		</header>
	);
}
