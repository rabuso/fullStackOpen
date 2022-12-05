import { v4 } from 'uuid'
const Part = ({name, ex}) => <p key={v4()}>{name} {ex}</p>
export default Part
