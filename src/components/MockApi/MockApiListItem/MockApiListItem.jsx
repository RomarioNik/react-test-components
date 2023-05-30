import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Modal } from '../../Modal';

const MockApiListItem = ({ material: { title, link, id }, onDelete, onUpdate, error }) => {
  const [modal, setModal] = useState(false);

  const handleSubmit = async (values, actions) => {
    await onUpdate(values);
    actions.setSubmitting(false);
    toggleModal();
    actions.resetForm({
      values: {
        title: '',
        url: '',
      },
    });
  };

  const toggleModal = () => {
    setModal(prev => !prev);
  };

  return (
    <>
      <p>{title}</p>
      <p>{link}</p>
      <button type="button" onClick={toggleModal}>
        Update {id}
      </button>
      <button type="button" onClick={() => onDelete(id)}>
        Delete {id}
      </button>
      {modal && (
        <Modal onToggleModal={toggleModal}>
          <Formik initialValues={{ id: id, title: '', link: '' }} onSubmit={handleSubmit}>
            {({ isSubmitting }) => (
              <Form>
                <label htmlFor="id">ID</label>
                <Field type="text" name="id" id="id" values={id} disabled />
                <ErrorMessage name="id" component="div" />

                <label htmlFor="title">Update title</label>
                <Field type="text" name="title" id="title" />
                <ErrorMessage name="title" component="div" />

                <label htmlFor="link">Updata link</label>
                <Field type="url" name="link" id="link" />
                <ErrorMessage name="link" component="div" />

                <button type="submit" disabled={isSubmitting}>
                  Update
                </button>
                {error && <div>{error}</div>}
              </Form>
            )}
          </Formik>
        </Modal>
      )}
    </>
  );
};

export default MockApiListItem;
