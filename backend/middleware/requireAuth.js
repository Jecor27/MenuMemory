import jwt from 'jsonwebtoken'
import User from '../models/userModel.js'


const reqireAuth = async (req, res, next) => {
    const {authorization} = req.headers
    if (!authorization) {
        return res.status(401).json({error: 'Authorization token required'})
    }
    //verify auth
    const token = authorization.split(' ')[1]
    try{
        const {_id} = jwt.verify(token, process.env.SECRET)
        req.user = await User.findOne({_id}).select('_id')
        next()
    }catch (error) {
        return res.status(401).json({error: 'Request is not authorized'})
    }
}
export default reqireAuth