import axios from 'axios'

export default() => {
  return axios.create({
    baseURL: 'https://foodhub-api-staging.herokuapp.com/'
  })
}
