import { UpdateResult, DeleteResult } from 'typeorm';

interface IUsers {
    id?:string;
    email:string;
    password:string;
}

interface IdataUpdate {
    [key:string]:string | number;
}

interface IusersRepo {
    createUser:(user:IUsers)=>IUsers;
    saveUser:(user:IUsers)=>void;
    findUser:(id:string)=>Promise<IUsers>;
    findUsers:(page:number, limit:number)=>Promise<Array<IUsers>>;
    findAllUsers:()=>Promise<Array<IUsers>>;
    updateUser:(dataUser:IdataUpdate, update:IdataUpdate)=>Promise<UpdateResult>;
    deleteUser:(dataUser:IdataUpdate)=>Promise<DeleteResult>;
}

export { IUsers, IdataUpdate, IusersRepo };
