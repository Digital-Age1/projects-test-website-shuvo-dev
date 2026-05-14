export type { BlogPost } from '@/mocks/blogPosts1';
import { russellPosts } from '@/mocks/blogPosts1';
import { huntingtonPosts } from '@/mocks/blogPosts2';
import { montgomeryPosts } from '@/mocks/blogPosts3';
import { westfieldPosts } from '@/mocks/blogPosts4';
import { southwickPosts, otherPosts, heidiPost } from '@/mocks/blogPosts5';

export const blogPosts = [
  ...russellPosts,
  ...huntingtonPosts,
  ...montgomeryPosts,
  ...westfieldPosts,
  ...southwickPosts,
  ...otherPosts,
  ...heidiPost,
];
