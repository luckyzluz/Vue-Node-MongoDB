import axios from 'axios'
function get (_url, _params) {
  _params = _params || {}
  return new Promise((resolve, reject) => {
    axios.get(_url, {_params})
      .then(res => {
        if (res.status === 200) {
          resolve(res.data)
        }
      })
      .catch(error => {
        reject(error)
      }
      )
  })
}
export default get
// export function post (_url, _params) {
//   _params = _params || {}
//   return new Promise((resolve, reject) => {
//     axios.post(_url, {_params})
//       .then(res => {
//         if (res.status === 200) {
//           resolve(res.data)
//         }
//       })
//       .catch(error => {
//         reject(error)
//       }
//       )
//   })
// }
