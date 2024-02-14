import { Input, createTheme } from '@mantine/core';
import classes from './Theme.css';

export const theme = createTheme({
	components: {
		Input: Input.extend({ classNames: classes }),
	},
});
