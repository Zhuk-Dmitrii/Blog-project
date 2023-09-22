export function calcSum (a, b) {
   return a + b
}

export function rgb (r, g, b) {
   if (r < 0 || g < 0 || b < 0) return null
   if (r > 255 || g > 255 || b > 255) return null
   
   return `rgb(${r}, ${g}, ${b})`
}

export function filterPositiveNumbers (arr) {
   const set = new Set(arr)
   const positiveNumber = [...set].filter((item) => {
      return item >= 0
   })

   return positiveNumber
}

export function transformString (str) {
   const newStr = str.trim()
   const arr = newStr.split(' ').map((item) => {
      return item[0].toUpperCase() + item.slice(1)
   })

   return arr.join(' ')
}