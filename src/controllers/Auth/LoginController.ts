import { Request, Response } from 'express';
import LoginService from '../../services/Auth/LoginService';

export default class LoginController {
    public async create(request: Request, response: Response): Promise<Response> {
        try {
            const { username, password } = request.body;

            const login = new LoginService();

            const user = await login.execute({username, password});

            return response.status(200).json(user);
        } catch (error) {
            return response.status(500).json({error, message: "Wrong credentials"});
        }
    }
}