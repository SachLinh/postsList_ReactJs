import React from 'react'
import {useSelector} from 'react-redux';
import {Link, useParams} from 'react-router-dom';
import { PostAuthor } from './PostAuthor';

export const DetailPost = () => {
    const params = useParams();
    const post = useSelector((state) => state.posts.find((post) => post.id === params.postId));
    if(!post)
    {
        return (
            <section>
                <h2>Post not found!</h2>
            </section>
        )
    }
    return (
        <section>
            <article post="post">
                 <h2>{post.title}</h2>
                 <div>
                     <PostAuthor userId={post.user}/>
                 </div>
                 <p className='post-content'>{post.content}</p>
                 <Link to={`/editPost/${post.id}`} className='button'>
                     Edit Post
                 </Link>
            </article>
        </section>
    )
}
