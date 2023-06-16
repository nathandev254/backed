import express from 'express'
import { login,register } from "../controllers/authcontroller.js"

const AuthRouter = express.Router()

AuthRouter.route('/login').post(login)
AuthRouter.route('/register').post(register)

export default AuthRouter