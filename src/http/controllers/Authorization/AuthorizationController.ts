import { Request, Response, NextFunction } from 'express';
import CryptoJS from 'crypto-js';
import User from '../../../models/User';

export default class AuthorizationController {
    public async create(request: Request, response: Response, next: NextFunction): Promise<Response> {
        const { password } = request.body;
        if (password) {
            request.body.password = CryptoJS.AES.encrypt(
                password,
                process.env.PASSWORD_SECRET
            ).toString();
        }
        
        try {
            const updateUser = await User.findByIdAndUpdate(
                request.user._id, 
                {
                    $set: request.body // everything on req body
                }, 
                {new: true}
            );

            const { password, ...rest } = updateUser._doc;

            return response.status(200).json({ ...rest });
        } catch (error) {
            return response.status(500).json({error, message:"not allowed"});
        }
    }
}
