import { Router } from 'express';
import { connect } from 'mongoose';
import { users } from '../models/users';

const router = Router();

router.get('/likes', function(req, res, next) {
  new users()
    .findAll()
    .then(results => res.send(results))
    .catch(err => {
      next({ message: "The 'name' parameter is required" });
    });
});

export default router;
