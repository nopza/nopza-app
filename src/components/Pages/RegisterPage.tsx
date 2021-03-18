import * as React from "react";
import { Button } from "@material-ui/core";
import { Field, Form, Formik } from "formik";
import MyField from "../Fragments/MyField";

interface Values {
  firstName: string;
  lastName: string;
  email: string;
}

interface Props {
  onSubmit: (values: Values) => void;
}

const RegisterPage: React.FC<Props> = ({ onSubmit }) => {
  return (
    <div>
      <h1>RegisterPage</h1>
      <Formik
        initialValues={{ firstName: "", lastName: "", email: "" }}
        onSubmit={(values) => {
          onSubmit(values);
        }}
      >
        {({ values }) => (
          <Form>
            <div>
              <Field
                name="firstName"
                placeholder="first name"
                component={MyField}
              />
            </div>
            <div>
              <Field
                name="lastName"
                placeholder="last name"
                component={MyField}
              />
            </div>
            <div>
              <Field name="email" placeholder="email" component={MyField} />
            </div>
            <Button type="submit">sumbit</Button>
            <pre>{JSON.stringify(values, null, 2)}</pre>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterPage;
