import React from "react";
import { View } from 'react-native';
import { Formik } from "formik";




const AppForm = ({ style, initialValues, onSubmit, validationSchema, children }) => {
    return (
        <View style={style}>
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
            >
                {() => <>{children}</>}
            </Formik>
        </View>
    );
}


export default AppForm;
