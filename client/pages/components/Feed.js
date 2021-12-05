import React from 'react'
import {posts} from "../data"
import Post from './Post'

const Feed = () => {
    return (
        <div>
           {posts.map((post) => {
               return (
                   <Post name={post.name} key={post.id} content={post.content}></Post>
               )
            })}

        </div>
    )
}

export default Feed
