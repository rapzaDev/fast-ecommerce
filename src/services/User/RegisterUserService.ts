import User from '../../models/User';
import CryptoJS from 'crypto-js';

type ServiceArg =  {
    username: string;
    email: string;
    psswrd: string;
};

class RegisterUserService {
    public async execute({ username, email, psswrd }: ServiceArg): Promise<any> {
        const newUser = new User({
            username: username,
            email: email,
            password: CryptoJS.AES.encrypt(
              psswrd, 
              process.env.PASSWORD_SECRET
            ).toString()
          });

          const savedUser = await newUser.save();

          const { password, ...rest } = savedUser._doc;

          return {...rest};
    }
};

export default RegisterUserService;