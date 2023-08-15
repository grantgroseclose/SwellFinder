import React from "react";
import { useFormikContext } from "formik";

import ErrorMessage from "./ErrorMessage";
import ImageInput from "../ImageInput";





const FormImagePicker = ({ name }) => {
    const { errors, setFieldValue, touched, values } = useFormikContext();
    const imageUri = values[name];

    const handleChange = (uri) => {
        setFieldValue(name, uri);
    };

    return (
        <>
            <ImageInput imageUri={imageUri} onChangeImage={(uri) => handleChange(uri)} />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    );
}





export default FormImagePicker;

