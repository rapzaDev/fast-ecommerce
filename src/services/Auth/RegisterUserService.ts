import User from '../../models/User';
import CryptoJS from 'crypto-js';

type ServiceArg =  {
    username: string;
    email: string;
    password: string;
};

class RegisterUserService {
    public async execute({ username, email, password }: ServiceArg): Promise<any> {
        const newUser = new User({
            username: username,
            email: email,
            password: CryptoJS.AES.encrypt(
              password, 
              process.env.PASSWORD_SECRET
            ).toString()
          });

          const savedUser = await newUser.save();

          return savedUser;
    }
};

export default RegisterUserService;