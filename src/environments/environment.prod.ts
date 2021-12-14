export const environment = {
  production: true,
  //host : "http://192.168.0.173:8443/api/",
  host : "https://www.bayat-catering.tech:8443/api/",
  oidcConfig: {
    client_id: '0oa35fxqaaqiE5MFm5d7',
    server_host: 'https://dev-60426199.okta.com/oauth2/default',
    redirect_url: window.location.origin + '/callback',
    end_session_redirect_url: window.location.origin + '/logout',
    scopes: 'openid profile',
    pkce: true,
    audience: 'api://default'
  },
  scheme: '.okta.dev-60426199:/'
};
