import { User } from '../../types'

export default function Card({ user }: { user: User }) {
  return (
    <div className='flex flex-col p-4 w-96 bg-slate-800 shadow-md rounded-md border-l-2 border-slate-600 hover:bg-indigo-900 hover:shadow-lg hover:cursor-pointer transition'>
      <h3 className='pb-2 text-2xl text-cyan-600 '>{user.name}</h3>
      <p className='flex pb-0.5 justify-between'>
        Username: <span className='text-gray-400 '>{user.username}</span>
      </p>
      <p className='flex pb-0.5 justify-between'>
        Email: <span className='text-gray-400'>{user.email}</span>
      </p>
      <p className='flex pb-0.5 justify-between'>
        City: <span className='text-gray-400'>{user.address.city}</span>
      </p>
      <p className='flex pb-0.5 justify-between'>
        Phone number: <span className='text-gray-400'>{user.phone}</span>
      </p>
    </div>
  )
}
