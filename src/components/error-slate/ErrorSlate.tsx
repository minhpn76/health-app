import {Typography, FormHelperText, styled} from '@mui/material';
import {useEffect} from 'react';
import {UseFormSetError} from 'react-hook-form';

type ErrorSlateProps = {
  error?: any;
  errorMessages?: string | string[];
  setError?: UseFormSetError<any>;
};

const StyledFormHelperText = styled(FormHelperText)(({theme, error}) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: 0.5,
  marginTop: theme.spacing(1),
  paddingBlock: theme.spacing(1),
  paddingInline: theme.spacing(2),
  color: error ? theme.palette.error.main : 'inherit',
}));

/** handling server side validation */
const ErrorSlate = (props: ErrorSlateProps) => {
  const {error, errorMessages, setError} = props;

  useEffect(() => {
    if (setError && error && error.validationError) {
      Object.entries(error.validationError).forEach(([key, value]) => {
        setError(
          key,
          {message: Array.isArray(value) ? value.join(' ') : String(value)},
          {shouldFocus: true}
        );
      });
    }
  }, [error, setError]);

  // convert error messages to string array or undefined
  const errorMsgs =
    errorMessages && errorMessages !== ''
      ? typeof errorMessages === 'string'
        ? [errorMessages]
        : errorMessages
      : undefined;

  console.log('error', error?.response?.data?.message);

  return (
    <>
      {error && (
        <StyledFormHelperText error={error}>
          <Typography variant="label">
            {' '}
            {error?.response?.data?.message || error.message}
          </Typography>
        </StyledFormHelperText>
      )}
      {errorMsgs && (
        <StyledFormHelperText error={errorMsgs.length > 0}>
          <>
            {errorMsgs.map((msg, index) => (
              <Typography key={index} variant="label">
                {msg}
              </Typography>
            ))}
          </>
        </StyledFormHelperText>
      )}
    </>
  );
};

export default ErrorSlate;
