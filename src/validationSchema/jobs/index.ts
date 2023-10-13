import * as yup from 'yup';

export const jobValidationSchema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().required(),
  requirements: yup.string().required(),
  salary: yup.number().integer().required(),
  company_id: yup.string().nullable().required(),
});
