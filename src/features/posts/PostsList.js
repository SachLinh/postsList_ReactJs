import React from 'react';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import { PostAuthor } from './PostAuthor';
import { ReactionButton } from './ReactionButton';



export const PostsList =() => {
    const posts = useSelector((state) => state.posts);
    const renderedPosts = posts.map((post) => {
        return (
          <article className="post-excerpt" key={post.id}>
            <h3>{post.title}</h3>
            <div>
              <PostAuthor userId={post.user} />
            </div>
            <p className="post-content">{post.content.substring(0, 100)}</p>
    
            <ReactionButton post={post} />
            <Link to={`/posts/${post.id}`} className="button muted-button">
              View Post
            </Link>
          </article>
        );
      });
    return (
        <section className='posts-list'>
            <h2>Posts</h2>
            {renderedPosts}
        </section>
    )
}
