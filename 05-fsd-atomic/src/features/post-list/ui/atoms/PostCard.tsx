import { Post } from '@/entities/post/types';

type Props = {
  post: Post;
};

export default function PostCard({ post }: Props) {
  return (
    <div className="p-4 border rounded-xl shadow-sm bg-white">
      <h3 className="text-lg font-semibold">{post.title}</h3>
      <p className="text-sm text-gray-600 mt-2">{post.content}</p>
      <div className="mt-4 text-xs text-gray-400">
        작성자: {post.author} • {new Date(post.createdAt).toLocaleDateString()}
      </div>
    </div>
  );
}
