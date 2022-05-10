import { Router } from 'express';

// import UsersRepository from '../repositories/UsersRepository';
// import CreateUserService from '../services/CreateUserService';

const UserRouter = Router();

// const UsersRepository = new UsersRepository();

UserRouter.get('/', (request, response) => {
  try {
   
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});



UserRouter.post('/', (request, response) => {
  try {
    
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});



export default UserRouter;