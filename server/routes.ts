import * as express from 'express';

import ArticleController from './controllers/ArticleController';
import UserController from './controllers/UserController';
// import cat from './models/cat';
// import user from './models/user';

export default function routes(app) {

  const router = express.Router();

  const article = new ArticleController();
  const user = new UserController();

  // articles
  router.route('/articles').get(article.getAll);
  router.route('/articles/count').get(article.count);
  router.route('/article').post(article.insert);
  router.route('/article/:id').get(article.get);
  router.route('/article/:id').put(article.update);
  router.route('/article/:id').delete(article.delete);

  // users
  router.route('/login').post(user.login);
  router.route('/users').get(user.getAll);
  router.route('/users/count').get(user.count);
  router.route('/user').post(user.insert);
  router.route('/user/:id').get(user.get);
  router.route('/user/:id').put(user.update);
  router.route('/user/:id').delete(user.delete);

  // Apply the routes to our application with the prefix /api
  app.use('/api', router);

}
