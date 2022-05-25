import { getRepository, Repository } from 'typeorm';
import { Users } from '../entities/users.entity';
import { IUsers, IdataUpdate, IusersRepo } from './usersInterfaces.respository';

class UsersRepository implements IusersRepo {
  private ormRepo: Repository<Users>;

  constructor() {
    this.ormRepo = getRepository(Users);
  }

  createUser = (user: IUsers) => this.ormRepo.create(user);

  saveUser = async (user: IUsers) => await this.ormRepo.save(user);

  findUser = async (id: string) => await this.ormRepo.findOne({ id });

  findUsers = async (page: number = 0, limit: number = 15) => await this.ormRepo.find({
      skip: page,
      take: limit,
      order: { created_at: 'ASC' },
    });

  findAllUsers = async () => await this.ormRepo.find({
    order: { created_at: 'ASC' },
  });

  updateUser = async (dataUser: IdataUpdate, update: IdataUpdate) => await this.ormRepo.update(dataUser, update);

  deleteUser = async (dataUser: IdataUpdate) => await this.ormRepo.delete(dataUser);
}

export default UsersRepository;
