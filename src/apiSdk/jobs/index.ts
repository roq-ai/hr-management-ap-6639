import queryString from 'query-string';
import { JobInterface, JobGetQueryInterface } from 'interfaces/job';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getJobs = async (query?: JobGetQueryInterface): Promise<PaginatedInterface<JobInterface>> => {
  return fetcher('/api/jobs', {}, query);
};

export const createJob = async (job: JobInterface) => {
  return fetcher('/api/jobs', { method: 'POST', body: JSON.stringify(job) });
};

export const updateJobById = async (id: string, job: JobInterface) => {
  return fetcher(`/api/jobs/${id}`, { method: 'PUT', body: JSON.stringify(job) });
};

export const getJobById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/jobs/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteJobById = async (id: string) => {
  return fetcher(`/api/jobs/${id}`, { method: 'DELETE' });
};
