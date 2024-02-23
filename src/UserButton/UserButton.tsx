import { ActionIcon, Avatar, Indicator, Stack, Tooltip } from '@mantine/core';

import { FiHeart, FiLock, FiLogOut, FiMail, FiSettings } from 'react-icons/fi';

import { useLocalStorage, useSessionStorage } from '@mantine/hooks';
import { useState, useEffect } from 'react';

import { openMessagesModal } from '../modals.utils';

export function UserButton() {
	const [__login, __setlogin, clearLogin] = useLocalStorage({
		key: 'login',
		defaultValue: false,
	});

	const [numOfNotifications, setNumOfNotifications] = useState(0);

	const [notification] = useSessionStorage({
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
		console.log(m1, m2);
		let counter = 0;
		if (!m1.opened) counter += 1;
		if (!m2.opened) counter += 1;
		console.log(counter);
		setNumOfNotifications(counter);
	}, [m1, m2]);

	function handleLogout() {
		clearLogin();
	}

	return (
		<>
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
							color="pink"
							onClick={handleLogout}>
							<FiLogOut />
						</ActionIcon>
					</Tooltip>
				</Stack>
			</Stack>
		</>
	);
}
