import User from '../../models/User';

class GetAllUsers {
    public async execute(): Promise<any> {
        const users = await User.find();
        return users;
    }
};

export default GetAllUsers;