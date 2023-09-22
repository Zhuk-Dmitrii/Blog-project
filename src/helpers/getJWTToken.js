export function getJWTToken (nameToken) {
   const token = localStorage.getItem(nameToken)
   return token
}