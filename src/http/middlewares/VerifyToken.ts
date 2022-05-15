import { Request, Response, NextFunction } from 'express';
import VerifyTokenService from '../../services/JWT/VerifyTokenService';

export default function VerifyToken (request: Request, response: Response, next: NextFunction): void {
    try {
        const token = JSON.stringify(request.headers.token);
        
        const verifyToken = new VerifyTokenService();
        const user = verifyToken.execute({token});
    
        // cretion of user prop in request
        // request.user = user
        if (!user) response.status(403).json("Not allowed");

        const { id } = request.params;
        const { isAdmin } = request.user;

        if (request.user._id === id || isAdmin){
            next();
        } else {
            response.status(403).json("Not allowed");
        }
    } catch (error) {
        response.status(500).json({error, message:"not allowed"});
    }
}