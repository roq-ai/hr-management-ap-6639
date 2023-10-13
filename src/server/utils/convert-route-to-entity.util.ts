const mapping: Record<string, string> = {
  applicants: 'applicant',
  companies: 'company',
  interviews: 'interview',
  jobs: 'job',
  offers: 'offer',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
