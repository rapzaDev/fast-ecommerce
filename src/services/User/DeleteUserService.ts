import User from '../../models/User';

class DeleteUserService {
    public async execute( id:string ): Promise<any> {
        await User.findByIdAndDelete(id);
    }
}

export default DeleteUserService;