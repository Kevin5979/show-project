export const TIMEOUT = 10000;

const devBaseURL = "https://www.fastmock.site/mock/240fb6545de4c21f9bf4c98f693ba2d0/api";
const proBaseURL = "https://www.fastmock.site/mock/240fb6545de4c21f9bf4c98f693ba2d0/api";
// console.log(process.env.NODE_ENV); // development
export const baseURL = process.env.NODE_ENV === 'development' ? devBaseURL: proBaseURL;