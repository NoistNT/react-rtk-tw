import { User } from '@/types'
import Card from '@/components/Card/Card'

export default function Cards({ users }: { users: User[] }) {
  return users.map((user) => <Card key={user.id} user={user} />)
}
