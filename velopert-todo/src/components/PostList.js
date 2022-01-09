import React from 'react';
import {Link, Route, Routes} from "react-router-dom";
import PostContainer from "../containers/PostContainer";

function PostList({posts}) {
    return (
        <>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <Link to={`/posts/${post.id}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
            <Routes>
                <Route path="/" element={<div>글을 선택해주세요.</div>}/>
                <Route path=":postId" element={<PostContainer/>}/>
            </Routes>
        </>
    );
}

export default PostList;