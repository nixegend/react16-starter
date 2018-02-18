import config from '../../../app-settings';

export const API_SERVER = `http://${config.serverHost}:${config.serverPort}${config.apiUrl}`;

export const USERS_URL_PART = 'users';

export const LOAD_USERS_LIST = `${API_SERVER}/${USERS_URL_PART}`;
