const API_URL = process.env.API_URL || `${window.location.protocol}//${window.location.host}/api/`;
export const NODE_ENV = process.env.NODE_ENV ? process.env.NODE_ENV.toUpperCase() : 'DEVELOPMENT';
export const BASE_URL = NODE_ENV === 'DEVELOPMENT' ? 'https://5d02323c9ce12c0014e0f38b.mockapi.io/api/v1/' : API_URL;
