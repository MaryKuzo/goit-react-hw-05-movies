import { Link } from "react-router-dom"
const GoBackButton = ({backLinkLocationRef}) => {
  return (
    <div>
      <Link to={backLinkLocationRef}>
        Go back
      </Link>
    </div>
  )
}
export default GoBackButton
