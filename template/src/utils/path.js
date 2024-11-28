const baseurlProduction = 'https://boilerplate.siskasoftware.com/api/'; // Change base url with your url
const baseurlDevelopment = 'https://baseurl-development.com/api/';
const asseturlProduction = 'https://baseurl-production.com/assets/';
const asseturlDevelopment = 'https://baseurl-development.com/assets/';

export const baseurl = global.env === "production" ? baseurlProduction : baseurlDevelopment;
export const asseturl = global.env === "production" ? asseturlProduction : asseturlDevelopment;