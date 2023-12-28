import "../styles/pages.scss"
import PropTypes from 'prop-types'



export const PageTitle = ( {title}) => {
  return (
    <div className="pageTitle"><p>{title}</p></div>
  )
}
PageTitle.propTypes = {
    title: PropTypes.string
}