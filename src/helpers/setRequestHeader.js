export function setRequestHeader (requestInstance, requestHeader, token) {
   return requestInstance.defaults.headers.common[requestHeader] = 'Bearer ' + token
}