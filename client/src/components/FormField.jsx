import { Form } from 'react-bootstrap';
import { useField } from 'formik';

const FormField = ({ name, label, type = 'text', ...props }) => {
  const [field, meta] = useField(name);

  return (
    <Form.Group className="mb-3" controlId={`form-${name}`}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type={type}
        {...field}
        {...props}
        isValid={meta.touched && !meta.error}
        isInvalid={meta.touched && !!meta.error}
      />
      <Form.Control.Feedback type="invalid">
        {meta.error}
      </Form.Control.Feedback>
      <Form.Control.Feedback type="valid">
        Looks good!
      </Form.Control.Feedback>
    </Form.Group>
  );
};

export default FormField;
