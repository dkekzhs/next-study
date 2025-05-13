import React from 'react';
import PostListItem from '../molecules/PostList';
import { Post } from '@/entities/post/type';

interface Props {
  title: string;
  posts: Post[];
  showMore?: boolean;
}

export default function PostListSection({ title, posts, showMore }: Props) {
  return (
    <section className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <h2 className="font-bold">{title}</h2>
        {showMore && <button className="text-sm text-gray-500">더보기 &gt;</button>}
      </div>
      <div className="space-y-1">
        {posts.map(post => (
          <PostListItem key={post.id} title={post.title} commentCount={extractCommentCount(post.title)} />
        ))}
      </div>
    </section>
  );
}

// 예시: 제목 끝의 [숫자]를 추출
function extractCommentCount(title: string): number | undefined {
  const match = title.match(/\[(\d+)\]/);
  return match ? parseInt(match[1], 10) : undefined;
}