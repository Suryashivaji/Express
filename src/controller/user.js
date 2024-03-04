import {findIndex} from '../common/helper.js'
const user =[{
  id:1,
  name:"surya",
  email:"surya@gamil.com",
  passwors:"123",
  status:true,
  role:"user",
}
]

const getAllUser =(req,res)=>{
  try {

    res.status(200).send({
      massage:"Data fecthed sucessfully",
      user
    })
    
  } catch (error) {
    
  }
}

const addUsers=(req,res)=>{
  try {
  let id = Array.length?user[user.length-1].id+1:1
  req.body.id=id
  user.push(req.body)

    res.status(200).send({
      massage:"User Added sucessfully",
     
    })
    
  } catch (error) {
    res.status(500).send({
      massage:"internel surver error",
     
    })
  }
}

const getUserBYId =(req,res)=>{
  try {

    const {id} =req.params
    let index = findIndex(user,id)
    if(index!==-1)
    {
      res.status(200).send({
        massage:"Data fecthed sucessfully",
        user:user[index]
      })

    } else{
      res.status(400).send({
        massage:"Inviled user id",
       
      })
    }

    
  } catch (error) {
    res.status(500).send({
      massage:"internel surver error",
     
    })
  }
}
const  editUserById =(req,res)=>{
  try {

    const {id} =req.params
    let index = findIndex(user,id)
    if(index!==-1)
    {

      req.body.id=Number(id)
      user.splice(index,1,req.body)


      res.status(200).send({
        massage:"User Edited sucessfully",
       
      })

    } else{
      res.status(400).send({
        massage:"Inviled user id",
       
      })
    }

    
  } catch (error) {
    res.status(500).send({
      massage:"internel surver error",
     
    })
  }
}
const deletUserById=(req,res)=>{
  try {

    const {id} =req.params
    let index = findIndex(user,id)
    if(index!==-1)
    {
      user.splice(index,1)
      res.status(200).send({
        massage:"User Deleted sucessfully",
     
      })

    } else{
      res.status(400).send({
        massage:"Inviled user id",
       
      })
    }

    
  } catch (error) {
    res.status(500).send({
      massage:"internel surver error",
     
    })
  }
}

export default{getAllUser,getUserBYId,addUsers,editUserById,deletUserById}