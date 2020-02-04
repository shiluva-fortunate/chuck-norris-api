const axios = require('axios').default;

/**
 * Fetches data from the Chuck Norris API
 * 
 * @param {String} path - API path to get data from
 * @returns {Promise}
 */
export const getData = (path) => {
    const url = `https://api.chucknorris.io/jokes/${path}`;
    return axios.get(url);
};

/**
 * Checks if object is a promise.
 * 
 * @param {Object} obj - Object to test if it is a promise.
 * @returns {Boolean}
 */
export const isPromise = (obj) => {
    return obj instanceof Promise;
}