import { ApplicantInterface } from 'interfaces/applicant';
import { JobInterface } from 'interfaces/job';
import { GetQueryInterface } from 'interfaces';

export interface OfferInterface {
  id?: string;
  offer_date: any;
  start_date: any;
  salary: number;
  applicant_id: string;
  job_id: string;
  created_at?: any;
  updated_at?: any;

  applicant?: ApplicantInterface;
  job?: JobInterface;
  _count?: {};
}

export interface OfferGetQueryInterface extends GetQueryInterface {
  id?: string;
  applicant_id?: string;
  job_id?: string;
}
