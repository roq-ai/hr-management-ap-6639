import { InterviewInterface } from 'interfaces/interview';
import { OfferInterface } from 'interfaces/offer';
import { JobInterface } from 'interfaces/job';
import { GetQueryInterface } from 'interfaces';

export interface ApplicantInterface {
  id?: string;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  resume: string;
  job_id: string;
  created_at?: any;
  updated_at?: any;
  interview?: InterviewInterface[];
  offer?: OfferInterface[];
  job?: JobInterface;
  _count?: {
    interview?: number;
    offer?: number;
  };
}

export interface ApplicantGetQueryInterface extends GetQueryInterface {
  id?: string;
  first_name?: string;
  last_name?: string;
  email?: string;
  phone_number?: string;
  resume?: string;
  job_id?: string;
}
