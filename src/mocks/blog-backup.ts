import { BlogPost } from './blogPosts1';
import { russellPosts } from './blogPosts1';
import { huntingtonPosts } from './blogPosts2';
import { montgomeryPosts } from './blogPosts3';
import { westfieldPosts } from './blogPosts4';
import { southwickPosts, otherPosts, heidiPost } from './blogPosts5';

export const allBlogPosts: BlogPost[] = [
  ...russellPosts,
  ...huntingtonPosts,
  ...montgomeryPosts,
  ...westfieldPosts,
  ...southwickPosts,
  ...otherPosts,
  ...heidiPost,
];

export default allBlogPosts;