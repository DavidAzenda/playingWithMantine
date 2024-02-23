import {
	Title,
	Anchor,
	Paper,
	TextInput,
	PasswordInput,
	Group,
	Checkbox,
	Text,
	Container,
	Button,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { useLocalStorage, useSessionStorage } from '@mantine/hooks';
import { useState } from 'react';

interface Props {
	clear: () => void;
}
export function Login({ clear }: Props) {
	const [__login, setlogin] = useLocalStorage({
		key: 'login',
		defaultValue: false,
	});
	const [__slogin, setSlogin] = useSessionStorage({
		key: 'slogin',
		defaultValue: false,
	});

	const [remember, setRemember] = useState(false);

	const form = useForm({
		initialValues: {
			email: '',
			password: '',
		},
		validateInputOnBlur: true,
		validate: {
			email: (value) => (value !== 'mafatta@yahoo.com' ? 'Invalid Email' : null),
			password: (value) => (value !== 'shawarma' ? 'Invalid Password' : null),
		},
	});

	function handleLogin() {
		clear;
		if (form.isValid() && remember) setlogin(true);
		else setSlogin(true);
	}

	return (
		<Container
			size={420}
			my={40}>
			<Title
				ta="center"
				fw={700}>
				Welcome back!
			</Title>
			<Text
				c="dimmed"
				size="sm"
				ta="center"
				mt={5}>
				Do not have an account yet?{' '}
				<Anchor
					size="sm"
					component="button">
					Create account
				</Anchor>
			</Text>

			<Paper
				withBorder
				shadow="md"
				p={30}
				mt={30}
				radius="md">
				<TextInput
					label="Email"
					placeholder="youremail@yahoo.com"
					required
					{...form.getInputProps('email')}
				/>
				<PasswordInput
					label="Password"
					placeholder="our first date meal"
					required
					mt="md"
					{...form.getInputProps('password')}
				/>
				<Group
					justify="space-between"
					mt="lg">
					<Checkbox
						label="Remember me"
						onChange={(val) => setRemember(val.currentTarget.checked)}
					/>
					<Anchor
						component="button"
						size="sm">
						Forgot password?
					</Anchor>
				</Group>
				<Button
					fullWidth
					mt="xl"
					color="red"
					onClick={handleLogin}>
					Sign in
				</Button>
			</Paper>
		</Container>
	);
}
