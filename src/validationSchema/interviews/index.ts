import * as yup from 'yup';

export const interviewValidationSchema = yup.object().shape({
  interview_date: yup.date().required(),
  interviewer: yup.string().required(),
  applicant_id: yup.string().nullable().required(),
  job_id: yup.string().nullable().required(),
});
