const config = {
  name: 'DentalHuset Uber Admin',
  storageKey: 'uber-admin',
  server: {
    dev: {
      url: 'http://localhost:8000.com/api'
    },
    prod: {
      url: 'https://example.com.com/api'
    }
  },
  getApi(item = 'url') {
    let server = (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') ? 'dev' : 'prod';

    return this.server[server][item];
  },
};

export default config;