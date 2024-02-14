import { ActionIcon, Avatar, Button, Group, Indicator, Stack, Text, Tooltip } from '@mantine/core';
import { modals } from '@mantine/modals';
import { FiChevronRight, FiLogOut, FiMail } from 'react-icons/fi';

interface Props {
	notification: boolean;
	setNotification: React.Dispatch<React.SetStateAction<boolean>>;
}

export function UserButton({ notification, setNotification }: Props) {
	function openMessagesModal() {
		return modals.openConfirmModal({
			title: 'Please confirm your action',
			closeOnConfirm: false,
			labels: { confirm: 'Next modal', cancel: 'Close modal' },
			children: (
				<Text size="sm">
					This action is so important that you are required to confirm it with a modal.
					Please click one of these buttons to proceed.
				</Text>
			),
			onConfirm: () => {
				setNotification(false);
				modals.openConfirmModal({
					title: 'This is modal at second layer',
					labels: { confirm: 'Close modal', cancel: 'Back' },
					closeOnConfirm: false,
					children: (
						<Text size="sm">
							When this modal is closed modals state will revert to first modal
						</Text>
					),
					onConfirm: modals.closeAll,
				});
			},
		});
	}

	return (
		<Stack
			py={'10px'}
			h="100%"
			justify="space-between">
			<Stack>
				<ActionIcon
					radius="xl"
					size="xl">
					<Avatar
						radius="xl"
						color="pink">
						M
					</Avatar>
				</ActionIcon>
				<Tooltip label="Messages">
					<Indicator
						disabled={!notification}
						color="red"
						label="1"
						offset={6}
						size={12}>
						<ActionIcon
							radius="xl"
							size="xl"
							onClick={() => openMessagesModal()}>
							<FiMail />
						</ActionIcon>
					</Indicator>
				</Tooltip>
			</Stack>
			<Tooltip label="Logout">
				<ActionIcon
					radius="xl"
					size="xl">
					<FiLogOut />
				</ActionIcon>
			</Tooltip>
		</Stack>
	);
}
