// import { Password } from "@mui/icons-material";
import { useFormik } from "formik";
import * as yup from "yup";

const formValidationSchema = yup.object({
  email: yup
    .string()
    .email()
    .required(" why not fill this email?")
    .min(12, "need a bigger email"),
  password: yup
    .string()
    .required(" why not fill this password?")
    .min(8, "need a bigger email")
    .max(12, "too much password"),
});

export function BasicForm() {
  const { handleSubmit, handleChange, handleBlur, values, touched, errors } =
    useFormik({
      initialValues: { email: "", Password: "" },
      validationSchema: formValidationSchema,
      onSubmit: (values) => console.log("form values", values),
    });
  return (
    <form onSubmit={handleSubmit}>
      <input
        name="email"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.email}
        type="email"
        placeholder="email"
      />
      {touched.email && errors.email ? errors.email : null}
      <input
        name="password"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.password}
        type="password"
        placeholder="password"
      />
      {touched.password && errors.password ? errors.password : null}
      <button type="submit">submit</button>
    </form>
  );
}
