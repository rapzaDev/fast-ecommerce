import User from '../../models/User';
import CryptoJS from 'crypto-js';

type ServiceArg =  {
    username: string;
    user_password: string;
};

class LoginService {
    public async execute({ username, user_password }: ServiceArg): Promise<any> {
        const user = await User.findOne({ username: username });
        if (!user) throw new Error("Wrong credentials");

        const hashedPassword = CryptoJS.AES.decrypt(
            user.password, 
            process.env.PASSWORD_SECRET
        );

        const original_pss = hashedPassword.toString(CryptoJS.enc.Utf8);

        if ( original_pss !== user_password ) throw new Error("Wrong credentials");

        const { password, ...rest } = user._doc;

        return {...rest};
    }
};

export default LoginService;