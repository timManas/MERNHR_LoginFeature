import asyncHandler from 'express-async-handler'
import generateToken from './generateToken.js'
import User from './userModel.js'

// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public
const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body // Fetch the request from the body
  
    const user = await User.findOne({ email }) // Finds email
  
    // Check if user exist via password
    if (user && (await user.matchPassword(password))) {
      // user.matchPassword is from UserSchema using bcrypt
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user._id)
      })
    } else {
      res.status(401)
      throw new Error('Invalid email or password')
    }
  })




// @desc    Get User Profile
// @route   GET /api/users/profile
// @access  Private
const getUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id)
  
    if (user) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
      })
    } else {
      res.status(404)
      throw new Error('User Not Found')
    }
  })


  export {
    authUser,getUserProfile
}