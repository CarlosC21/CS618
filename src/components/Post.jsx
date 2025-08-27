import PropTypes from 'prop-types'
import { User } from './User.jsx'
export function Post({ title, contents, author: userid }) {
  return (
    <article>
      <h3>{title}</h3>
      <div>{contents}</div>
      {userid && (
        <em>
          <br />
          Written by <User id={userid} />
        </em>
      )}
    </article>
  )
}
Post.propTypes = {
  title: PropTypes.string.isRequired,
  contents: PropTypes.string,
  author: PropTypes.string,
}
