import { Router } from 'express';

const routesUsers = Router();

routesUsers.get('', (_, res) => res.status(200).send('OK'));

routesUsers.get('/:user_id', (_, res) => res.status(200).send('OK'));

routesUsers.post('', (_, res) => res.status(200).send('OK'));

routesUsers.put('/:user_id', (_, res) => res.status(200).send('OK'));

routesUsers.delete('', (_, res) => res.status(200).send('OK'));

routesUsers.delete('/:user_id', (_, res) => res.status(200).send('OK'));

export default routesUsers;
