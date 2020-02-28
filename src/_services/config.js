export const APIS = {
  baseUrl: 'https://m-pension-api.herokuapp.com',
  login: {
    method: 'POST',
    path: '/api/auth/login',
  },
  changePassword: {
    method: 'POST',
    path: '/api/auth/password/reset',
  },
  createPasswordToken: {
    method: 'POST',
    path: '/api/auth/password/create/mobile',
  },
  getCredentials: {
    method: 'POST',
    path: '/api/client/get-credentials',
  },
  dashboard: {
    method: 'GET',
    path: '/api/client/dashboard',
  },
  getContributions: {
    method: 'GET',
    path: (start, end) =>
      `/api/client/contributions?start_date=${start || ''}&end_date=${end ||
        ''}`,
  },
  getStatement: {
    method: 'GET',
    path: (start, end) =>
      `/api/client/rsa-statement?start_date=${start || ''}&end_date=${end ||
        ''}`,
  },
  createRequest: {
    method: 'POST',
    path: '/api/client/requests',
  },
  getLocations: {
    method: 'GET',
    path: state => `/api/client/office-locations?state=${state || ''}`,
  },
  getEnquiry: {
    method: 'GET',
    path: type => `/api/client/enquiries?q=${type}`,
  },
  calcPension: {
    method: 'POST',
    path: '/api/client/pension-calculator',
  },
  editProfile: {
    method: 'POST',
    path: '/api/client/profile',
  },
};

export const toastDefault = {
  buttonText: 'Okay',
  duration: 4000,
  position: 'bottom',
};
