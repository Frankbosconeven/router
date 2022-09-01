const getUsers = (req, res)=>{
    res.status(200).send("Your data has been save.");
};

const createUser = (req, res)=>{
    res.status(201).send("Your data has been save.");
};

const updateUser =(req, res)=>{
    res.status(200).send("Your data has been replace.");
};

const deleteUser =  (req, res)=>{
    res.status(200).send("Your data has been deleted.");
};

module.exports = {
    getUsers,
    createUser,
    updateUser,
    deleteUser,
};