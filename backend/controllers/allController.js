const getHello =(req,res) => {
    res.status(200).json({ message: 'Get Hello'})
}

const setHello =(req,res) => {
    res.status(200).json({ message: 'Create Hello'})
}
const updateHello =(req,res) => {
    res.status(200).json({ message: `Update Hello ${req.params.id}`})
}
const deleteHello =(req,res) => {
    res.status(200).json({ message: `Delete Hello ${req.params.id}`})
}

module.exports = {getHello,setHello,updateHello,deleteHello}