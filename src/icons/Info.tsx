import {SvgIcon, SvgIconProps} from '@mui/material';

const Info = (props: SvgIconProps) => (
  <SvgIcon {...props}>
    <rect opacity="0.01" width="32" height="32" fill="#FF963C" />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M28.5 25.2975H16.0722L8.07178 31V25.2975H3.5V3H28.5V25.2975H28.5ZM26.2142 5.27186H5.78577V23.0256H10.3576V26.5755L15.3374 23.0256H26.2142V5.27186ZM17.3634 13.391V19.9249H14.7335V13.391H17.3634ZM16.048 11.4314C16.9555 11.4314 17.6913 10.6998 17.6913 9.79798C17.6913 8.896 16.9555 8.16444 16.048 8.16444C15.1405 8.16444 14.4044 8.89601 14.4044 9.79798C14.4044 10.6998 15.1405 11.4314 16.048 11.4314Z"
      fill="#FF963C"
    />
  </SvgIcon>
);

export default Info;
