import { Field, Form, Formik } from 'formik';
import React from 'react';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { addNewPost } from '../../store/actions/actionCreators';

const NewPostForm: React.FC = () => {
    const dispatch = useDispatch();

    const submitForm = (values) => {
        dispatch(addNewPost(values));
    };

    return (
        <>
            <Formik
                initialValues={{
                    title: '',
                    body: '',
                }}
                onSubmit={submitForm}
            >
                {() => {
                    return (
                        <Form>
                            <Field component="input" type="text" name="title" placeholder="Post Title" required />
                            <Field component="textarea" name="body" placeholder="Post Body" rows="20" required />
                            <Button btnType="submit" text="Create post" />
                        </Form>
                    );
                }}
            </Formik>
        </>
    );
};

export default NewPostForm;
