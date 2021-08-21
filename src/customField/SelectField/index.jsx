import React from "react";
import PropTypes from "prop-types";
import { FormFeedback, FormGroup, Label } from "reactstrap";
import Select from "react-select";
import { ErrorMessage } from "formik";

SelectField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    label: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    options: PropTypes.array,
};

SelectField.defaultProps = {
    label: "",
    placeholder: "",
    disabled: false,
    options: [],
};

function SelectField(props) {
    const { field, form, label, placeholder, disabled, options } = props;
    const { name, value } = field;
    const { errors, touched } = form;
    const showError = errors[name] && touched[name];
    const selectedOption = options.find((option) => option.value === value);

    const handleChange = (selectedOption) => {
        const selectedValue = selectedOption
            ? selectedOption.value
            : selectedOption;
        const event = {
            target: {
                name: name,
                value: selectedValue,
            },
        };
        field.onChange(event);
    };
    return (
        <FormGroup>
            {label && <Label for={name}>{label}</Label>}
            <Select
                id={name}
                {...field}
                placeholder={placeholder}
                options={options}
                isDisabled={disabled}
                onChange={handleChange}
                value={selectedOption}
                className={showError ? "is-invalid" : ""}
            ></Select>
            <ErrorMessage name={name} component={FormFeedback} />
        </FormGroup>
    );
}

export default SelectField;
