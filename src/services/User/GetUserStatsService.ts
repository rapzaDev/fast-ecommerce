import User from '../../models/User';
import mongoose from 'mongoose';

class GetUserStats {
    public async execute(id: any): Promise<any> {
        const date = new Date();
        const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

        if( !mongoose.Types.ObjectId.isValid(id) ) throw new Error('Invalid mongoose id');

        const data = await User.aggregate([
            { $match: { createdAt: { $gte: lastYear } } },
            { $project: { month: { $month: "$createdAt" } } },
            { $group: { 
                    _id: "$month", 
                    total: { $sum: 1 } 
                } 
            },  
        ]);

        return data;
    }
};

export default GetUserStats;