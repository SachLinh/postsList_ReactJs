import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams , useNavigate} from 'react-router-dom'
import { postUpdated } from './postSlice';

export const EditPost = () => {
    const params = useParams();
    const post = useSelector((state)=>state.posts.find((post)=>post.id === params.postId));
    const [title,setTitle] = useState(post.title);
    const [content,setContent] = useState(post.content);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const onTitleChange =(e)=>{
       setTitle(e.target.value)
    }
    const onContentChange =(e)=>{
       setContent(e.target.value)
    }
    const onSavePost=()=>{
        if(title && content)
        {
            dispatch(postUpdated({id: params.postId , title, content}));
            navigate(`/`);
        }
    }
    return (
        <section>
             <h2>Edit Post</h2>
            <form>
                <label htmlFor='postTitle'>Post title:</label>
                <input type="text" 
                id="postTitle" 
                name='postTitle' 
                placeholder='Vui lòng nhập title muốn sửa' 
                value={title} onChange={onTitleChange} />
                <label htmlFor='postContent'>Post Content:</label>
                <textarea  
                id="postContent" 
                name='postContent' 
                placeholder='Vui lòng nhập Content muốn sửa' 
                value={content} onChange={onContentChange} />
            </form>
            <button type='button' onClick={onSavePost}>Lưu lại</button>
        </section>
    )
}
