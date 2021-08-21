import React from "react";
import PropTypes from "prop-types";
import { Button, FormGroup, Spinner } from "reactstrap";
import { PHOTO_CATEGORY_OPTIONS } from "constants/global";
import { FastField, Form, Formik } from "formik";
import InputField from "customField/InputField";
import SelectField from "customField/SelectField";
import RandomPhotoField from "customField/RandomPhotoField";
import * as Yup from "yup";

PhotoForm.propTypes = {
    onSubmit: PropTypes.func,
    initValue: PropTypes.object,
    isAddMode: PropTypes.bool,
};

PhotoForm.defaultProps = {
    onSubmit: null,
    initValue: null,
    isAddMode: true,
};

function PhotoForm(props) {
    const { initValue, isAddMode } = props;

    const validationSchema = Yup.object().shape({
        title: Yup.string().required("This field is required"),
        category: Yup.number().required("This field is required").nullable(),
        photo: Yup.string().required("This field is required"),
    });

    const { onSubmit } = props;
    return (
        <div>
            <Formik
                initialValues={initValue}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {(formikProps) => {
                    const { isSubmitting } = formikProps;
                    return (
                        <Form>
                            <FastField
                                name="title"
                                component={InputField}
                                label="Title"
                                placeholder="Eg: wow nature..."
                            />
                            <FastField
                                name="category"
                                component={SelectField}
                                label="Category"
                                placeholder="What's your photo category"
                                options={PHOTO_CATEGORY_OPTIONS}
                            />
                            <FastField
                                name="photo"
                                component={RandomPhotoField}
                                label="Photo"
                            />

                            <FormGroup>
                                <Button type="submit" color="primary">
                                    {isSubmitting && <Spinner size="sm" />}
                                    {isAddMode ? "Add photo" : "Update photo"}
                                </Button>
                            </FormGroup>
                        </Form>
                    );
                }}
            </Formik>
        </div>
    );
}

export default PhotoForm;
