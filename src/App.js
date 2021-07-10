import "./App.css";
import { Formik } from "formik";
import { signInSchema } from "./signInSchema";
import { useState } from "react";

// Reference - https://www.smashingmagazine.com/2020/10/react-validation-formik-yup/#top

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const initialValues = {
    email: "",
    password: "",
  };

  const submitForm = (values, otheMethods) => {
    console.log("Form submitted", values);
    console.log("OtheMethods", otheMethods);
    otheMethods.resetForm();
    setIsSubmitted(true);
  };

  return (
    <div className="App">
      <Formik
        initialValues={initialValues}
        validationSchema={signInSchema}
        onSubmit={submitForm}
      >
        {(formik) => {
          console.log("formik Object", formik);
          const {
            values,
            handleChange,
            handleSubmit,
            dirty,
            isValid,
            errors,
            touched,
            handleBlur,
            handleReset,
          } = formik;

          return (
            <div className="form-wrapper">
              <h2>Sign In Form</h2>
              <form onReset={handleReset} onSubmit={handleSubmit}>
                <div>
                  <label>Email :</label>
                  <input
                    name="email"
                    type="email"
                    value={values.email}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  <div>
                    {errors.email && touched.email && (
                      <span>{errors.email}</span>
                    )}
                  </div>
                </div>
                <div>
                  <label>Password :</label>
                  <input
                    name="password"
                    type="password"
                    value={values.password}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  <div>
                    {errors.password && touched.password && (
                      <span>{errors.password}</span>
                    )}
                  </div>
                </div>
                <div className="btn-wrapper">     
                <button className="submit" type="submit" disabled={!(dirty && isValid)}>
                  Sign In
                </button>
                <button className="reset" type="reset">Reset</button>
                </div>
              </form>
              {isSubmitted && <span>Form Submitted</span>}
            </div>
          );
        }}
      </Formik>
    </div>
  );
}

export default App;
