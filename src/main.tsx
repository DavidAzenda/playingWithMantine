import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import '@mantine/notifications/styles.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { GirlfriendPage } from './GirlfriendPage.tsx';

import { MantineProvider } from '@mantine/core';
import { theme } from './Theme/Theme.ts';
import { Notifications } from '@mantine/notifications';
import { ModalsProvider } from '@mantine/modals';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<MantineProvider>
			<Notifications />
			<ModalsProvider>
				<GirlfriendPage />
			</ModalsProvider>
		</MantineProvider>
	</React.StrictMode>
);
