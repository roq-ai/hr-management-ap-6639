import { ApplicantInterface } from 'interfaces/applicant';
import { JobInterface } from 'interfaces/job';
import { GetQueryInterface } from 'interfaces';

export interface InterviewInterface {
  id?: string;
  interview_date: any;
  interviewer: string;
  applicant_id: string;
  job_id: string;
  created_at?: any;
  updated_at?: any;

  applicant?: ApplicantInterface;
  job?: JobInterface;
  _count?: {};
}

export interface InterviewGetQueryInterface extends GetQueryInterface {
  id?: string;
  interviewer?: string;
  applicant_id?: string;
  job_id?: string;
}
