import React from 'react'
import SinglePage from '../component/BlogComponent/SinglePage'
import { useLocation } from 'react-router-dom'

function BlogPage() {
    const location = useLocation();
    // console.log("Full location object :",location);

    const {state} = location;
    // console.log("state from location:", state);

    const post = state?.post;
    console.log(post)

    // const { post } = location.state || {};
    // console.log(post);
    
    return (
        <section className='font-titillium_web'>
            <SinglePage post={post} />
        </section>
    )
}

export default BlogPage