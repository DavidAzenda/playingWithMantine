import { useState } from 'react';
import { Container, Group, Burger, Title, Drawer } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './TopNav.module.css';

export function TopNav() {
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

				<Burger
					opened={opened}
					onClick={open}
					size="sm"
					style={{ paddingRight: '20px' }}
				/>
			</Group>
		</header>
	);
}
