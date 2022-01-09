import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPost } from '../modules/posts';
import Post from '../components/Post';
import {useParams} from "react-router";

function PostContainer() {

    const {postId} = useParams();


    console.log("PostContainer", postId)

    const { data, loading, error } = useSelector(state => state.posts.post);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPost(Number(postId)));
    }, [postId, dispatch]);

    if (loading) return <div>로딩중...</div>;
    if (error) return <div>에러 발생!</div>;
    if (!data) return null;

    return <Post post={data} />;
}

export default PostContainer;