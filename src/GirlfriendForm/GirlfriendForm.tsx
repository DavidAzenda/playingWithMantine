import {
	ActionIcon,
	Autocomplete,
	Badge,
	Button,
	ColorPicker,
	ComboboxData,
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
import { useLocalStorage, useSessionStorage, useTimeout } from '@mantine/hooks';
import styles from './GirlfriendForm.module.css';
import { Calendar, DateInput, DatePickerInput, DateTimePicker } from '@mantine/dates';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { HiEyeDropper } from 'react-icons/hi2';
import { FiCheck } from 'react-icons/fi';
import { PillSearch } from '../PillSearch/PillSearch';
import ReactFlagsSelect from 'react-flags-select';

interface Props {
	targetRef: React.MutableRefObject<HTMLDivElement>;
}

interface codes {
	key: string;
	value: string;
}

export interface FormValues {
	// Personal Info
	firstName: string;
	lastName: string;
	email: string;
	phone: string;
	dob: Date;
	gender: string;
	nationality: string;
	height: number;
	occupation: string;

	// Deeper Info
	favoriteColor: string;
	shoeSize: string;
	ringSize: string;
	clothingSize: string;
	favoriteMovie: string;
	favoriteTV: string;
	favoriteSong: string;
	favoriteBook: string;
	favoriteFood: string;

	// Looking for
	interestedIn: string;
	preferredAge: string;
	preferredHeight: string;
	preferredNationality: string;
	preferredOccupation: string;

	// Hobbies
	hobbies: string[];
}

export function GirlfriendForm({ targetRef }: Props) {
	const form = useForm<FormValues>({
		initialValues: {
			// Personal Info
			firstName: '',
			lastName: '',
			email: '',
			phone: '',
			dob: new Date(),
			gender: 'Female',
			nationality: '',
			height: 50,
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
			favoriteFood: '',

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
	const [loading, setLoading] = useState(false);

	const [yes, setYes] = useSessionStorage({
		key: 'gf',
		defaultValue: false,
	});

	const [info, setInfo] = useLocalStorage({
		key: 'gfInfo',
		defaultValue: '',
	});
	const [m1, setM1] = useSessionStorage({
		key: 'welcome',
		defaultValue: { opened: false, timeCreated: '', timeOpened: '' },
	});
	const [m2, setM2] = useSessionStorage({
		key: 'newMatch',
		defaultValue: { opened: false, timeCreated: '', timeOpened: '' },
	});

	const [notif, setNotif] = useSessionStorage({
		key: 'notification',
		defaultValue: false,
	});

	function onEmailChange(val: string) {
		form.setFieldValue('email', val ?? '');
	}

	function handleFormSubmit() {
		console.log(form.values);
		setLoading(true);
		setInfo(JSON.stringify(form.values));
		// localStorage.setItem('gfInfo', JSON.stringify(form.values));
		// localStorage.setItem('newMatch', JSON.stringify(false));

		const id = notifications.show({
			loading: true,
			title: 'Finding your match...',
			message: 'Data is being checked amongst other users. Please wait!',
			autoClose: false,
			withCloseButton: false,
		});

		setTimeout(() => {
			setNotif(true);
			setM1({ ...m1, timeCreated: dayjs().format('YYYY-MMM-DD HH:mm') });
			setM2({ ...m2, timeCreated: dayjs().format('YYYY-MMM-DD HH:mm') });
			setLoading(false);
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
		<div
			ref={targetRef}
			className={yes ? styles.dark : styles.wrapper}>
			<form
				onSubmit={handleFormSubmit}
				style={{ paddingBottom: '20px' }}>
				<Stack gap={10}>
					<Fieldset legend="Personal Information">
						<Grid
							grow
							gutter={'xl'}>
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
									onChange={(val) => onEmailChange(val.target.value)}
								/>
								<DateInput
									valueFormat="YYYY MMM DD"
									label="Date of Birth"
									placeholder="Date of Birth"
									{...form.getInputProps('dob')}
								/>
								<Input.Wrapper label="Nationality">
									<ReactFlagsSelect
										selected={form.values.nationality}
										onSelect={(code) => form.setFieldValue('nationality', code)}
										selectButtonClassName={styles.nationality}
										searchable
									/>
								</Input.Wrapper>
								<TextInput
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
									data={['👨🏾 Male', '👩🏾 Female']}
								/>
								<Group>
									<Input.Wrapper
										label="Height"
										w={'85%'}>
										{units !== 'cm' && (
											<Slider
												min={50}
												max={90}
												pt={15}
												label={(value) => `${(value / 12).toFixed(1)} ft`}
												{...form.getInputProps('height')}
											/>
										)}
										{units === 'cm' && (
											<Slider
												min={100}
												max={200}
												pt={15}
												label={(value) => `${value.toFixed(1)} cm`}
												{...form.getInputProps('height')}
											/>
										)}
									</Input.Wrapper>
									<Select
										w={99}
										size="xs"
										data={['cm', 'ft']}
										value={units}
										onChange={(value) => setUnits(value!)}
									/>
								</Group>
							</Grid.Col>
						</Grid>
					</Fieldset>
					<Fieldset legend="Background">
						<Grid>
							<Grid.Col span={6}>
								<Input.Wrapper label="Favorite Color">
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
								</Input.Wrapper>

								<Select
									pt={13}
									label="Clothing Size"
									placeholder="Clothing Size"
									{...form.getInputProps('clothingSize')}
									data={['xxs', 'xs', 'sm', 'md', 'lg', 'xl']}
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
								pt={0}>
								<Select
									label="Shoe Size"
									placeholder="Shoe Size"
									{...form.getInputProps('shoeSize')}
									data={[
										'2',
										'3',
										'4',
										'5',
										'6',
										'7',
										'8',
										'9',
										'10',
										'11',
										'12',
										'13',
									]}
								/>
								<Select
									label="Ring Size"
									placeholder="Ring Size"
									{...form.getInputProps('ringSize')}
									data={[
										'2',
										'3',
										'4',
										'5',
										'6',
										'7',
										'8',
										'9',
										'10',
										'11',
										'12',
										'13',
									]}
								/>
								<TextInput
									label="Favorite Movie"
									placeholder="Favorite Movie"
									{...form.getInputProps('favoriteMovie')}
								/>
								<TextInput
									label="Favorite Song"
									placeholder="Favorite Song"
									{...form.getInputProps('favoriteSong')}
								/>
								<TextInput
									label="Favorite Food"
									placeholder="Favorite Food"
									{...form.getInputProps('favoriteFood')}
								/>
							</Grid.Col>
						</Grid>
					</Fieldset>
					<Fieldset legend="Preferences">
						<Grid>
							<Grid.Col span={6}>
								<Select
									label="Interested In"
									placeholder="Interested In"
									{...form.getInputProps('interestedIn')}
									data={['👨🏾 Men', '👩🏾 Women']}
								/>
								<Radio.Group
									name="preferredAge"
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
								<Input.Wrapper label="Preferred Nationality">
									<ReactFlagsSelect
										selected={form.values.preferredNationality}
										onSelect={(code) =>
											form.setFieldValue('preferredNationality', code)
										}
										selectButtonClassName={styles.nationality}
										searchable
									/>
								</Input.Wrapper>
								<Select
									label="Preferred Occupation"
									placeholder="Preferred Occupation"
									{...form.getInputProps('preferredOccupation')}
									data={[
										'🎬 Actor',
										'🥇 Athlete',
										'👨🏾‍🍳 Chef',
										'👨🏾‍💻 Engineering',
										'👩🏾‍⚕️ Health Care',
										'👩🏾‍⚖️ Law',
										'🎼 Musician',
										'🤡 Unemployed',
									]}
								/>
							</Grid.Col>
						</Grid>
					</Fieldset>
					<Fieldset legend="Hobbies">
						<PillSearch form={form} />
					</Fieldset>
				</Stack>
			</form>
			<Button
				color="red"
				type="submit"
				variant="filled"
				tt={'uppercase'}
				disabled={yes}
				loading={loading}
				onClick={handleFormSubmit}>
				find your Match
			</Button>
		</div>
	);
}
