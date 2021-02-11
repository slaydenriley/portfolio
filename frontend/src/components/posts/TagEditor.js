import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const TagEditor = (props) => {

      return (
        <div className="posts">
          <h1>Please select a tag to edit...</h1>
          <hr className="line"/>
          {props.tags.map(tag =>
            <div key={tag.id} className="edit-post-list">
              <h2><em>{tag.name}</em></h2>
              <Link to={`/dashboard/tags/edit/${tag.id}`}>
                <button id={tag.id} className="submit edit-post-button">
                  Edit Tag
                </button>
              </Link>
              <button id={tag.id} className="submit delete-post-button" onClick={this.handleDeleteClick}>Delete Tag</button>
              <hr className="line"/>
            </div>)}
        </div>
      )
    }

export default TagEditor
