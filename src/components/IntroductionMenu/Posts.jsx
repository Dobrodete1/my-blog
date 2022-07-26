import React from 'react'
import { popularPost } from '../../constants'

const Posts = () => {
  return (
    <>
      <div className="w3-card w3-margin">
        <div className="w3-container w3-padding">
          <h4>Popular Posts</h4>
        </div>
        <ul className="w3-ul w3-hoverable w3-white">  
          {popularPost.map((post)=>(
            <li className="w3-padding-16">
            <img
              src={post.img}
              alt=""
              className="w3-left w3-margin-right"
              style={{ width: 50 }}
            />
            <span className="w3-large">{post.title}</span>
            <br />
            <span>{post.underTitle}</span>
          </li>
          ))}
        </ul>
      </div>
      <hr />
    </>
  )
}

export default Posts