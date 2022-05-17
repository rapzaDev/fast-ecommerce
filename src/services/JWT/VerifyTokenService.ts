import jwt from 'jsonwebtoken';

type ServiceArg =  {
    token: string;
};

class VerifyTokenService {
    public execute({ token }: ServiceArg ): any {
        const authHeader = token;

        if (authHeader) {
            let data = authHeader.split(' ')[1];
            const tokenData = data.slice(0, -1);

            let userD: any;

            jwt.verify(tokenData, process.env.JWT_SECRET,  (err, user) => {
                if (err) throw new Error("Invalid Authentication")

                userD = user;
            })

            return userD;
        }

        else {
            throw new Error("Invalid Authentication");
        }
    }
};

export default VerifyTokenService;