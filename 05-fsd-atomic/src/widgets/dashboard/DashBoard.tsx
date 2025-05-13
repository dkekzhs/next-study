import React from 'react';
import PostListSection from '@/features/post-list/ui/organisms/PostBoardSection'
import { fetchPosts } from '@/entities/post/api';

export default async function PostBoard() {
  const posts = await fetchPosts();

  return (
    <div className="px-4 py-6 max-w-2xl mx-auto">
      <PostListSection title="Title 1" posts={posts.slice(0, 5)} showMore />
      <PostListSection title="Title 2" posts={posts.slice(0, 5)} showMore />
      <PostListSection title="Title 3" posts={posts.slice(0, 5)} />
    </div>
  );
}