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
    path: '/api/auth/password/create',
  },
  dashboard: {
    method: 'GET',
    path: '/api/client/dashboard',
  },
  getContributions: {
    method: 'GET',
    path: '/api/client/contributions',
  },
  createRequest: {
    method: 'POST',
    path: '/api/client/requests',
  },
  getLocations: {
    method: 'GET',
    path: '/api/client/office-locations',
  },
  getEnquiry: {
    method: 'GET',
    path: type => `/api/client/enquiries?q=${type}`,
  },
};

export const toastDefault = {
  buttonText: 'Okay',
  duration: 4000,
  position: 'top',
};
