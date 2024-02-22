import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from './features/Users/UsersHandler'
import Cards from './components/Cards/Cards'
import { AppDispatch, RootState } from './app/store'

function App(): JSX.Element {
  const dispatch = useDispatch<AppDispatch>()
  const { users } = useSelector<RootState, RootState['users']>(
    (state) => state.users
  )

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  return (
    <div className='flex flex-col items-center'>
      <h1 className='p-8 text-5xl'>Users list</h1>
      <section className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12'>
        <Cards users={users} />
      </section>
    </div>
  )
}

export default App
