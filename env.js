let BASE_URL = 'https://api.workspace.sobrus.ovh/api';
const JOBS__URL =
  'public/jobs?jobName=&page=1&limit=100&order=desc&orderBy=updatedAt';
const DEPARTEMENTS__URL =
  'public/departments?departmentName=&page=1&limit=1000';
if (process.env.NEXT_PUBLIC_APP_ENV === 'production') {
  BASE_URL = 'https://api.workspace.sobrus.com/api';
}
export { BASE_URL, JOBS__URL, DEPARTEMENTS__URL };
