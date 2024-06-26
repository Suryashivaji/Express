
import  mongoose from './index.js'

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const userSchema = new mongoose.Schema({
  name:{
    type:String,
    require:[true, "Name is required"]
  },
  email:{
    type:String,
    require:[true, "email is required"],
    validate:{
      validator:validateEmail,
      message: props => `${props.value} is not a valid email!`
    }
  },
 password:{
    type:String,
    require:[true, "password is required"] 
  },
  status:{
    type:Boolean,
    default:true
  },
 role:{
    type:String,
  default:"user"
  },
  createdAt:{
    type:Date, 
    default:Date.now()

  }
},
{
collection:'user',
versionKey:false
}
)

const UserModel = mongoose.model('user',userSchema)


export default UserModel;
