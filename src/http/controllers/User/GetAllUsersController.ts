import { Request, Response } from 'express';
import GetAllUsersService from '../../../services/User/GetAllUsersService';

export default class GetUserController {
    public async create(request: Request, response: Response): Promise<Response> {
        try {
            const get_users = new GetAllUsersService();
            const users = await get_users.execute();

            const usersData = users.map( user => {
                const { password, ...rest } = user._doc;
                return {...rest};
            })

            return response.status(201).json(usersData);
        } catch (error) {
            return response.status(500).json(error);
        }
    }
}