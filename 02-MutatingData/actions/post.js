"use server";
import { redirect } from 'next/navigation';
import { storePost, updatePostLikeStatus } from '@/lib/posts';
import { uploadImage } from '@/lib/cloudinary';
import { revalidatePath } from 'next/cache';

export async function createPost(prevState, formData) {
    "use server";
    const title = formData.get('title');
    const image = formData.get('image');
    const content = formData.get('content');

    let error = [];
    if(!title || title.trim().length ===0)
        error.push("Title is required.");

    if(!content || content.trim().length ===0)
        error.push("content is required.");

    if(!image || image.size === 0)
        error.push("Image is required.");

    if(error.length >0){
        return { error };
    }

    const imageUrl = await uploadImage(image);

    await storePost({
        imageUrl: imageUrl,
        title,
        content,
        userId: 1
    });

    redirect('/feed');
}

export async function togglePostLikeStatus(postId) {
    await updatePostLikeStatus(postId,2);
    revalidatePath('/feed');
}
