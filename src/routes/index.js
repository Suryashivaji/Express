import  express  from "express";
import IndexController from "../controller/index.js"
import UserRoute from "../routes/user.js"


const route = express.Router()

route.get('/',IndexController.homePage)

route.use('/user',UserRoute)

export default route