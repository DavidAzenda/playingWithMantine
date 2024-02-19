import { Card, Modal } from '@mantine/core';

interface Props {
	name: string;
}

export function ProfileModal({ name }: Props) {
	return (
		<Card>
			<Modal.Header>
				<Modal.CloseButton />
			</Modal.Header>
			<div>hello</div>
			<div>{name}</div>
		</Card>
	);
}
