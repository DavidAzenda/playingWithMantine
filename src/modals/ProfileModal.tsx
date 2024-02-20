import {
	Card,
	Modal,
	Paper,
	Title,
	Text,
	Group,
	Button,
	Tooltip,
	Stack,
	Avatar,
} from '@mantine/core';
import { openMessagesModal } from '../modals.utils';
import { modals } from '@mantine/modals';
import { useLocalStorage, useSessionStorage, useWindowScroll } from '@mantine/hooks';
import me from '../assets/me.jpeg';
import { FiCornerUpLeft } from 'react-icons/fi';

interface Props {
	name: string;
}

export function ProfileModal({ name }: Props) {
	const [yes, setYes] = useSessionStorage({
		key: 'gf',
		defaultValue: false,
	});

	const [m2Opened, setM2Opened] = useSessionStorage({
		key: 'newMatch',
		defaultValue: { opened: false, timeCreated: '', timeOpened: '' },
	});

	const [scroll, scrollTo] = useWindowScroll();

	function handleYes() {
		modals.closeAll();
		setYes(true);
		scrollTo({ y: 0 });
	}

	return (
		<Card>
			<Modal.Header p={0}>
				<Group>
					<Avatar src={me} />
					<Stack gap={0}>
						<Text ff={'Josefin Sans Variable'}>
							{name} {`<davida10@live.ca>`}
						</Text>
						<Text ff={'Josefin Sans Variable'}>To: You</Text>
					</Stack>
				</Group>

				{/* <Title order={4}>New Match ❤️</Title> */}
				<Text ff={'Josefin Sans Variable'}>{m2Opened.timeCreated}</Text>
			</Modal.Header>
			<Paper
				my={16}
				px={56}>
				<Text pb={16}>Hello Mafatta,</Text>
				<Text>
					{' '}
					If you're reading this that means we are a perfect match (AI is perfect and
					makes no mistakes 😤)! From Bowling to dinner to skating to painting and
					everything in between, the last three months have been nothing short of amazing!
					I am so happy we've had a chance to get to know each other and I am excited to
					keep on getting to know you! I've been building this app to ask you an important
					question in my own special way.{' '}
				</Text>
				<Text py={16}>Mafatta Will You Be My Girlfriend?</Text>
				<Text>PS. sorry it took so long 😓 </Text>
			</Paper>
			<Group
				justify="space-between"
				px={56}>
				<Button
					leftSection={<FiCornerUpLeft />}
					disabled>
					REPLY
				</Button>

				<Group justify="end">
					<Title order={6}>Quick Reply</Title>
					<Tooltip label="This not an option 😡">
						<Button disabled>NO</Button>
					</Tooltip>
					<Button onClick={handleYes}>YES</Button>
				</Group>
			</Group>
		</Card>
	);
}
