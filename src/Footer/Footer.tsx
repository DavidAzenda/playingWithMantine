import { Anchor, Container, Group, Title } from '@mantine/core';
import classes from './Footer.module.css';

const links = [
	{ link: '#', label: 'Contact' },
	{ link: '#', label: 'Privacy' },
	{ link: '#', label: 'Blog' },
	{ link: '#', label: 'Careers' },
];

export function Footer() {
	const items = links.map((link) => (
		<Anchor<'a'>
			c="white"
			key={link.label}
			href={link.link}
			onClick={(event) => event.preventDefault()}
			size="sm">
			{link.label}
		</Anchor>
	));

	return (
		<div className={classes.footer}>
			<div className={classes.inner}>
				<Title order={4}>Luvai</Title>
				<Group className={classes.links}>{items}</Group>
			</div>
		</div>
	);
}
