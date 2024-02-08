import '@mantine/core/styles.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { GirlfriendPage } from './GirlfriendPage.tsx';

import { MantineProvider } from '@mantine/core';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<MantineProvider>
			<GirlfriendPage />
		</MantineProvider>
	</React.StrictMode>
);
