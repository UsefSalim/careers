let BASE_URL = 'https://api.workspace.sobrus.ovh/api';
if (process.env.NEXT_PUBLIC_APP_ENV === 'production') {
  BASE_URL = 'https://api.workspace.sobrus.com/api';
}
export { BASE_URL };
