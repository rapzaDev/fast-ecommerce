import User from '../../models/User';

class GetAllUsers {
    public async execute(query?: any): Promise<any> {
        // if query exists, will return the 5 recent new users
        const users = query ? await User.find().sort({_id:-1}).limit(5) : await User.find();
        return users;
    }
};

export default GetAllUsers;