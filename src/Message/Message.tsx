import { Group, Stack, Title, Text } from '@mantine/core';
import { useInterval } from '@mantine/hooks';
import { useEffect, useState } from 'react';

interface Props {
	title: string;
	preview: string;
	time: number;
	onClick: () => void;
}

export function Message({ time, title, preview }: Props) {
	const opened = false;

	return (
		<>
			<Group>
				<Stack>
					<Title>{title}</Title>
					<Text>{preview}</Text>
				</Stack>
			</Group>
		</>
	);
}
