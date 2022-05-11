import { Request, Response, NextFunction } from 'express';
import VerifyTokenService from '../services/JWT/VerifyTokenService';

export default function VerifyToken (request: Request, response: Response, next: NextFunction): void {
    try {
        const token = JSON.stringify(request.headers.token);
        
        const verifyToken = new VerifyTokenService();
        const user = verifyToken.execute({token});

        request.user = user;

        if (user) return next();
    } catch (error) {
        response.status(500).json(error);
    }
}