/* eslint-disable react/prop-types */
import Card from '../Card/Card'
export default function Cards({ users }) {
  const user = users.map((user) => <Card key={user.id} user={user} />)

  return user
}
