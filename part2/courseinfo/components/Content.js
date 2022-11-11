import Part from './Part'
const Content = ({parts}) => 
<>
    {parts.map( (part) => <Part key={part.id} name={part.name} ex={part.exercises} />)} 
    <p>Total of exercises: {parts.reduce( (sum, tot) => sum + tot.exercises, 0)}</p>
</>
export default Content