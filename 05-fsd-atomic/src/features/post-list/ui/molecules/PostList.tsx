import React from 'react';
import PostTitle from '../atoms/PostTitle';

interface Props {
  title: string;
  thumbnail?: string;
  commentCount?: number;
}

export default function PostListItem({ title, thumbnail, commentCount }: Props) {
  return (
    <div className="flex gap-2 items-start py-2">
      <div className="w-10 h-10 bg-gray-200 rounded-sm shrink-0" />
      <PostTitle title={title} commentCount={commentCount} />
    </div>
  );
}