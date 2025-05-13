import { Post } from '../type';

export async function fetchPost(): Promise<Post[]> {
  return examplePosts;
}

export async function fetchPosts(): Promise<Post[]> {
  return await fetchPost();
}

const examplePosts: Post[] = [
  {
    id: '1',
    title: '예제 1111',
    content: '영상1',
    author: 'a',
    createdAt: '2025-05-01T10:00:00Z',
  },
  {
    id: '2',
    title: '예제 22222',
    content: '영상2',
    author: 'b',
    createdAt: '2025-05-02T09:30:00Z',
  },
  {
    id: '3',
    title: '예제 33333',
    content: '영상3',
    author: 'c',
    createdAt: '2025-05-03T11:15:00Z',
  },
];

