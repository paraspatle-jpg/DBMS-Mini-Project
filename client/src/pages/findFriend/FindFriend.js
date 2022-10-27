import React from 'react'
import MultiSlider from "./MultiSlider"
export const FindFriend = () => {
  
  const people=[
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1618641986557-1ecd230959aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTd8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1485981133625-f1a03c887f0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTAwfHxwcm9maWxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "",
  ];
  const people_names=["Enola","Bruno","Stanley","Stephanie","Jane"];
  return (
    <div>
        <div class="search-section">
          {/* <form class="search-form" action="index.html" method=""> */}
              <input type="text" class="search-form-text" placeholder="Search"/>
          {/* </form> */}
        </div>
      <h1>Who To Follow</h1>
      <MultiSlider/>
      <div>
      
      <div id="people">
      <h1>People You Follow</h1>

          <div class="card-content">
            <div class="image">
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"/>
            </div>
            <div class="name-profession">
              <span class="name">{people_names[0]}</span>
            </div>
            <div class="btn">
              <button class="unfollow-btn" >Unfollow</button>
             </div>
          </div>

          <div class="card-content">
            <div class="image">
              <img src={people[1]}/>
            </div>
            <div class="name-profession">
              <span class="name">{people_names[1]}</span>
            </div>
            <div class="btn">
              <button class="unfollow-btn">Unfollow</button>
             </div>
          </div>

          <div class="card-content">
            <div class="image">
              <img src={people[2]}/>
            </div>
            <div class="name-profession">
              <span class="name">{people_names[2]}</span>
            </div>
            <div class="btn">
              <button class="unfollow-btn">Unfollow</button>
             </div>
          </div>

          <div class="card-content">
            <div class="image">
              <img src={people[3]}/>
            </div>
            <div class="name-profession">
              <span class="name">{people_names[3]}</span>
            </div>
            <div class="btn">
              <button class="unfollow-btn">Unfollow</button>
             </div>
          </div>

          <div class="card-content">
            <div class="image">
              <img src={people[4]}/>
            </div>
            <div class="name-profession">
              <span class="name">{people_names[4]}</span>
            </div>
            <div class="btn">
              <button class="unfollow-btn">Unfollow</button>
             </div>
          </div>
     
    </div>
    </div>
    </div>
    
  );
}

