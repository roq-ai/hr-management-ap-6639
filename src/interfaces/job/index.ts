import { ApplicantInterface } from 'interfaces/applicant';
import { InterviewInterface } from 'interfaces/interview';
import { OfferInterface } from 'interfaces/offer';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface JobInterface {
  id?: string;
  title: string;
  description: string;
  requirements: string;
  salary: number;
  company_id: string;
  created_at?: any;
  updated_at?: any;
  applicant?: ApplicantInterface[];
  interview?: InterviewInterface[];
  offer?: OfferInterface[];
  company?: CompanyInterface;
  _count?: {
    applicant?: number;
    interview?: number;
    offer?: number;
  };
}

export interface JobGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  description?: string;
  requirements?: string;
  company_id?: string;
}
