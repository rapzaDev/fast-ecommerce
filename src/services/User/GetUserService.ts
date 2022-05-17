import User from '../../models/User';

class GetUserService {
    public async execute(id: string): Promise<any> {
        const user = await User.findById(id);
        return user;
    }
};

export default GetUserService;