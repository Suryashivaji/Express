import express from "express"
import UserController from "../controller/user.js"


const route =express.Router()

route.get('/',UserController.getAllUser)

route.get('/:id',UserController.getUserBYId)
route.post('/',UserController.addUsers)
route.put('/:id',UserController.editUserById)
route.delete('/:id',UserController.deletUserById)

export default route
