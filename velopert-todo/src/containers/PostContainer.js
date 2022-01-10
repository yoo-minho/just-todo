import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getPost} from '../modules/posts';
import Post from '../components/Post';
import {useParams} from "react-router";

function PostContainer() {

    const {postId} = useParams();

    const {data, loading, error} = useSelector(
        state => state.posts.post[postId]
    ) || {
        loading: false,
        data: null,
        error: null
    }; // 아예 데이터가 존재하지 않을 때가 있으므로, 비구조화 할당이 오류나지 않도록

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPost(Number(postId)));
    }, [postId, dispatch]);

    if (loading) return <div>로딩중...</div>;
    if (error) return <div>에러 발생!</div>;
    if (!data) return null;

    return <Post post={data}/>;
}

export default PostContainer;