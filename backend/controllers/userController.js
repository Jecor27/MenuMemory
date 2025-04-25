import User from '../models/userModel.js'

//login user
const loginUser = async (req, res) => {
    res.json({mssg: 'login user'})
}

//signup user

const signupUser = async (req, res) => {
    res.json({mssg: 'signup user'})
}

export default { signupUser, loginUser }