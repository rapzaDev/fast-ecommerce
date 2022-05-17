import { Request, Response } from 'express';
import GetUserService from '../../../services/User/GetUserService';

export default class GetUserController {
    public async create(request: Request, response: Response): Promise<Response> {
        try {
            const { id } = request.params;

            const get_user = new GetUserService();
            const user = await get_user.execute(id);

            const { password, ...rest } = user._doc;

            return response.status(201).json({...rest});
        } catch (error) {
            return response.status(500).json(error);
        }
    }
}