import { Router } from 'express';
import User from '../../models/User';

// import AuthsRepository from '../repositories/AuthsRepository';
// import CreateAuthService from '../services/CreateAuthService';

const AuthRouter = Router();

// const AuthsRepository = new AuthsRepository();

AuthRouter.post('/register', async (request, response) => {
  try {
    const { username, email, password } = request.body;

    const newUser = new User({
      username: username,
      email: email,
      password: password,
    });

    const savedUser = await newUser.save();
    return response.status(201).json(savedUser);
  } catch (err) {
    return response.status(500).json({ error: err.message });
  }
});



export default AuthRouter;