import { ActionIcon, Avatar, Button, Group, Indicator, Stack, Text, Tooltip } from '@mantine/core';
import { modals } from '@mantine/modals';
import { FiChevronRight, FiHeart, FiLock, FiLogOut, FiMail, FiSettings } from 'react-icons/fi';

import { useDisclosure, useInterval } from '@mantine/hooks';
import { useState, useEffect } from 'react';
import { MessagesModal } from '../modals/MessagesModal';
import { openMessagesModal } from '../modals.utils';

interface Props {
	notification: boolean;
}

export function UserButton({ notification }: Props) {
	let numOfNotifications = ['welcome', 'newMatch']
		.map((key) => JSON.parse(localStorage.getItem(key)!))
		.filter((notification) => notification === false).length;
	window.addEventListener('storage', () => {
		numOfNotifications = ['welcome', 'newMatch']
			.map((key) => JSON.parse(localStorage.getItem(key)!))
			.filter((notification) => notification === false).length;
	});

	return (
		<>
			{/* <MessagesModal
				opened={opened}
				close={close}
			/> */}
			<Stack
				py={'10px'}
				h="100%"
				justify="space-between">
				<Stack>
					<Tooltip label="Profile">
						<ActionIcon
							radius="xl"
							size="xl"
							color="pink">
							<Avatar
								radius="xl"
								color="white">
								M
							</Avatar>
						</ActionIcon>
					</Tooltip>

					<Tooltip label="Messages">
						<Indicator
							disabled={!notification}
							color={numOfNotifications !== 0 ? 'red' : '#ffc0cb'}
							label={numOfNotifications !== 0 ? numOfNotifications : undefined}
							offset={numOfNotifications !== 0 ? 6 : 0}
							size={12}>
							<ActionIcon
								radius="xl"
								size="xl"
								onClick={openMessagesModal}
								color="pink">
								<FiMail />
							</ActionIcon>
						</Indicator>
					</Tooltip>
					<Tooltip label="Favorites">
						<ActionIcon
							radius="xl"
							size="xl"
							color="pink">
							<FiHeart />
						</ActionIcon>
					</Tooltip>
					<Tooltip label="Privacy">
						<ActionIcon
							radius="xl"
							size="xl"
							color="pink">
							<FiLock />
						</ActionIcon>
					</Tooltip>
				</Stack>
				<Stack>
					<Tooltip label="Settings">
						<ActionIcon
							radius="xl"
							size="xl"
							color="pink">
							<FiSettings />
						</ActionIcon>
					</Tooltip>
					<Tooltip label="Logout">
						<ActionIcon
							radius="xl"
							size="xl"
							color="pink">
							<FiLogOut />
						</ActionIcon>
					</Tooltip>
				</Stack>
			</Stack>
		</>
	);
}
