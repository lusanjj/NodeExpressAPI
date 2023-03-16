import express from 'express'
import { getUsers,createUsers,getUser,deleteUser,updateUser } from '../controllers/users.js';
const router = express.Router();


//all routes in here are starting with /users due to the index.js-->app.use('/users',usersRoutes);
router.get('/',getUsers);

router.post('/',createUsers);

router.get('/:id',getUser);

router.delete('/:id',deleteUser);

router.patch('/:id',updateUser);
export default router;
