import React from 'react';
import BirthdayMessage from './components/BirthdayMessage';
import BirthdayData from './data/BirthdayData';
import birthdayImage from './birthday.jpeg';  // Import the image

class App extends React.Component {
  componentWillMount() {
    // Set the background color from BirthdayData
    document.body.style.background = BirthdayData.color;

    // Set the background image dynamically
    document.body.style.backgroundImage = `url(${birthdayImage})`;  // Add background image
    document.body.style.backgroundSize = 'cover';  // Ensure the image covers the entire body
    document.body.style.backgroundPosition = 'center';  // Center the image

    // Set the title and favicon
    document.querySelector('title').innerText = `Happy Birthday, ${BirthdayData.wishee}!`;
    document.querySelector('.favicon').href = `//dummyimage.com/64x64/${BirthdayData.color.substring(1)}/${BirthdayData.color.substring(1)}`;
    document.querySelector('.theme-color').content = BirthdayData.color;
  }

  render() {
    return (
      <div className='App'>
        <BirthdayMessage birthdayData={BirthdayData}/>
      </div>
    );
  }
}

export default App;
