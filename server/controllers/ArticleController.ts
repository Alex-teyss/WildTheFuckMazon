import articleModel from '../models/articleModel';
import BaseController from './BaseController';

export default class ArticleController extends BaseController {
  model = articleModel;
}
