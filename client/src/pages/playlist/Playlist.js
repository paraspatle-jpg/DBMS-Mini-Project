import React from 'react';
import "./Playlist.css";
import { Link } from "react-router-dom";
export const Playlist = () => {

    const toggleButton = document.querySelector('');
    const divToShow= document.querySelector('');

  return (
    <div className="container-playlist">
        <div className="create-playlist">
            <h1>Create Playlist</h1>
            <div>
                <input type="text" name="playlist-name" value="Enter your playlist name here" className="create-bar" />
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

            <div>
                <input type="button" name="playlist-created" value="Create" className="create-button" />
            </div>
        </div>

        <div className="my-playlist">
            <h1 className="h1-my-playlist">My Playlist</h1>

            <div className="navbar-playlist">
                <Link class="nav-link-playlist" href="#playlist-songs">My songs</Link>
                <div className="hidden-slider">

                </div>
                <Link class="nav-link-playlist" href="#playlist-songs">Sad songs</Link>
                <Link class="nav-link-playlist" href="#playlist-songs">Soothing songs</Link>
                <Link class="nav-link-playlist" href="#playlist-songs">Lofi songs</Link>
                <Link class="nav-link-playlist last" href="#playlist-songs">Heartbreak songs</Link>
            </div>

            <h1 className="h1-my-playlist">Other's Playlist</h1>
            <div className="navbar-playlist">
                <Link class="nav-link-playlist" href="#playlist-songs">My songs</Link>
                <Link class="nav-link-playlist" href="#playlist-songs">Sad songs</Link>
                <Link class="nav-link-playlist" href="#playlist-songs">Soothing songs</Link>
                <Link class="nav-link-playlist" href="#playlist-songs">Heartbreak songs</Link>
            </div>
        </div>

    </div>
  );
};
