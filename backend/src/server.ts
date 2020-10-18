import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

const courses = [
  {
    id: 1,
    title: 'Master English: Improve Your Speaking',
    src: '',
    rating: 1,
    lessons: 10
  },
  {
    id: 2,
    title: 'Master Angularjs: Improve Your Skills',
    src: '',
    rating: 2,
    lessons: 20
  },
  {
    id: 3,
    title: 'Master Nodejs: Build backend apps',
    src: '',
    rating: 3,
    lessons: 35
  },
  {
    id: 4,
    title: 'Master Vuejs: Build beautiful apps',
    src: '',
    rating: 4,
    lessons: 15
  },
  {
    id: 5,
    title: 'Master Reactjs: Build 20+ apps',
    src: '',
    rating: 5,
    lessons: 40
  },
  {
    id: 6,
    title: 'Master React Native: Build amazing apps',
    src: '',
    rating: 3,
    lessons: 12
  },
  {
    id: 7,
    title: 'Master Vuejs: Build beautiful apps',
    src: '',
    rating: 5,
    lessons: 15
  },
  {
    id: 8,
    title: 'Master Reactjs: Build 20+ apps',
    src: '',
    rating: 4,
    lessons: 40
  },
  {
    id: 9,
    title: 'Master React Native: Build amazing apps',
    src: '',
    rating: 3,
    lessons: 12
  },
  {
    id: 10,
    title: 'Master Vuejs: Build beautiful apps',
    src: '',
    rating: 4,
    lessons: 15
  },
  {
    id: 11,
    title: 'Master Reactjs: Build 20+ apps',
    src: '',
    rating: 5,
    lessons: 40
  },
  {
    id: 12,
    title: 'Master React Native: Build amazing apps',
    src: '',
    rating: 3,
    lessons: 12
  },
  {
    id: 13,
    title: 'Master Vuejs: Build beautiful apps',
    src: '',
    rating: 4,
    lessons: 15
  },
  {
    id: 14,
    title: 'Master Reactjs: Build 20+ apps',
    src: '',
    rating: 5,
    lessons: 40
  },
  {
    id: 15,
    title: 'Master React Native: Build amazing apps',
    src: '',
    rating: 3,
    lessons: 12
  },
  {
    id: 16,
    title: 'Master Vuejs: Build beautiful apps',
    src: '',
    rating: 4,
    lessons: 15
  },
  {
    id: 17,
    title: 'Master Reactjs: Build 20+ apps',
    src: '',
    rating: 5,
    lessons: 40
  },
  {
    id: 18,
    title: 'Master React Native: Build amazing apps',
    src: '',
    rating: 3,
    lessons: 12
  },
  {
    id: 19,
    title: 'Master Vuejs: Build beautiful apps',
    src: '',
    rating: 4,
    lessons: 15
  },
  {
    id: 20,
    title: 'Master Reactjs: Build 20+ apps',
    src: '',
    rating: 5,
    lessons: 40
  },
  {
    id: 21,
    title: 'Master React Native: Build amazing apps',
    src: '',
    rating: 3,
    lessons: 12
  },
  {
    id: 22,
    title: 'Master Vuejs: Build beautiful apps',
    src: '',
    rating: 4,
    lessons: 15
  },
  {
    id: 23,
    title: 'Master Reactjs: Build 20+ apps',
    src: '',
    rating: 5,
    lessons: 40
  },
  {
    id: 24,
    title: 'Master React Native: Build amazing apps',
    src: '',
    rating: 3,
    lessons: 12
  },
  {
    id: 25,
    title: 'Master Vuejs: Build beautiful apps',
    src: '',
    rating: 4,
    lessons: 15
  },
  {
    id: 26,
    title: 'Master Reactjs: Build 20+ apps',
    src: '',
    rating: 5,
    lessons: 40
  },
  {
    id: 27,
    title: 'Master React Native: Build amazing apps',
    src: '',
    rating: 3,
    lessons: 12
  },
  {
    id: 28,
    title: 'Master Vuejs: Build beautiful apps',
    src: '',
    rating: 4,
    lessons: 15
  },
  {
    id: 29,
    title: 'Master Reactjs: Build 20+ apps',
    src: '',
    rating: 5,
    lessons: 40
  },
  {
    id: 30,
    title: 'Master React Native: Build amazing apps',
    src: '',
    rating: 3,
    lessons: 12
  },
  {
    id: 31,
    title: 'Master Vuejs: Build beautiful apps',
    src: '',
    rating: 4,
    lessons: 15
  },
  {
    id: 32,
    title: 'Master Reactjs: Build 20+ apps',
    src: '',
    rating: 5,
    lessons: 40
  },
  {
    id: 33,
    title: 'Master React Native: Build amazing apps',
    src: '',
    rating: 3,
    lessons: 12
  },
]

app.get('/courses', (request, response) => {
  const { skip = 0, limit = 6 } = request.query;

  const coursesObj = courses.slice(Number(skip), (Number(skip) + Number(limit)));

  return response.json(coursesObj);
});

app.listen(3333, () => console.log('Server started on port 3333'));