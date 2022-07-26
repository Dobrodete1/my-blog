import React from 'react'
import { tags } from './../../constants/index';

const Tag = (props) => {
  return(
    <span className="w3-tag w3-light-grey w3-small w3-margin-bottom" style={margin}
      onClick={() => <span class="w3-tag w3-black w3-margin-bottom">{tags.length}</span>}>
      {props.name}
    </span>
  )
}


const margin = {marginRight: "5px"}

const Tags = () => {

  const tagsArray = tags.map(post => <Tag name= {post} /> )
  
  return (
    <>
      {/* Labels / tags */}
      <div className="w3-card w3-margin">
        <div className="w3-container w3-padding">
          <h4>Tags</h4>
        </div>
        <div className="w3-container w3-white">
          <p>
            {tagsArray}
          </p>
        </div>
      </div>
    </>
  )
}

export default Tags