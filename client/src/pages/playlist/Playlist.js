import React from 'react';
import "./Playlist.css";
export const Playlist = () => {
  return (
    <div>
        <div className="create-playlist">
            <h1>Create Playlist</h1>
        
        <div class="question-block">
            <fieldset class="question" name="html-question-one">
              <legend>
                Do you want your playlist to be Private or Public ?
              </legend>
              <ul class="answers-list">
                <li>
                  <label for="public">
                    <input type="radio" id="public" name="pub-or-priv" value="Public" />
                    Public
                  </label>
                </li>
                <li>
                  <label for="private">
                    <input type="radio" id="private" name="pub-or-priv" value="Private" />
                    Private
                  </label>
                </li>
              </ul>
            </fieldset>
          </div>
          </div>
    </div>
  );
};
