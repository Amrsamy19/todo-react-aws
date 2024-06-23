import SvgIcon from '@mui/material/SvgIcon';
import { ReactComponent as CrossIconSvg } from '../..//images/icon-cross.svg';
import { ReactComponent as CheckIconSvg } from '../../images/icon-check.svg';
import { ReactComponent as MoonIconSvg } from '../../images/icon-moon.svg';
import { ReactComponent as SunIconSvg } from '../../images/icon-sun.svg';

export const SunIcon = () => {
	return <SvgIcon component={SunIconSvg} inheritViewBox />;
};

export const CrossIcon = () => {
	return <SvgIcon component={CrossIconSvg} inheritViewBox />;
};

export const MoonIcon = () => {
	return (
		<SvgIcon
			sx={{ height: '50px' }}
			component={MoonIconSvg}
			inheritViewBox
		/>
	);
};
export const CheckIcon = () => {
	return (
		<SvgIcon
			sx={{
				borderRadius: '90px',
				mx: 1,
				background:
					'#3a3a3a',
				'& path': {
					transform: 'translate(7px, 8px)',
				},
			}}
			component={CheckIconSvg}
			inheritViewBox
		/>
	);
};