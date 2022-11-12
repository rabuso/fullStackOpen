import Content from './Content'

const Header = ({title, part}) => 
<><h2>{title}</h2>
<h3><Content parts={part} /></h3>
</>
export default Header