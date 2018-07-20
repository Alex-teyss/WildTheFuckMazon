import * as express from 'express';

import CatCtrl from './controllers/cat';
import UserCtrl from './controllers/user';
import Cat from './models/cat';
import User from './models/user';
import ArticleCtrl from './controllers/article';

export default function setRoutes(app) {

  const router = express.Router();

  const catCtrl = new CatCtrl();
  const articleCtrl = new ArticleCtrl();
  const userCtrl = new UserCtrl();

  // Cats
  router.route('/cats').get(catCtrl.getAll);
  router.route('/cats/count').get(catCtrl.count);
  router.route('/cat').post(catCtrl.insert);
  router.route('/cat/:id').get(catCtrl.get);
  router.route('/cat/:id').put(catCtrl.update);
  router.route('/cat/:id').delete(catCtrl.delete);

   // Articles
   router.route('/articles').get(articleCtrl.getAll);
   router.route('/articles/count').get(articleCtrl.count);
   router.route('/article').post(articleCtrl.insert);
   router.route('/article/:id').get(articleCtrl.get);
   router.route('/article/:id').put(articleCtrl.update);
   router.route('/article/:id').delete(articleCtrl.delete);

  // Users
  router.route('/login').post(userCtrl.login);
  router.route('/users').get(userCtrl.getAll);
  router.route('/users/count').get(userCtrl.count);
  router.route('/user').post(userCtrl.insert);
  router.route('/user/:id').get(userCtrl.get);
  router.route('/user/:id').put(userCtrl.update);
  router.route('/user/:id').delete(userCtrl.delete);

  // Apply the routes to our application with the prefix /api
  app.use('/api', router);

}
