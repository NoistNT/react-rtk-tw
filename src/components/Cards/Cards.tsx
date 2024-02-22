import { User } from '../../types'
import Card from '../Card/Card'
export default function Cards({ users }: { users: User[] }) {
  const user = users.map((user) => <Card key={user.id} user={user} />)

  return user
}
