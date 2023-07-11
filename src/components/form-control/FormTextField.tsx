import {TextField, TextFieldProps} from '@mui/material';
import {Control, Controller, Path} from 'react-hook-form';

type FormTextFieldProps<TFormValues extends object> = Omit<
  TextFieldProps,
  'name'
> & {
  name: Path<TFormValues>;
  control: Control<TFormValues>;
};

const FormTextField = <TFormValues extends object>(
  props: FormTextFieldProps<TFormValues>
) => {
  const {control, name, helperText, ...restProps} = props;

  return (
    <Controller<TFormValues>
      name={name}
      control={control}
      render={({field, fieldState}) => (
        <TextField
          error={!!fieldState.error?.message}
          helperText={fieldState.error?.message || helperText}
          {...restProps}
          {...field}
        />
      )}
    />
  );
};

export default FormTextField;
