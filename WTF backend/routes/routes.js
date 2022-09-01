const { Router } = require('express')
const routes = Router();
const { userRegistration, userLogin } = require('./userAuth')

routes.post('/signup', userRegistration);
routes.post('/login', userLogin)

module.exports = routes
