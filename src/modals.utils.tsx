import { modals } from '@mantine/modals';

import { ModalSettings } from '../node_modules/@mantine/modals/lib/context';
import { MessagesModal } from './modals/MessagesModal';
import { ProfileModal } from './modals/ProfileModal';

const options: Partial<ModalSettings> = {
	closeOnClickOutside: false,
	withCloseButton: false,
	size: '100vw',
	padding: 'md',
	radius: 'md',
	centered: true,
};

export function openMessagesModal() {
	modals.open({
		...options,
		children: <MessagesModal />,
	});
}

export function openProfileModal(name: string) {
	modals.open({
		...options,
		children: <ProfileModal name={name} />,
	});
}
