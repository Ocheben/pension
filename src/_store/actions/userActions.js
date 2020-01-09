import {USERCONSTANTS} from '../constants';
import {APIS, requestJwt} from '../../_services';

const {
  SET_DASHBOARD,
  SET_LOADING,
  SET_CONTRIBUTIONS,
  SET_LOCATIONS,
  SET_ACC_BAL,
  SET_OFFICER,
} = USERCONSTANTS;
const actionCreator = (type, payload) => ({type, payload});

export const getDash = jwt => {
  const {
    baseUrl,
    dashboard: {method, path},
  } = APIS;
  const url = `${baseUrl}${path}`;
  return async dispatch => {
    dispatch(actionCreator(SET_LOADING, 'dashboard'));
    const response = await requestJwt(method, url, {}, jwt);
    console.log(response)
    if (response.user) {
      dispatch(actionCreator(SET_DASHBOARD, response));
    }
    dispatch(actionCreator(SET_LOADING, ''));
  };
};

export const getContri = jwt => {
  const {
    baseUrl,
    getContributions: {method, path},
  } = APIS;
  const url = `${baseUrl}${path}`;
  return async dispatch => {
    dispatch(actionCreator(SET_LOADING, 'contributions'));
    const response = await requestJwt(method, url, {}, jwt);
    console.log(url, response);
    if (response.contributions) {
      dispatch(actionCreator(SET_CONTRIBUTIONS, response.contributions));
    }
    dispatch(actionCreator(SET_LOADING, ''));
  };
};

export const getLocations = jwt => {
  const {
    baseUrl,
    getLocations: {method, path},
  } = APIS;
  const url = `${baseUrl}${path}`;
  return async dispatch => {
    dispatch(actionCreator(SET_LOADING, 'locations'));
    const response = await requestJwt(method, url, {}, jwt);
    console.log(url, response);
    if (response.offices) {
      dispatch(actionCreator(SET_LOCATIONS, response.offices));
    }
    dispatch(actionCreator(SET_LOADING, ''));
  };
};

export const getAccBal = jwt => {
  const {
    baseUrl,
    getEnquiry: {method, path},
  } = APIS;
  const url = `${baseUrl}${path('account_balance')}`;
  return async dispatch => {
    dispatch(actionCreator(SET_LOADING, 'accountBalance'));
    const response = await requestJwt(method, url, {}, jwt);
    console.log(url, response);
    if (response.data) {
      dispatch(actionCreator(SET_ACC_BAL, response.data));
    }
    dispatch(actionCreator(SET_LOADING, ''));
  };
};

export const getOfficer = jwt => {
  const {
    baseUrl,
    getEnquiry: {method, path},
  } = APIS;
  const url = `${baseUrl}${path('account_officer')}`;
  return async dispatch => {
    dispatch(actionCreator(SET_LOADING, 'accountOfficer'));
    const response = await requestJwt(method, url, {}, jwt);
    console.log(url, response);
    if (response.data) {
      dispatch(actionCreator(SET_OFFICER, response.data));
    }
    dispatch(actionCreator(SET_LOADING, ''));
  };
};
