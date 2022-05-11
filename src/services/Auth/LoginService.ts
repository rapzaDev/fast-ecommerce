import jwt from 'jsonwebtoken';
import User from '../../models/User';
import CryptoJS from 'crypto-js';

type ServiceArg =  {
    username: string;
    user_password: string;
};

class LoginService {
    public async execute({ username, user_password }: ServiceArg): Promise<any> {
        const user = await User.findOne({ username: username });
        if (!user) new Error("Wrong credentials");

        const hashedPassword = CryptoJS.AES.decrypt(
            user.password, 
            process.env.PASSWORD_SECRET
        );

        const original_pss = hashedPassword.toString(CryptoJS.enc.Utf8);

        if ( original_pss !== user_password ) return new Error("Wrong credentials");

        const { password, ...rest } = user._doc;

        const access_token = jwt.sign(
            {
                id: user._id,
                isAdmin: user.isAdmin
            }, 
            process.env.JWT_SECRET,
            {expiresIn:"1d"}
            );

        return {...rest, access_token};
    }
};

export default LoginService;