const state = {
  users: [
  {
  "id": 1,
  "first_name": "Jordan",
  "last_name": "Peterson",
  "email": "jpete@email.com",
  "password": "password",
  "date_of_birth": "1992-02-15T05:00:00.000Z",
  "address": "Toronto",
  "gender": "Non-Binary",
  "about_me": "I love going out and making new friends!",
  "starsign": true,
  "vaccinated": true
  },
  {
  "id": 2,
  "first_name": "Yuti",
  "last_name": "Reswick",
  "email": "itsyuti@email.com",
  "password": "password",
  "date_of_birth": "1990-05-09T04:00:00.000Z",
  "address": "Brampton",
  "gender": "Male",
  "about_me": "I live for the Raptors. Hit me up if you wanna shoot some hoops",
  "starsign": false,
  "vaccinated": true
  },
  {
  "id": 3,
  "first_name": "Eva",
  "last_name": "Bell",
  "email": "evab@email.com",
  "password": "password",
  "date_of_birth": "1998-10-23T04:00:00.000Z",
  "address": "Vancouver",
  "gender": "Female",
  "about_me": "I love to hike and go on adventures!",
  "starsign": false,
  "vaccinated": true
  },
  {
  "id": 4,
  "first_name": "Adrian",
  "last_name": "Williams",
  "email": "awills@email.com",
  "password": "password",
  "date_of_birth": "1994-03-19T05:00:00.000Z",
  "address": "Toronto",
  "gender": "Male",
  "about_me": "Photography is my passion. Always down for a collab",
  "starsign": true,
  "vaccinated": false
  },
  {
  "id": 5,
  "first_name": "Alexa",
  "last_name": "Jones",
  "email": "alexajones@email.com",
  "password": "password",
  "date_of_birth": "1986-09-12T04:00:00.000Z",
  "address": "Scarborough",
  "gender": "Undisclosed",
  "about_me": "Always looking for book recommendations! Let me know what you are reading",
  "starsign": false,
  "vaccinated": true
  }
  ],
  interests: [
    {
    "id": 1,
    "user_id": 1,
    "books": true,
    "tv_movies": true,
    "fitness": false,
    "hiking": false,
    "arts_culture": true,
    "music": true,
    "gaming": true,
    "travel": false,
    "studying": true,
    "sports": false,
    "eating_out": false,
    "going_out": true,
    "other": false
    },
    {
    "id": 2,
    "user_id": 2,
    "books": false,
    "tv_movies": false,
    "fitness": false,
    "hiking": false,
    "arts_culture": true,
    "music": true,
    "gaming": false,
    "travel": false,
    "studying": false,
    "sports": true,
    "eating_out": false,
    "going_out": true,
    "other": false
    },
    {
    "id": 3,
    "user_id": 3,
    "books": true,
    "tv_movies": false,
    "fitness": true,
    "hiking": false,
    "arts_culture": true,
    "music": false,
    "gaming": false,
    "travel": false,
    "studying": true,
    "sports": true,
    "eating_out": false,
    "going_out": true,
    "other": false
    },
    {
    "id": 4,
    "user_id": 4,
    "books": false,
    "tv_movies": true,
    "fitness": false,
    "hiking": false,
    "arts_culture": true,
    "music": true,
    "gaming": false,
    "travel": false,
    "studying": true,
    "sports": false,
    "eating_out": true,
    "going_out": true,
    "other": false
    },
    {
    "id": 5,
    "user_id": 5,
    "books": true,
    "tv_movies": false,
    "fitness": false,
    "hiking": true,
    "arts_culture": true,
    "music": false,
    "gaming": true,
    "travel": false,
    "studying": false,
    "sports": true,
    "eating_out": true,
    "going_out": false,
    "other": false
    }
    ],
    photos: [
      {
      "id": 1,
      "user_id": 1,
      "photo1_url": "https://i.imgur.com/PkPhCXN.jpg",
      "photo2_url": "https://i.imgur.com/g7KhzFz.jpg",
      "photo3_url": "https://i.imgur.com/I28EmjM.jpg",
      "photo4_url": "https://i.imgur.com/ldA2mbz.jpg"
      },
      {
      "id": 2,
      "user_id": 2,
      "photo1_url": "https://i.imgur.com/YO0LKUk.jpg",
      "photo2_url": "https://i.imgur.com/fBgW4Du.jpg",
      "photo3_url": "https://i.imgur.com/dC2o99f.jpg",
      "photo4_url": "https://i.imgur.com/ldHo18O.jpg"
      },
      {
      "id": 3,
      "user_id": 3,
      "photo1_url": "https://i.imgur.com/zAkOsvd.jpg",
      "photo2_url": "https://i.imgur.com/vtL4mTg.jpg",
      "photo3_url": "https://i.imgur.com/AWjRkyr.jpg",
      "photo4_url": "https://i.imgur.com/s1es1cH.jpg"
      },
      {
      "id": 4,
      "user_id": 4,
      "photo1_url": "https://i.imgur.com/BB7vcgK.jpg",
      "photo2_url": "https://i.imgur.com/UIgzJIH.jpg",
      "photo3_url": "https://i.imgur.com/zkzV4Yk.jpg",
      "photo4_url": "https://i.imgur.com/fKKEwdz.jpg"
      },
      {
      "id": 5,
      "user_id": 5,
      "photo1_url": "https://i.imgur.com/msEdEpF.jpg",
      "photo2_url": "https://i.imgur.com/MVYCtJ6.jpg",
      "photo3_url": "https://i.imgur.com/oMTz2Ug.jpg",
      "photo4_url": "https://i.imgur.com/wvwQRr4.jpg"
      }
      ]
}; 

export function allUserInterests(state, user) {

  for (const category of state.interests) {

    if (category.user_id === user.id) {
      const interestsArray = Object.entries((category));

      const trueInterests = interestsArray.filter(([key, value]) => value === true)

      const filteredInterests = trueInterests.map( arr => arr[0])

      return filteredInterests
    }
  }
}

export function userAge(user) {
  const ageDifferenceMs = Date.now() - Date.parse(user.date_of_birth)
  const calculateAge = new Date(ageDifferenceMs);

  return Math.abs(calculateAge.getUTCFullYear() - 1970);
}

export function fullUserObject(state, newUser) {
  const userObject = {
    id: newUser.id,
    first_name: newUser.first_name,
    last_name: newUser.last_name,
    date_of_birth: newUser.date_of_birth,
    about_me: newUser.about_me,
    address: newUser.address,
    gender: newUser.gender,
    age: userAge(newUser),
    starsign: newUser.starsign,
    vaccinated: newUser.vaccinated
  };
    
    for (let category of state.interests) {

      if (category.user_id === newUser.id) {
        const userInterests = allUserInterests(state, newUser);
        userObject['interests'] = userInterests
      }
    }

    for (let photo of state.photos) {
      
      if (photo.user_id === newUser.id) {
        const userPhotos = [];
        userPhotos.push(photo.photo1_url, photo.photo2_url, photo.photo3_url, photo.photo4_url);
        userObject['photos'] = userPhotos;
      }
    }
  
  return userObject 
}

/*userObj
id
firstname
lastname
gender
age
interests: [array]
photos: [array]
*/

export function findUsersByInterest(state, interest) {
  const filteredUsers = []
  
  for (let user of state.users) {

    for (let category of state.interests) {

      if (category.user_id === user.id && category[interest]) {
         filteredUsers.push(user)
      }
    }
  }
  console.log(filteredUsers)
  return filteredUsers;
}

export function findPhotosByUser(state, user) {
  const photos = []

  for (let obj of state.users) {
    if (obj.id === user) {

      for (let pics of state.photos) {
        if (pics.user_id === user) {
          photos.push(pics.photo1_url, pics.photo2_url, pics.photo3_url, pics.photo4_url)
        }
      }
    }
  }
  return photos
}

// findUsersByInterest(state, 'books')

/*userObj
id
firstname
lastname
gender
age
interests: [array]
photos: [array]
*/
export function findZodiacSign(day, month) {
  const zodiacSign = "";
       
    // checks month and date within the
    // valid range of a specified zodiac
    if (month === "December") {    
        if (day < 22)
        zodiacSign = "Sagittarius";
        else
        zodiacSign = "Capricorn";
    }
           
    else if (month === "January") {
        if (day < 20)
        zodiacSign = "Capricorn";
        else
        zodiacSign = "Aquarius";
    }
           
    else if (month === "February"){
        if (day < 19)
        zodiacSign = "Aquarius";
        else
        zodiacSign = "Pisces";
    }
           
    else if(month === "March"){
        if (day < 21)
        zodiacSign = "Pisces";
        else
        zodiacSign = "Aries";
    }

    else if (month === "April"){
        if (day < 20)
        zodiacSign = "Aries";
        else
        zodiacSign = "Taurus";
    }
           
    else if (month === "May"){
        if (day < 21)
        zodiacSign = "Taurus";
        else
        zodiacSign = "Gemini";
    }
           
    else if( month === "June"){
        if (day < 21)
        zodiacSign = "Gemini";
        else
        zodiacSign = "Cancer";
    }
           
    else if (month === "July"){
        if (day < 23)
        zodiacSign = "Cancer";
        else
        zodiacSign = "Leo";
    }
           
    else if ( month === "August"){
        if (day < 23)
        zodiacSign = "Leo";
        else
        zodiacSign = "Virgo";
    }
           
    else if (month === "September"){
        if (day < 23)
        zodiacSign = "Virgo";
        else
        zodiacSign = "Libra";
    }
           
    else if (month === "October"){
        if (day < 23)
        zodiacSign = "Libra";
        else
        zodiacSign = "Scorpio";
    }
           
    else if (month === "November"){
        if (day < 22)
        zodiacSign = "Scorpio";
        else
        zodiacSign = "Sagittarius";
    }
           
    return zodiacSign;
}
