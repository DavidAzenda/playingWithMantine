import { Group, Modal, Stack, Title, Text, Notification, Card, ScrollArea } from '@mantine/core';
import { useDisclosure, useInterval, useLocalStorage, useSessionStorage } from '@mantine/hooks';
import { Children, useEffect, useState } from 'react';
import { Message } from '../Message/Message';
import classes from './MessagesModal.module.css';
import { modals } from '@mantine/modals';
import { openProfileModal } from '../modals.utils';
import { BsChat, BsChatFill } from 'react-icons/bs';
import dayjs from 'dayjs';

interface Props {
	opened: boolean;
	close: () => void;
}

export function MessagesModal() {
	const [m1Opened, setM1Opened] = useSessionStorage({
		key: 'welcome',
		defaultValue: { opened: false, timeCreated: '', timeOpened: '' },
	});
	const [m2Opened, setM2Opened] = useSessionStorage({
		key: 'newMatch',
		defaultValue: { opened: false, timeCreated: '', timeOpened: '' },
	});

	function handleM2Click() {
		setM2Opened({
			...m2Opened,
			opened: true,
			timeOpened: dayjs().format('YYYY-MMM-DD HH:mm'),
		});
		modals.closeAll();
		openProfileModal('David');
	}
	return (
		<Card p={8}>
			<Modal.Header p={0}>
				<Title
					order={2}
					fw={600}
					pr={4}
					pt={9}>
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
						justifyContent: !m1Opened.timeCreated ? 'center' : '',
						alignItems: !m1Opened.timeCreated ? 'center' : '',
					}}>
					{m1Opened.timeCreated && m2Opened.timeCreated ? (
						<ScrollArea>
							<Notification
								onClick={() =>
									setM1Opened({
										...m1Opened,
										opened: true,
										timeOpened: dayjs().format('YYYY-MMM-DD HH:mm'),
									})
								}
								className={classes.notification}
								color={m1Opened.opened ? 'white' : 'pink'}
								title="Welcome 🎉"
								withCloseButton={false}
								withBorder>
								Welcome to Luvai.
							</Notification>
							<Notification
								onClick={handleM2Click}
								className={classes.notification}
								color={m2Opened.opened ? 'white' : 'pink'}
								title="New Match ❤️"
								withCloseButton={false}
								withBorder>
								You have a new match. Open to view!
							</Notification>
						</ScrollArea>
					) : (
						<Text
							tt={'uppercase'}
							size="18px">
							No Messages
						</Text>
					)}
				</Stack>
			</div>
		</Card>
	);
}
