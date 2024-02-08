import { Button, Container, Fieldset, Group, Stack, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useTimeout } from '@mantine/hooks';
import styles from './GirlfriendForm.module.css';

interface Props {
	setNotification: React.Dispatch<React.SetStateAction<boolean>>;
}
export function GirlfriendForm({ setNotification }: Props) {
	const form = useForm({
		initialValues: {},
		validate: {},
	});
	const { start, clear } = useTimeout(() => setNotification(true), 10000);
	function handleFormSubmit(form: any) {
		localStorage.setItem('gfInfo', JSON.stringify(form.values));
	}
	return (
		<div className={styles.wrapper}>
			<form onSubmit={handleFormSubmit}>
				<Fieldset legend="Personal Information">
					<Group justify="space-between">
						<Stack>
							<TextInput
								label=" First Name"
								placeholder="First Name..."
							/>
							<TextInput
								label="Email"
								placeholder="Email"
							/>
							<TextInput
								label="Phone Number"
								placeholder="Phone Number"
							/>
						</Stack>
						<Stack>
							<TextInput
								label="Last Name"
								placeholder="Last Name..."
							/>
						</Stack>
					</Group>
				</Fieldset>
				<Fieldset legend="Personal Information">
					<Group justify="space-between">
						<Stack>
							<TextInput
								label=" First Name"
								placeholder="First Name..."
							/>
							<TextInput
								label="Email"
								placeholder="Email"
							/>
							<TextInput
								label="Phone Number"
								placeholder="Phone Number"
							/>
						</Stack>
						<Stack>
							<TextInput
								label="Last Name"
								placeholder="Last Name..."
							/>
						</Stack>
					</Group>
				</Fieldset>
				<Fieldset legend="Personal Information">
					<Group justify="space-between">
						<Stack>
							<TextInput
								label=" First Name"
								placeholder="First Name..."
							/>
							<TextInput
								label="Email"
								placeholder="Email"
							/>
							<TextInput
								label="Phone Number"
								placeholder="Phone Number"
							/>
						</Stack>
						<Stack>
							<TextInput
								label="Last Name"
								placeholder="Last Name..."
							/>
						</Stack>
					</Group>
				</Fieldset>
			</form>
			<Button
				color="red"
				variant="filled"
				tt={'uppercase'}
				onClick={start}>
				Send Information
			</Button>
		</div>
	);
}
