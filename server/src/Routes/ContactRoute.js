import express  from 'express'
import {postData} from '../Controllers/ContactController.js'
const router = express.Router()


router.route('/').post(postData)





export default router