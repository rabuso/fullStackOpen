import Header from './Header'

const Course = ({courses}) => 
     <><h1>Web Dev CV</h1>
      {courses.map( (course) => <Header key={course.id} title={course.name} part={course.parts} />)}
     </>
        
  

  export default Course