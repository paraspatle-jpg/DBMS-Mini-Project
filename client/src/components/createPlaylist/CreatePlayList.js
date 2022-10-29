import React,{useState} from 'react'

export const CreatePlayList = () => {
    const [visibility, setVisibility] = useState(1);
  return (
    <><div className="create-playlist">
    <h1>Create Playlist</h1>
    <div className="create-bar">
      <input
        type="text"
        name="playlist-name"
        placeholder="Enter your playlist name here"
      />
    </div>

    <div className="question-block">
      <div class="className" >
        <legend>Do you want your playlist to be Private or Public ?</legend>
        <ul className="answers-list">
          <li
            style={{ backgroundColor: visibility === 1 ? "#f86b6b" : "",borderRadius:"30px 30px 0 0"}}
            onClick={() => setVisibility(1)}
          >
            Public
          </li>
          <li
            style={{ backgroundColor: visibility === 2 ? "#f86b6b" : "",borderRadius:"0 0 30px 30px" }}
            onClick={() => setVisibility(2)}
          >
            Private
          </li>
        </ul>
      </div>
    </div>

    <div className="create-button-container">
      <div className="create-button">Create</div>
    </div>
  </div></>
  )
}
