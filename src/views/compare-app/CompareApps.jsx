import React from 'react';
import { Link, useParams } from "react-router-dom";
import Apps from "../../data/app.json";


// const Apps = [

//     {
//         "device": "mobil",
//         "id": "com.google.android.keep",
//         "app_name": "Google Keep",
//         "app_category": "Productivity",
//         "app_developer": "Google LLC",
//         "num_downloads": "1,000,000,000+",
//         "app_description": "Quickly capture what’s on your mind and get a reminder later at the right place or time. Speak a voice memo on the go and have it automatically transcribed. Grab a photo of a poster, receipt or document and easily organize or find it later in search. Google Keep makes it easy to capture a thought or list for yourself, and share it with friends and family.\n \n Capture what’s on your mind\n • Add notes, lists and photos to Google Keep. Pressed for time? Record a voice memo and Keep will transcribe it so you can find it later.\n Share ideas with friends and family\n • Easily plan that surprise party by sharing your Keep notes with others and collaborating on them in real time.\n Find what you need, fast\n • Color and add labels to code notes to quickly organize and get on with your life. If you need to find something you saved, a simple search will turn it up.\n Always within reach\n • Keep works on your phone, tablet, computer and Android wearables. Everything you add syncs across all of your devices so your thoughts are always with you.\n The right note at the right time\n • Need to remember to pick up some groceries? Set a location-based reminder to pull up your grocery list right when you get to the store.\n Available everywhere\n • Try Google Keep on the web at http://keep.google.com and find it in the Chrome Web Store at http://g.co/keepinchrome.",
//         "app_page_link": "https://play.google.com/store/apps/details?id=com.google.android.keep",
//         "rating": 4.3,
//         "photos": [
//           "https://play-lh.googleusercontent.com/qW1OCeXIVPbBFRtmiUSYhzRfhwEV1CwJa5367zJjBwHktdp1l_tXG1zHWC5Xn4wJYQ",
//         ],
//         "app_icon": "https://play-lh.googleusercontent.com/9bJoeaPbGTB8Tz_h4N-p-6ReRd8vSS-frZb2tmJulaGIoTKElKj3zpmcFJvnS96ANZP5",
//         "num_downloads_exact": 1973056945,
//         "app_content_rating": "Everyone",
//         "num_reviews": 1438584,
//         "reviews_per_rating": {
//           "1": 157792,
//           "2": 61199,
//           "3": 117103,
//           "4": 173901,
//           "5": 928580
//         },
//         "type": "Web"
//       },
//       {
//         "device": "mobil",
//         "id": "com.atomczak.notepat",
//         "app_name": "Notepad",
//         "app_category": "Productivity",
//         "app_developer": "atomczak",
//         "num_downloads": "10,000,000+",
//         "app_description": "Notepad is a small and fast notetaking app for making notes, memos, or just any plain text content. Features:\n* simple interface that most of the users find easy to use\n* no limits on note's length or number of notes (of course there's a limit to phone's storage)\n* creating and editing text notes\n* importing notes from txt files, saving notes as txt files\n* sharing notes with other apps (e.g. sending a note in Gmail)\n* notes widget allowing to quickly create or edit notes, working like post it notes (stick a memo to home screen)\n* backup function for saving and loading notes from a backup file (zip file)\n* app password lock\n* color themes (including dark theme)\n* note categories\n* automatic note saving\n* undo/redo\n* lines in background, numbered lines\n* technical support\n* search function that can quickly find text in notes\n* unlock app with biometrics (e.g. fingerprint)\n\n** Important **\nPlease remember to make a backup copy of notes before formatting a phone or buying a new phone. Since the 1.7.0 version the app will also use Google device copy, if it's turned on in the device's and the app's settings.\n\n* Why do I advise to not install the app on an SD card?\nI follow Google's advice to block installing on an SD card apps that use widgets. This app uses widgets, which are like icons for the notes, and can be placed on a phone's home screen (for example).\n\n* Why is the permission for writing on SD card listed on the permissions list?\nIt's currently not used. It was an optional permission for cases when a backup copy was to be saved on the device. Play Store shows historical permissions, even if it's no longer in use by the app.\nPlease remember that the permission can be revoked at any moment by going into the app's settings. Also, the app will ask for the permission when needed.\n\nIf you have any additional questions, just contact me by email: notepad.free@outlook.com .\n\nThank you.\nArek",
//         "app_page_link": "https://play.google.com/store/apps/details?id=com.atomczak.notepat",
//         "rating": 3.9,
//         "photos": [
//           "https://play-lh.googleusercontent.com/9C9Fr5PY2WKMobEqBTUxBTbqaxNIh_3MOMm3M5pBiLm2X9NgdUEHjiEZ54mHyCIH9Q", 
//         ],
//         "app_icon": "https://play-lh.googleusercontent.com/EQ8s_EFKWDgDQxwE_eseKUq-jCsYiR9gOVzV1RSpJBFgmkqSgSH4-w8IyTW-FuYliQ",
//         "num_downloads_exact": 17332440,
//         "num_reviews": 52510,
//         "reviews_per_rating": {
//           "1": 2698,
//           "2": 874,
//           "3": 2167,
//           "4": 5512,
//           "5": 41249
//         },
//         "type": "Desktop"
//       },
//     ];

//     console.log (Apps);
    


function CompareApp() {

  

    function compareRanking (){
        if (Apps[0].rating > Apps[1].rating){
            return `La App mejor puntuada es ${Apps[0].app_name} con un rating de ${Apps[0].rating}`;
        }

        else if (Apps[0].rating === Apps[1].rating) {
            return "Las dos Apps tienen la mismas puntuación."
        }
        else {
            return `La App mejor puntuada es ${Apps[1].app_name} con un rating de ${Apps[1].rating}`
        };

    };


    const { id } = useParams();
    const FindApp = Apps.filter((apps) => id === ":"+apps.id);

  console.log(FindApp)

  return (
    <>
    <h1>{FindApp[0].app_name}</h1>
    <img src= {FindApp[0].app_icon} alt="App Icon" />
    <h3>{FindApp[0].type}</h3>


    
    </>
  )

};


export default CompareApp