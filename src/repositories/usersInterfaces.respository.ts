import { UpdateResult, DeleteResult } from 'typeorm';
import { IValidate } from '../@types';

interface IUsers {
    id?:string;
    email:string;
    password:string;
}

interface IdataUpdate {
    [key:string]:string;
}

interface IusersRepo {
    createUser:(user:IUsers)=>IUsers;
    saveUser:(user:IUsers)=>void;
    findUser:(id:string)=>Promise<IUsers>;
    findUsers:(page:number, limit:number)=>Promise<Array<IUsers>>;
    findAllUsers:()=>Promise<Array<IUsers>>;
    updateUser:(dataUser:IdataUpdate, update:IValidate)=>Promise<UpdateResult>;
    deleteUser:(dataUser:IdataUpdate)=>Promise<DeleteResult>;
}

export { IUsers, IdataUpdate, IusersRepo };
