import * as yup from 'yup';
import { Schema } from 'yup';
import { FormValues } from './values';

export const validationSchema: Schema<FormValues> = yup.object().shape({
  name: yup.string().required('The name is required.'),
  username: yup.string().required('The username is required.'),
  email: yup.string().email('Must be a valid email.').required('The email is required.'),
});
