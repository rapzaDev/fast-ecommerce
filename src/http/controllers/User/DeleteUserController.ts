import { Request, Response } from 'express';
import DeleteUserService from '../../../services/User/DeleteUserService';

export default class RegisterUserController {
    public async create(request: Request, response: Response): Promise<Response> {
        try {
            const { id } = request.params;

            const delete_user = new DeleteUserService();
            delete_user.execute(id);

            return response.status(201).json({message: `user with id ${id} was deleted.`});
        } catch (error) {
            return response.status(500).json(error);
        }
    }
}