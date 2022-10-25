import React from 'react'
import "./FindFriend.css"
import ImageSlider from "./ImageSlider";
import MultiSlider from "./MultiSlider";
export const FindFriend = () => {
  const slides = [
    { url: "https://media.istockphoto.com/photos/young-female-rockstar-singing-in-concert-picture-id1268215945?b=1&k=20&m=1268215945&s=170667a&w=0&h=yWiwtFTs2VbGD7X72HcDVllCQMBXjSQ-65ubA9z6aww=", title: "Taylor Swift" },
    { url: "https://images.unsplash.com/photo-1442328166075-47fe7153c128?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODN8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60", title: "Alec Benjamin" },
    { url: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA5fHxwZW9wbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60", title: "Avril Lavigne" },
    { url: "https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c2luZ2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60", title: "Enrique Iglesias" },
    { url: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60", title: "Halsey" },
  ];
 
  const containerStyles = {
    width: "800px",
    height: "500px",
    margin: "0 auto",
  };
  return (
    <div>
      <h1>Who To Follow</h1>
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
      <MultiSlider/>
    </div>
  );
}

