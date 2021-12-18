import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { postAdded } from './postSlice';

export const AddPost =()=> {
    const [title, settitle] = useState('');
    const [content, setcontent] = useState('');
    const [userId, setuserId] = useState('');
    const dispath = useDispatch();
    const users = useSelector((state)=>state.users);
    const userOptions = users.map((user)=>
       (
        <option key={user.id} value={user.id}>
              {user.name}
        </option>
    ))
    const onChangeTitle =(e)=>{
        settitle(e.target.value)
    }
    const onChangeContent =(e)=>{
        setcontent(e.target.value)
    }
    const onSavePostNew=()=>{
        if(title && content)
        {
            dispath(postAdded(title, content, userId))
            settitle('')
            setcontent('')
        }
    }
    const onChangeAuthor=(e)=>{
        setuserId(e.target.value)
    }

    return (
        <div className='addPost'>
            <h2>Tạo Post Mới</h2>
            <form>
                <lable htmlFor="postTitle" >Post Title:</lable>
                <input type="text" id='postTitle' name='postTitle' 
                placeholder='Enter your title' value={title} 
                onChange={onChangeTitle} />
                <lable htmlFor="postContent" >Post Content:</lable>
                <textarea id='postContent' name='postContent' 
                placeholder='Enter your content' value={content} 
                onChange={onChangeContent} />
                <lable htmlFor="postAuthor" >Author:</lable>
                <select id='postAuthor' value={userId} 
                onChange={onChangeAuthor}>
                        <option value=""></option>
                        {userOptions}
                </select>
                <button type='button' onClick={onSavePostNew}>Add new</button>
            </form>
        </div>
    )
}
