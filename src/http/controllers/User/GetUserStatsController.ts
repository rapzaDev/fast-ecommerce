import { Request, Response } from 'express';
import GetUserStatsService from '../../../services/User/GetUserStatsService';

export default class GetUserStatsController {
    public async create(request: Request, response: Response): Promise<Response> {
        try {
            const { _id } = request.user;

            const getStats = new GetUserStatsService();
            const data = await getStats.execute(_id);

            return response.status(201).json(data);
        } catch (error) {
            return response.status(500).json(error);
        }
    }
}