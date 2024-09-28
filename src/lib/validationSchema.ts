import * as Yup from 'yup'

export const validationSchema = Yup.object().shape({
  firstname: Yup.string()
    .min(2, 'Firstname should be at least 2 characters long')
    .required('Firstname is required'),
  lastname: Yup.string()
    .min(2, 'Lastname should be at least 2 characters long')
    .required('Lastname is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  phone: Yup.string()
    .matches(/^[0-9]{10,15}$/, 'Phone must be a valid number')
    .required('Phone number is required'),
  message: Yup.string()
    .min(2, 'Message should be at least 2 characters long')
    .required('Message is required'),
})
