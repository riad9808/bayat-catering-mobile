
export const environment = {
  host : "https://www.bayat-catering.tech:8443/api/",

  production: true,
  oidcConfig: {
    client_id: '0oa35fxqaaqiE5MFm5d7',
    server_host: 'https://dev-60426199.okta.com/oauth2/default',
    //redirect_url:  window.location.origin + '/callback',
    redirect_url:   'com.bayat.mobile:/callback',

    end_session_redirect_url: window.location.origin + '/logout',
    scopes: 'openid profile',
    pkce: true,
    audience: 'api://default'
  },
  scheme: 'com.bayat.mobile'
};
