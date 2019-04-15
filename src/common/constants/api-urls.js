export const API_PREFIX = `${GLOBAL_SETTINGS.apiServer}${GLOBAL_SETTINGS.apiPath}`;

const api = {
  CURRENT_USER: `${API_PREFIX}/current-user`,
  LOAD_USERS_LIST: `${API_PREFIX}/users-list`
};

export default api;
