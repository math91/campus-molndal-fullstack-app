import Axios from 'axios'

const productionAPI = 'https://campus-e-app.herokuapp.com'
const developmentAPI = 'http://localhost:3001'

const E_COMMERCE_API = Axios.create({
    baseURL: productionAPI
})

export default E_COMMERCE_API