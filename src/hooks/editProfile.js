import axios from 'axios';
import { findPhotosByUser } from '../helpers/selectors';

export default function editProfile(user, gender, location, vaxxed, aboutMe, interests, image) {
  return (
    Promise.all([
      axios.put('http://localhost:8001/api/users', {
        ...user,
        gender: gender.gender,
        address: location.address,
        vaccinated: vaxxed.vaccinated,
        about_me: aboutMe.about_me,
        id: user.id
      }),
      axios.put('http://localhost:8001/api/interests', {
        ...interests,
        reading: interests.reading,
        tv_movies: interests.tv_movies,
        fitness: interests.fitness,
        hiking: interests.hiking,
        arts_culture: interests.arts_culture,
        music: interests.music,
        gaming: interests.gaming,
        travel: interests.travel,
        studying: interests.studying,
        sports: interests.sports,
        eating_out: interests.eating_out,
        going_out: interests.going_out,
        user_id: user.id
      }),
      axios.put('http://localhost:8001/api/photos', {
        ...image,
        photo1_url: image.photo1,
        photo2_url: image.photo2,
        photo3_url: image.photo3,
        photo4_url: image.photo4,
        user_id: user.id
      }),
    ]).then(() => {
      console.log('update user profile!')
    }).catch((e) => {
      console.log(e.message)
    })

  )
}