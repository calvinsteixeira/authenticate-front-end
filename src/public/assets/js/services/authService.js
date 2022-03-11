const { default: axios } = require("axios")

async function login(credentials) {
  const apiUrl = ''
  const result = await axios.post(apiUrl, credentials).then(res => {
    return res
  }).catch(err => {
    return err
  })
  return result
}

module.exports = {
  login
}