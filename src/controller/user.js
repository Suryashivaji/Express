import UserModel from '../models/user.js'
import dotenv from 'dotenv'

dotenv.config()
const getAllUser =async(req,res)=>{ 
  try {
    let users = await UserModel.find()

    res.status(200).send({
      massage:"Data fecthed sucessfully",
      users
    })
    
  } catch (error) {
    
  }
}

const addUsers=async(req,res)=>{ 
  try {

  const user= await UserModel.findOne({email:req.body.email})

if(!user)
{
 //if email is not found create a email then create new users
  let newUser =await UserModel.create(req.body)
  res.status(200).send({
    massage:"User Added sucessfully"
   
  })

}else{
 
  res.status(400).send({
  massage:`user with ${req.body.email} is already exist` 

  })

}
 
  } catch (error) {
    res.status(500).send({
      massage:"internel surver error",
      error
     
    })
  }
}

const getUserBYId =async(req,res)=>{ 
 try {
  
    let users = await UserModel.findById({_id:req.params.id})

    res.status(200).send({
      massage:"Data fecthed sucessfully",
      users
    })
    
  } catch (error) {
    

  }
}

const  editUserById =async(req,res)=>{
  try {

    let user = await UserModel.findById({_id:req.params.id})
if(user){
            
  user.name=req.body.name
  user.email=req.body.email
  user.password=req.body.password
  user.status=res.body.status
  user.role=res.body.role
  
user.save()


}
   else{
      res.status(400).send({
        massage:"Inviled user id",

       
      })
    }

    
  } catch (error) {
    res.status(500).send({
      massage:"internel surver error",
      error:error.massage
     
    })
  }
}
const deletUserById=async(req,res)=>{
  try {
    let user = await UserModel.findById({_id:req.params.id})

    if(user){

      await UserModel.deleteOne({_id:req.params.id})
      res.status(200).send({
        message:"user deleted successfully"
      })

    }

  else{
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