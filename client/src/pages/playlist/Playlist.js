import React from 'react';
import "./Playlist.css";
export const Playlist = () => {
  return (
    <div>
        <div className="create-playlist">
            <h1>Create Playlist</h1>
            <div className="create-line">
                <div>
                    <input type="text" name="playlist-name" value="Enter your playlist name here" className="create-bar" />
                </div>
                <div>
                    <input type="button" name="playlist-created" value="Create" className="create-button" />
                </div>
            </div>
            <div class="question-block">
                <fieldset class="question" name="html-question-one">
                <legend>
                    Do you want your playlist to be Private or Public ?
                </legend>
                <ul class="answers-list">
                    <li>
                        <label for="public">
                        <input type="radio" id="public" name="pub-or-priv" value="Public" className="radio-input" />
                        Public
                    </label>
                    </li>
                    <li>
                        <label for="private">
                        <input type="radio" id="private" name="pub-or-priv" value="Private" className="radio-input" />
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
