import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';

import AppError from '../../error/AppError';
import User from '../../models/User';

interface Request {
  username: string;
  email: string;
  password: string;
}

class CreateUser {
  public async execute({ username, email, password }: Request): Promise<User> {
    const usersRepository = getRepository(User);

    const userExist = await usersRepository.findOne({
      where: [{ email }, { username }],
    });

    if (userExist) {
      throw new AppError('User already exists with email/username');
    }

    const encrypted = await hash(password, 8);

    const user = usersRepository.create({
      username,
      email,
      password: encrypted,
    });

    await usersRepository.save(user);

    return user;
  }
}

export default CreateUser;
