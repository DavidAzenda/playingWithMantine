import { Card, Modal, Paper, Title, Text, Group, Button, Tooltip } from '@mantine/core';
import { openMessagesModal } from '../modals.utils';
import { modals } from '@mantine/modals';
import { useLocalStorage } from '@mantine/hooks';

interface Props {
	name: string;
}

export function ProfileModal({ name }: Props) {
	const [yes, setYes] = useLocalStorage({
		key: 'gf',
		defaultValue: false,
	});

	function handleYes() {
		modals.closeAll();
		setYes(true);
	}

	return (
		<Card>
			<Modal.Header p={0}>
				<Title order={4}>New Match ❤️</Title>
				<Modal.CloseButton onClick={openMessagesModal} />
			</Modal.Header>
			<Paper>
				<Text>From: {name}</Text>
				<Text>To: Mafatta</Text>
				<Text>
					{' '}
					If you're reading this that means we are a perfect match (AI is perfect and
					makes no mistakes 😤)! From Bowling to dinner to skating to painting, the last
					three months have been nothing short of amazing! I am so happy we've had a
					chance to get to know each other and I am excited to keep on getting to know
					you! I've been building this app so I can finally ask you the question I've been
					dying to ask.{' '}
				</Text>
				<Text>Mafatta Will You Be My Girlfriend?</Text>

				<Text>PS. sorry it took so long 😓 </Text>
			</Paper>

			<Group justify="end">
				<Tooltip label="This not an option 😡">
					<Button disabled>NO</Button>
				</Tooltip>
				<Button onClick={handleYes}>YES</Button>
			</Group>
		</Card>
	);
}
