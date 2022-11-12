import { useState } from 'react'

const Button = (props) => (
  <>
    <button onClick={props.onClick}>
      {props.text}
    </button>
  </> 
)

const StatisticLine = (props) => (
  
  <tr>
     <td>{props.text} </td>
     <td>{props.value} </td>
  
  </tr>
   
   )

const Statistics = (props) => {

  const sumStat = () => props.good + props.neutral + props.bad
  const averageStat = () => (sumStat())/3
  const positiveStat = () => props.good/sumStat()*100 + " %"

  if (sumStat() === 0)
    return(
    <div>
    <h1>Statistics</h1>
    <table>
      <tbody> 
           <StatisticLine text="No feedback given" />
      </tbody>
    </table>
   </div>
  )
  return(
   <div>
    <h1>Statistics</h1>
    <table>
      <tbody> 
        <StatisticLine text="good" value={props.good} />
        <StatisticLine text="neutral" value={props.neutral} />
        <StatisticLine text="bad" value={props.bad} />
        <StatisticLine text="all" value={sumStat()} />
        <StatisticLine text="average" value={averageStat()} />
        <StatisticLine text="positive" value={positiveStat()} />
      </tbody>
    </table>
  </div>
)  }


const App = () => {
  // enregistrer les clics de chaque bouton dans un état différent
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGood = () => setGood(good + 1)
  const increaseNeutral = () => setNeutral(neutral+ 1)
  const increaseBad = () => setBad(bad + 1)

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button        
          onClick={increaseGood}        
          text='good'      
      />      
      <Button        
          onClick={increaseNeutral}        
          text='neutral'      
      />           
      <Button        
          onClick={increaseBad}        
          text='bad'      
      />     
      <Statistics good = {good} neutral = {neutral}  bad = {bad}  />    
    </div>
  )
}

export default App
