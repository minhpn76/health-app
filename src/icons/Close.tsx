import {SvgIcon, SvgIconProps} from '@mui/material';

const Close = (props: SvgIconProps) => (
  <SvgIcon {...props}>
    <rect opacity="0.01" width="32" height="32" fill="#FF963C" />
    <path d="M7 7L26 26" stroke="#FF963C" strokeWidth="3" />
    <path d="M7 26L26 7" stroke="#FF963C" strokeWidth="3" />
  </SvgIcon>
);

export default Close;
