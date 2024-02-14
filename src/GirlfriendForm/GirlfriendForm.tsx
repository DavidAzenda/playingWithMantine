import {
	ActionIcon,
	Autocomplete,
	Badge,
	Button,
	ColorPicker,
	Container,
	Fieldset,
	Grid,
	Group,
	Input,
	InputBase,
	Pill,
	Radio,
	Select,
	Slider,
	Stack,
	Text,
	TextInput,
	Textarea,
	Tooltip,
} from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { isNotEmpty, useForm } from '@mantine/form';
import { useTimeout } from '@mantine/hooks';
import styles from './GirlfriendForm.module.css';
import { Calendar, DateInput, DatePickerInput, DateTimePicker } from '@mantine/dates';
import dayjs from 'dayjs';
import { useState } from 'react';
import { HiEyeDropper } from 'react-icons/hi2';
import { FiCheck } from 'react-icons/fi';
import { PillSearch } from '../PillSearch/PillSearch';

interface Props {
	setNotification: React.Dispatch<React.SetStateAction<boolean>>;
}
export function GirlfriendForm({ setNotification }: Props) {
	const form = useForm({
		initialValues: {
			// Personal Info
			firstName: '',
			lastName: '',
			email: '',
			phone: '',
			dob: new Date(),
			gender: 'Female',
			nationality: '',
			height: '50',
			occupation: '',

			// Deeper Info
			favoriteColor: '',
			shoeSize: '',
			ringSize: '',
			clothingSize: '',
			favoriteMovie: '',
			favoriteTV: '',
			favoriteSong: '',
			favoriteBook: '',

			// Looking for
			interestedIn: '',
			preferredAge: '',
			preferredHeight: '',
			preferredNationality: '',
			preferredOccupation: '',

			// Hobbies
			hobbies: [],
		},
		validate: {
			firstName: isNotEmpty(),
		},
	});

	const [units, setUnits] = useState('ft');
	const [pickerVisible, setPickerVisible] = useState(false);
	const [hobbies, setHobbies] = useState<string[]>([]);

	function handleFormSubmit() {
		console.log(form.values);
		localStorage.setItem('gfInfo', JSON.stringify(form.values));
		const id = notifications.show({
			loading: true,
			title: 'Finding your match...',
			message: 'Data is being checked amongst other users. Please wait!',
			autoClose: false,
			withCloseButton: false,
		});

		setTimeout(() => {
			setNotification(true);
			notifications.update({
				id,
				color: 'teal',
				title: 'Match Found!',
				message: 'Your match has been found please go to inbox to view',
				icon: <FiCheck style={{ width: '18px', height: '18px' }} />,
				loading: false,
				autoClose: 3000,
			});
		}, 5000);
	}

	return (
		<div className={styles.wrapper}>
			<form
				onSubmit={handleFormSubmit}
				style={{ paddingBottom: '20px' }}>
				<Fieldset legend="Personal Information">
					<Grid grow>
						<Grid.Col span={6}>
							<TextInput
								label=" First Name"
								placeholder="First Name..."
								{...form.getInputProps('firstName')}
							/>
							<TextInput
								label="Email"
								placeholder="Email"
								{...form.getInputProps('email')}
							/>
							<DateInput
								valueFormat="YYYY MMM DD"
								label="Date of Birth"
								placeholder="Date of Birth"
								{...form.getInputProps('dob')}
							/>

							<Select
								label="Nationality"
								placeholder="Nationality"
								{...form.getInputProps('nationality')}
							/>
							<Select
								label="Occupation"
								placeholder="Occupation"
								{...form.getInputProps('occupation')}
							/>
						</Grid.Col>
						<Grid.Col span={6}>
							<TextInput
								label="Last Name"
								placeholder="Last Name..."
								{...form.getInputProps('lastName')}
							/>
							<TextInput
								label="Phone Number"
								placeholder="Phone Number"
								{...form.getInputProps('phone')}
							/>
							<Select
								label="Gender"
								placeholder="Gender"
								{...form.getInputProps('gender')}
								data={['Male', 'Female']}
							/>
							<Text>Height</Text>
							<Grid>
								<Grid.Col span={10}>
									<Slider
										labelAlwaysOn
										min={units === 'cm' ? 100 : 50}
										max={units === 'cm' ? 200 : 90}
										label={(value) =>
											units === 'cm'
												? `${value.toFixed(1)} cm`
												: `${(value / 12).toFixed(1)} ft`
										}
										{...form.getInputProps('height')}
									/>
								</Grid.Col>
								<Grid.Col span={2}>
									<Select
										size="xs"
										data={['cm', 'ft']}
										value={units}
										onChange={(value) => setUnits(value!)}
									/>
								</Grid.Col>
							</Grid>
						</Grid.Col>
					</Grid>
				</Fieldset>
				<Fieldset legend="Background">
					<Grid>
						<Grid.Col span={6}>
							<Group>
								<ColorPicker
									format="hex"
									withPicker={pickerVisible}
									swatches={[
										'#2e2e2e',
										'#868e96',
										'#fa5252',
										'#e64980',
										'#be4bdb',
										'#7950f2',
										'#4c6ef5',
										'#228be6',
										'#15aabf',
										'#12b886',
										'#40c057',
										'#82c91e',
										'#fab005',
										'#fd7e14',
									]}
									{...form.getInputProps('favoriteColor')}
								/>

								<Tooltip label="Click to open color picker">
									<div
										onClick={() => setPickerVisible(!pickerVisible)}
										style={{
											height: '40px',
											width: '40px',
											borderRadius: '50%',
											border: '1px solid black',
											backgroundColor: `${form.values.favoriteColor}`,
										}}></div>
								</Tooltip>
							</Group>

							<Select
								label="Clothing Size"
								placeholder="Clothing Size"
								{...form.getInputProps('clothingSize')}
							/>
							<TextInput
								label="Favorite TV Show"
								placeholder="Favorite TV Show"
								{...form.getInputProps('favoriteTV')}
							/>

							<TextInput
								label="Favorite Book"
								placeholder="Favorite Book"
								{...form.getInputProps('favoriteBook')}
							/>
						</Grid.Col>
						<Grid.Col
							span={6}
							pt={24}>
							<TextInput
								label="Shoe Size"
								placeholder="Shoe Size"
								{...form.getInputProps('shoeSize')}
							/>
							<TextInput
								label="Ring Size"
								placeholder="Ring Size"
								{...form.getInputProps('ringSize')}
							/>
							<TextInput
								label="Favorite Movie"
								placeholder="Favorite Movie"
								{...form.getInputProps('favoriteMovie')}
							/>
							<Select
								label="Favorite Song"
								placeholder="Favorite Song"
								{...form.getInputProps('favoriteSong')}
								data={['Male', 'Female']}
							/>
						</Grid.Col>
					</Grid>
				</Fieldset>
				<Fieldset legend="Personal Information">
					<Grid>
						<Grid.Col span={6}>
							<Select
								label="Interested In"
								placeholder="Interested In"
								{...form.getInputProps('interestedIn')}
								data={['Men', 'Women']}
							/>
							<Radio.Group
								name="prefferedAge"
								label="Preferred Age"
								{...form.getInputProps('preferredAge')}>
								<Group>
									<Radio
										value="you"
										label="18-22"
									/>
									<Radio
										value="young"
										label="23-25"
									/>
									<Radio
										value="me"
										label="26-29"
									/>
									<Radio
										value="old"
										label="30+"
									/>
								</Group>
							</Radio.Group>
							<Radio.Group
								label="Preferred Height Range"
								{...form.getInputProps('preferredHeight')}>
								<Group>
									<Radio
										value="you"
										label="4'8-5'1"
									/>
									<Radio
										value="short"
										label="5'2-5'7"
									/>
									<Radio
										value="average"
										label="5'8-5'11"
									/>
									<Radio
										value="tall"
										label="6'+"
									/>
								</Group>
							</Radio.Group>
						</Grid.Col>
						<Grid.Col span={6}>
							<Select
								label="Preferred Nationality"
								placeholder="Preferred Nationality"
								{...form.getInputProps('preferredNationality')}
								data={[]}
							/>
							<Select
								label="Preferred Occupation"
								placeholder="Preferred Occupation"
								{...form.getInputProps('preferredOccupation')}
								data={[]}
							/>
						</Grid.Col>
					</Grid>
				</Fieldset>
				<Fieldset legend="Hobbies">
					<PillSearch
						hobbiess={hobbies}
						setHobbies={setHobbies}
					/>
				</Fieldset>
			</form>
			<Button
				color="red"
				type="submit"
				variant="filled"
				tt={'uppercase'}
				onClick={handleFormSubmit}>
				Match
			</Button>
		</div>
	);
}
