var Userdb = require('../dataBase/modules.js')

//create and save new user
exports.create = (req,res)=>{
    if(!req.body){
        res.status(404).send({message:"Content empty"})
        return;
    }
    console.log(req.body)
    const user = new Userdb(
        {
            name : req.body.name,
            email : req.body.email,
            gender : req.body.gender,
            status : req.body.status,
            admin : req.body.admin
        }
        
    )
    user.save(user).then(data =>{
        res.send(data)
    })
    .catch(err =>{
        console.log(err)
        res.status(500).send({message: err.message || "error happened from backend"})
    })

}

exports.findUsers = (req,res)=>{
    Userdb.find()
    .then(user => {
        res.send(user)
    })
    .catch(err => {
        res.status(500).send({ message : err.message || "Error Occurred while retriving user information" })
    })

}

exports.findUserById = (req,res)=>{
    if(!req.params.id){
        res.status(404).send({ message : "Content empty"})
        return
    }
       
    const id = req.params.id;
    console.log(id)
    Userdb.findById(id)
            .then(data =>{
                if(!data){
                    res.status(404).send({ message : "Not found user with id "+ id})
                }else{
                    res.send(data)
                }
            })
            .catch(err =>{
                res.status(500).send({ message: "Error retrieving user with id " + id})
            })
}
exports.delete = (req,res)=>{

    const id = req.params.id;

    Userdb.findByIdAndDelete(id)
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Delete with id ${id}. Maybe id is wrong`})
            }else{
                res.send({
                    message : "User was deleted successfully!"
                })
            }
        })
        .catch(err =>{
            res.status(500).send({
                message: "Could not delete User with id=" + id
            });
        });

}

exports.update = (req,res)=>{
    if(!req.body){
        return res
            .status(400)
            .send({ message : "Data to update can not be empty"})
    }

    const id = req.params.id;
    Userdb.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Update user with ${id}. Maybe user not found!`})
            }else{
                res.send(data)
            }
        })
        .catch(err =>{
            res.status(500).send({ message : "Error Update user information"})
        })
}