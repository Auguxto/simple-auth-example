import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import AppError from '../../error/AppError';

import User from '../../models/User';

interface Request {
  username: string;
  password: string;
}

interface Response {
  token: string;
  user: User;
}

class CreateSession {
  public async execute({ username, password }: Request): Promise<Response> {
    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne({
      where: [{ username }],
      select: ['id', 'email', 'password'],
    });

    if (!user) {
      throw new AppError('User not found', 404);
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new AppError('Invalid username/password combination', 401);
    }

    const token = sign({}, process.env.JWT_SECRET, {
      subject: user.id,
      expiresIn: '1d',
    });

    return {
      token,
      user,
    };
  }
}

export default CreateSession;
