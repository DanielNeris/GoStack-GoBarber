import { Router } from 'express';

import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Daniel',
    email: 'daniel@daniel2.com',
    password_hash: '1323121321',
  });

  return res.json(user);
});

export default routes;
