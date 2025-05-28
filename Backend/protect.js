import jwt from 'jsonwebtoken'
import User from './Model/User.js'


const protect = async (req, res, next) => {

    let token = req.cookies.token
    try {

   if(token){
        const decoded = jwt.verify(token, "123abc")

        req.user = await User.findById(decoded.userId).select('-password');
        next();
    }
      
    } catch (error) {

        console.log(error)     
    }

   
}


export default protect;