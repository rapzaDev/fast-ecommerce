import jwt from 'jsonwebtoken';

type ServiceArg =  {
    token: string;
};

class VerifyTokenService {
    public execute({ token }: ServiceArg ): any {
        const authHeader = token;

        if (authHeader) {
            jwt.verify(token, process.env.JWT_SECRET,  (err, user) => {
                if (err) throw new Error("Invalid Authentication")
                
                return user;
            })
        }

        else {
            throw new Error("Invalid Authentication");
            return null;
        }
    }
};

export default VerifyTokenService;