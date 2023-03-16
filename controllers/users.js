import { v4 as uuidv4 } from 'uuid';
let users = [];

export const getUsers = (req,res)=>{    //find all users with get method
    res.send(users);
}
export const createUsers =(req,res)=>{  //create users with post method
    const user = req.body;

    users.push({...user,  id:uuidv4()}); //expending the array user attributes with another key item id
    res.send(`User with the name ${user.firstName} added to the database! ` )

}

export const getUser =(req,res)=>{
    const {id}= req.params;
    const foundUser = users.find((user)=> user.id==id);
    res.send(foundUser);
}
export const deleteUser =(req,res)=>{
    const {id}= req.params;

    users = users.filter((user)=>user.id != id);
    res.send(`User with the id ${id} has been deleted sucessfully! `);
}
export const updateUser = (req,res)=>{
    const {id}= req.params;
    const {firstName,lastName,age} =req.body;
    const user = users.find((user)=> user.id==id);

    if(firstName) user.firstName =firstName;
    if(lastName) user.lastName =lastName;
    if(age) user.age =age;

    res.send(`User with the id ${id} has been updated! `);
}