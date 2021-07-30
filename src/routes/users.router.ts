import { Router } from 'express';

import CreateUser from '../services/users/CreateUser';

const usersRouter = Router();

usersRouter.post('/', async (request, response) => {
  const { username, email, password } = request.body;

  const createUser = new CreateUser();

  const user = await createUser.execute({
    username,
    email,
    password,
  });

  delete user.password;

  return response.json({ user });
});

export default usersRouter;
