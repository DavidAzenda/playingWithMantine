import { Group, Modal, Stack, Title, Text, Notification, Card, ScrollArea } from '@mantine/core';
import { useDisclosure, useInterval, useLocalStorage } from '@mantine/hooks';
import { useEffect, useState } from 'react';
import { Message } from '../Message/Message';
import classes from './MessagesModal.module.css';
import { modals } from '@mantine/modals';
import { openProfileModal } from '../modals.utils';
import { BsChat, BsChatFill } from 'react-icons/bs';

interface Props {
	opened: boolean;
	close: () => void;
}

export function MessagesModal() {
	const [m1Opened, setM1Opened] = useLocalStorage({
		key: 'welcome',
		defaultValue: false,
	});
	const [m2Opened, setM2Opened] = useLocalStorage({ key: 'newMatch', defaultValue: false });

	function handleM2Click() {
		setM2Opened(true);
		modals.closeAll();
		openProfileModal('David');
	}
	return (
		<Card
		// opened={opened}
		// onClose={close}
		// withCloseButton={false}
		// size="xl"
		// centered
		>
			<Modal.Header p={0}>
				<Title
					order={2}
					fw={600}
					pr={4}>
					Messages
				</Title>
				<BsChatFill
					size={24}
					style={{ color: 'pink' }}
				/>
				<Modal.CloseButton />
			</Modal.Header>
			<div>
				<Stack
					h={600}
					gap={2}
					style={{
						border: '1px solid pink',
						borderRadius: '3px',
					}}>
					<ScrollArea>
						<Notification
							onClick={
								() => setM1Opened(true)
								// localStorage.setItem('welcome', JSON.stringify({ opened: true }))
							}
							className={classes.notification}
							color={m1Opened ? 'white' : 'pink'}
							title="Welcome!"
							withCloseButton={false}
							withBorder>
							Welcome to Lovai.
						</Notification>
						<Notification
							onClick={handleM2Click}
							className={classes.notification}
							color={m2Opened ? 'white' : 'pink'}
							title="New Match!"
							withCloseButton={false}
							withBorder>
							You have a new match. Open to view!
						</Notification>
					</ScrollArea>
				</Stack>
			</div>

			{/* <div style={{ height: '600px', border: '1px solid gray', borderRadius: '4px', }}>
				<Notification
					onClick={
						() => setM1Opened(true)
						// localStorage.setItem('welcome', JSON.stringify({ opened: true }))
					}
					className={classes.notification}
					color={m1Opened ? 'white' : 'pink'}
					title="Welcome"
					withCloseButton={false}
					withBorder>
					Welcome to Lovai.
				</Notification>
				<Notification
					onClick={handleM2Click}
					className={classes.notification}
					color={m2Opened ? 'white' : 'pink'}
					title="New Match"
					withCloseButton={false}
					withBorder>
					You have a new match. Open to view!
				</Notification>
			</div> */}
		</Card>
	);
}
