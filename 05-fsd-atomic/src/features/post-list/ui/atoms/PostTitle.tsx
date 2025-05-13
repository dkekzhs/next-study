import React from 'react';

interface Props {
  title: string;
  commentCount?: number;
}

export default function PostTitle({ title, commentCount }: Props) {
  return (
    <div className="text-sm text-gray-800 truncate flex gap-1">
      <span>{title}</span>
      {commentCount !== undefined && (
        <span className="text-blue-600">[{commentCount}]</span>
      )}
    </div>
  );
}
