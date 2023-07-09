import {SvgIcon, SvgIconProps} from '@mui/material';

const Menu = (props: SvgIconProps) => (
  <SvgIcon {...props}>
    <rect opacity="0.01" width="32" height="32" fill="#FF963C" />
    <path d="M3 8H29" stroke="#FF963C" stroke-width="3" />
    <path d="M3 16H29" stroke="#FF963C" stroke-width="3" />
    <path d="M3 24H29" stroke="#FF963C" stroke-width="3" />
  </SvgIcon>
);

export default Menu;
