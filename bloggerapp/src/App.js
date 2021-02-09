import logo from './logo.svg';
import './App.css';
import { CourseDetails } from './Components/CourseDetails';
import { BookDetails } from './Components/BookDetails';
import { BlogDetails } from './Components/BlogDetails';

function App() {

  const books=[
    {
      id:1,
      bname:"Master React",
      price: 670
    },
    {
      id:2,
      bname:"Deep dive Into Angular 11",
      price: 800
    },
    {
      id:3,
      bname:"Mongo Essentials",
      price: 400
    }
  ];

  const blogs=[
    {
      id:1,
      bname:"React Learning",
      instructor:"Stephen Biz",
      instruction:"Welcome to learning React"
    },
    {
      id:2,
      bname:"Installation",
      instructor:"Schweristinger",
      instruction:"You can install react from npm"
    }
  ];

  const courses=[
    {
      id:1,
      cname:"Angular",
      cdate: "4/5/2021"
    },
    {
      id:2,
      cname:"React",
      cdate: "6/3/2021"
    }
  ];

  return (
    <div className="App">
      <CourseDetails courses={courses}/>
      <BookDetails books={books}/>
      <BlogDetails blogs={blogs}/>
    </div>
  );
}

export default App;
