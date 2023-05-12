import { IUser } from "./user.interface";
import { User } from "./user.model";

export const createUserToDB = async (payload: IUser): Promise<IUser> => {
    // Create a new User
    const user = new User(payload)
    // const user = await new User({
    //     id: Math.floor(Math.random() * 100),
    //     role: 'student',
    //     password: '1234567',
    //     name: {
    //         firstName: 'MS Khadija',
    //         middleName: 'Mishu',
    //         lastName: 'Mim'
    //     },
    //     dateOdBirth:'03-22-2023',
    //     gender: 'male',
    //     email: 'example@gmail.com',
    //     contactNumber: '017232323',
    //     emergencyContact: '017323233',
    //     presentAddress: 'USA',
    //     permanentAddress: 'NYC'

    // })
    await user.save();
    console.log(user.fullName())
    return user;
}

export const getUserFromDB = async (): Promise<IUser[]> => {
    const users = await User.find()
    return users
}

export const getUserByIdFromDB = async (
    payload: string
): Promise<IUser | null> => {
    const user = await User.findOne({ id: payload }, { name: 1, contactNumber: 1 })
    return user;
}

export const getAdminUserFromDB = async() => {
    const admins = await User.getAdminUsers()
    return admins;
}


