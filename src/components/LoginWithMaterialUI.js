/** @format */

import * as Yup from "yup";
import { React } from "react";
import { useFormik, Form, FormikProvider, FieldArray, Formik } from "formik";

// material
import { Stack, TextField, Alert, Button, Typography } from "@material-ui/core";

// hooks
// ----------------------------------------------------------------------

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function LoginWithMaterialUI() {
  const ProfileSetupSchema = Yup.object().shape({
    title: Yup.string()
      .min(6, "Too Short!")
      .max(50, "Too Long!")
      .required("Album title required!"),
    digitaDate: Yup.string().min(10).max(10).required("Date required!"),
    officialDate: Yup.string().min(10).max(10).required("Date required!"),
  });

  const formik = useFormik({
    initialValues: {
      title: "",
      artistName: [],
    },
    validationSchema: ProfileSetupSchema,
    onSubmit: async (values, { setErrors, setSubmitting }) => {
      console.log("submitted");
    },
  });
  const {
    errors,
    touched,
    isSubmitting,
    getFieldProps,
    handleSubmit,
    values,
    handleChange,
  } = formik;

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <Typography variant="h5">Artist</Typography>
          <Typography>Put your album basic information</Typography>
          <TextField
            fullWidth
            label="Title of an album, single or EP"
            {...getFieldProps("title")}
            error={Boolean(touched.title && errors.title)}
            helperText={touched.title && errors.title}
          />

          <Typography variant="h5">Label</Typography>

          <TextField
            fullWidth
            label="Recorded Label"
            {...getFieldProps("recordedLabel")}
          />

          <TextField
            fullWidth
            label="Official Release Date"
            {...getFieldProps("officialDate")}
            error={Boolean(touched.officialDate && errors.officialDate)}
            helperText={touched.officialDate && errors.officialDate}
          />

          <Stack spacing={3} direction="row" justifyContent="space-between">
            <div />
            <div>
              <Button
                fullWidth
                size="large"
                type="submit"
                variant="contained"
                loading={isSubmitting}
              >
                Submit
              </Button>
            </div>
          </Stack>
        </Stack>
      </Form>
    </FormikProvider>
  );
}
