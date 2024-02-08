import '@mantine/core/styles.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { GirlfriendForm } from './/GirlfriendForm.tsx';

import { MantineProvider } from '@mantine/core';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<MantineProvider>
			<GirlfriendForm />
		</MantineProvider>
	</React.StrictMode>
);
