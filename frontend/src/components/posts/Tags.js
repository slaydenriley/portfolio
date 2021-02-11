import React from 'react';

const Tags = props => {
  return (
    <div>
    <form>
      {props.tags.map(tag =>
        <label className="checkboxes">
          {tag.name.toUpperCase()}<br/>
            <input type="checkbox" name="tags" value={tag.name}/>
            <hr className="line"/>
        </label>
      )}<br/>
        <input type="text" name="tag" placeholder="Add New Tag"/><br/>
        <input type="submit" name="submit" value="Add"/>
    </form><br/>
    </div>
  )
};

export default Tags;
