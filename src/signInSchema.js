import * as Yup from 'yup';

export const signInSchema = Yup.object().shape({
    email: Yup.string().email().required("Email is required"),
    password: Yup.string().required("Password is required").min(6, "Min of 6 characters required")
});
