import { Formik, Form, Field, ErrorMessage } from 'formik';

const MockApiForm = ({ onSubmit }) => {
  const handleSubmit = async (values, actions) => {
    await onSubmit(values);
    actions.setSubmitting(false);
    actions.resetForm({
      values: {
        title: '',
        url: '',
      },
    });
  };

  return (
    <div>
      <Formik initialValues={{ title: '', link: '' }} onSubmit={handleSubmit}>
        {({ isSubmitting }) => (
          <Form>
            <label htmlFor="title">Title</label>
            <Field type="text" name="title" id="title" />
            <ErrorMessage name="title" component="div" />

            <label htmlFor="url">Link</label>
            <Field type="url" name="link" id="url" />
            <ErrorMessage name="link" component="div" />

            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default MockApiForm;
