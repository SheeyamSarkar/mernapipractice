const asyncHandler = require('express-async-handler')

const Goal = require('../modals/goalModal')
const User = require('../modals/userModal')

const getGoal =asyncHandler(async (req,res) => {
    const goals =await Goal.find({ user: req.user.id })

    res.status(200).json(goals)
})

const setGoal =asyncHandler(async (req,res) => {
    
    if(!req.body.text){
        res.status(400)
        throw new Error('Please Add a Text Field')
    }

    const goal = await Goal.create({
        text: req.body.text,
        user: req.user.id
    })
    res.status(200).json(goal)
})

const updateGoal =asyncHandler(async (req,res) => {
    const goal = await Goal.findById(req.params.id)

    if(!goal){
        res.status(400)
        throw new Error('Goal Not Found')
    }

    const user = await User.findById(req.user.id)
    //User Check
    if(!user){
        res.status(401)
        throw new Error('User Not Found')
    }

    //make shure the login user matches the goal user
    if(goal.user.toString() !== user.id){
        res.status(401)
        throw new Error('User Not Authorizes')
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.
        body, {
            new: true,
        })

    res.status(200).json(updatedGoal)
})

const deleteGoal =asyncHandler(async (req,res) => {
    const goal = await Goal.findById(req.params.id)

    if(!goal){
        res.status(400)
        throw new Error('Goal Not Found')
    }

    const user = await User.findById(req.user.id)
    //User Check
    if(!user){
        res.status(401)
        throw new Error('User Not Found')
    }

    //make shure the login user matches the goal user
    if(goal.user.toString() !== user.id){
        res.status(401)
        throw new Error('User Not Authorizes')
    }

    await goal.remove()

    res.status(200).json({ id: req.params.id})
})

module.exports = {getGoal,setGoal,updateGoal,deleteGoal}