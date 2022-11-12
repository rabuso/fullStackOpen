const Header = (props) => (
   <h1>{props.course}</h1>
)

const Content = (props) => 
(
  props.parts.map( (item, key) => 
  <p key={key}>  {item.name} {item.exercises} </p>)
  
)

/* Calculate Total with reduce fn */

const Total = (props) => {
  let tot = props.total.reduce((sum, elem) => sum + elem.exercises , 0)
return (<p>Number of exercises {tot}</p>)
}

/*
const Total = (props) => (
<p>Number of exercises {
 props.total[0].exercises +
 props.total[1].exercises + 
 props.total[2].exercises}</p>
)
*/

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total total={course.parts} />
    </div>
  )
}

export default App
