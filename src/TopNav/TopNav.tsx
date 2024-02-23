import { useEffect } from 'react';
import { Group, Burger, Title, Drawer, Indicator } from '@mantine/core';
import { useDisclosure, useSessionStorage } from '@mantine/hooks';
import classes from './TopNav.module.css';
import { UserButton } from '../UserButton/UserButton';

export function TopNav() {
	const [opened, { open, close }] = useDisclosure(false);
	const [yes, setYes] = useSessionStorage({
		key: 'gf',
		defaultValue: false,
	});
	const [notification, setNotification] = useSessionStorage({
		key: 'notification',
		defaultValue: false,
	});

	const [m1] = useSessionStorage({
		key: 'welcome',
		defaultValue: { opened: false, timeCreated: '', timeOpened: '' },
	});
	const [m2] = useSessionStorage({
		key: 'newMatch',
		defaultValue: { opened: false, timeCreated: '', timeOpened: '' },
	});

	useEffect(() => {
		console.log(m1.timeOpened.length === 0, m2.timeOpened.length === 0);
		if (m1.opened && m2.opened && m1.timeOpened.length > 0 && m2.timeOpened.length > 0)
			return setNotification(false);
		// else return setNotification(true);
	}, [m1, m2]);

	window.onbeforeunload = () => {
		setYes(false);
		sessionStorage.clear();
	};

	return (
		<header className={classes.header}>
			<Group justify="space-between">
				<Title>LuVAI</Title>
				<Drawer
					offset={8}
					radius="md"
					size={'80px'}
					opened={yes ? false : opened}
					onClose={close}
					position="right"
					classNames={{ body: classes.drawer }}
					withCloseButton={false}>
					<UserButton />
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
