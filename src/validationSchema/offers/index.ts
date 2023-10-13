import * as yup from 'yup';

export const offerValidationSchema = yup.object().shape({
  offer_date: yup.date().required(),
  start_date: yup.date().required(),
  salary: yup.number().integer().required(),
  applicant_id: yup.string().nullable().required(),
  job_id: yup.string().nullable().required(),
});
