import React from "react";
import { useState } from "react";
import MultiSlider from "./MultiSlider";
export const FindFriend = () => {
  const [people, setPeople] = useState([
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1618641986557-1ecd230959aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTd8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1485981133625-f1a03c887f0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTAwfHxwcm9maWxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  ]);
  const people_names = ["Enola", "Bruno", "Stanley", "Stephanie", "Jane"];
  return (
    <div>
      <div class="search-section">
        <input type="text" class="search-form-text" placeholder="Search" />
      </div>
      <h1>Friend Suggestions</h1>
      <MultiSlider />
      <div>
        <div id="people">
          <h1>People You Follow</h1>
          {people.map((people, index) => {
            return (
              <div class="card-content">
                <div class="image">
                  <img alt="" src={people} />
                </div>
                <div class="name-profession">
                  <span class="name">{people_names[index]}</span>
                </div>
                <div class="btn">
                  <button class="unfollow-btn">Unfollow</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
