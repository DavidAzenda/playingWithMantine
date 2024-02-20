import { Fieldset, Input, MantineThemeOverride, Title, createTheme } from '@mantine/core';
import classes from './Theme.module.css';

export const ThemeOverride: MantineThemeOverride = {
	components: {
		// Input: Input.extend({ classNames: {root:classes.input} }),
		Fieldset: Fieldset.extend({ classNames: { legend: classes.fieldSetLegend } }),
		Title: Title.extend({ classNames: { root: classes.titleRoot } }),
		InputWrapper: Input.Wrapper.extend({ classNames: { label: classes.inputLabel } }),
	},
	headings: {
		fontWeight: '600',
		fontFamily: 'Josefin Sans Variable',
	},
};

export const theme = createTheme(ThemeOverride);
