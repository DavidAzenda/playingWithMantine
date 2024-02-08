import { useState } from 'react';
import { Container, Group, Burger, Title, Drawer, Indicator } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './TopNav.module.css';

interface Props {
	notification: boolean;
}

export function TopNav({ notification }: Props) {
	const [opened, { open, close }] = useDisclosure(false);

	return (
		<header className={classes.header}>
			<Group justify="space-between">
				<Title>LOVAI</Title>
				<Drawer
					offset={8}
					radius="md"
					opened={opened}
					onClose={close}
					position="right"
					title="Authentication">
					{/* Drawer content */}
				</Drawer>
				<Indicator
					inline
					processing
					disabled={!notification}
					color="blue"
					size={12}>
					<Burger
						opened={opened}
						onClick={open}
						size="sm"
						style={{ paddingRight: '20px' }}
					/>
				</Indicator>
			</Group>
		</header>
	);
}
