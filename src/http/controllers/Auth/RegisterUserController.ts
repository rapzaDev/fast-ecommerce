import { Request, Response } from 'express';
import RegisterUserService from '../../../services/Auth/RegisterUserService';

export default class RegisterUserController {
    public async create(request: Request, response: Response): Promise<Response> {
        try {
            const { username, email, password } = request.body;

            const registerUser = new RegisterUserService();

            const savedUser = await registerUser.execute({username, email, psswrd: password});

            return response.status(201).json(savedUser);
        } catch (error) {
            return response.status(500).json(error);
        }
    }
}