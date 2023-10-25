import * as Yup from 'yup';



export const step1ValidationSchema = Yup.object().shape({
  firstName: Yup.string()
    .required('First name is required'),

  lastName: Yup.string()
    .required('Last name is required'),

  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),

  phone: Yup.string()
    .matches(/^\d{10}$/, 'Phone number must be 10 digits')
    .required('Phone number is required'),
  address: Yup.string()
    .required('Address is required'),

  city: Yup.string()
    .required('City is required'),

  state: Yup.string()
    .required('State is required'),
});

export const step2ValidationSchema = Yup.object().shape({

  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),

 
});
export const step3ValidationSchema = Yup.object().shape({
  slackID: Yup.string()
    .required('First name is required'),
    twitterLink: Yup.string()
    .required('twitter link is required'),
    githubLink: Yup.string()
    .required('github link is required'), 
});

