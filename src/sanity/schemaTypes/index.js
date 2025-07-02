import { blockContentType } from './blockContentType';
import { categoryType } from './categoryType';
import { postType } from './postType';
import { authorType } from './authorType';
import { careersCategory } from './careersCategoriesType';
import job from './jobs';

export const schema = {
  types: [blockContentType, categoryType, postType, authorType, careersCategory, job],
}
