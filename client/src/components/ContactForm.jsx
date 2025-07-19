import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Button, Form as BootstrapForm } from 'react-bootstrap';
import FormField from './FormField';

// Validation schema using Yup
const ContactSchema = Yup.object().shape({
  firstName: Yup.string()
    .matches(/^[A-Za-z]+$/, 'First name must contain only letters')
    .required('First name is required'),

  lastName: Yup.string()
    .matches(/^[A-Za-z]+$/, 'Last name must contain only letters')
    .required('Last name is required'),

  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),

  phone: Yup.string()
    .matches(/^\d{10}$/, 'Phone number must be exactly 10 digits')
    .required('Phone number is required'),

  address: Yup.string()
    .min(5, 'Address is too short')
    .required('Address is required'),
});


const ContactForm = ({ initialValues, onSubmit, buttonText }) => {
  const defaultValues = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
  };

  const finalInitialValues = initialValues || defaultValues;

  return (
    <Formik
      initialValues={finalInitialValues}
      enableReinitialize
      validationSchema={ContactSchema}
      onSubmit={(values, actions) => {
        // ✅ Send correct shape (no 'name')
        onSubmit(values, actions);
      }}
    >
      {({ isSubmitting, isValid, dirty }) => (
        <Form as={BootstrapForm}>
          <FormField name="firstName" label="First Name" type="text" />
          <FormField name="lastName" label="Last Name" type="text" />
          <FormField name="email" label="Email" type="email" />
          <FormField name="phone" label="Phone Number" type="text" />
          <FormField name="address" label="Address" type="text" />

          <Button
            variant="primary"
            type="submit"
            disabled={isSubmitting || !isValid || !dirty}
          >
            {buttonText}
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
