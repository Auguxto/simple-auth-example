import { Router } from 'express';

import CreateSession from '../services/sessions/CreateSession';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
  const { username, password } = request.body;

  const createSession = new CreateSession();

  const { token, user } = await createSession.execute({
    username,
    password,
  });

  delete user.password;

  return response.json({ user, token });
});

export default sessionsRouter;
