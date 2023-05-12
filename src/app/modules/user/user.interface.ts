import { HydratedDocument, Model } from "mongoose"

// Step1: Creating an Interface
export interface IUser {
    id: string
    role: 'student'
    password: string
    name: {
        firstName: string
        middleName: string
        lastName: string
    }
    dateOdBirth?: string
    gender: 'male' | 'female'
    email?: string
    contactNumber: string
    emergencyContact: string
    presentAddress: string
    permanentAddress: string
}


// interface UserModel extends Model<IUser> {
//     getAdminUserFromDB(): IUser[];
//   }

// Put all user instance methods in this interface:
export interface IUserMethods {
    fullName(): string;
}


export interface UserModel extends Model<IUser, {}, IUserMethods> {
    getAdminUsers(): Promise<HydratedDocument<IUser, IUserMethods>>;
}
