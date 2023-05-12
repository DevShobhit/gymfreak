import { useSelector } from 'react-redux'
import DashBoardNavbar from '../components/common/dashboardnavbar'

function WorkoutPlans() {
  const workoutplans = useSelector(
    (state) => state.workoutplans.allworkoutplans
  )

  return (
    <>
      <DashBoardNavbar />
      <div className='flex max-w-5xl mx-auto flex-col items-center  py-2 min-h-screen'>
        <div className='flex flex-1 w-full flex-col items-center  text-center px-4 mt-12 sm:mt-20'>
          <h1 className='sm:text-6xl text-4xl max-w-2xl font-bold text-slate-900'>
            Explore all{' '}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600'>
              workout plans
            </span>{' '}
            💪
          </h1>
        </div>
        <div className='px-10'>
          {workoutplans.map((workoutplan) => (
            <div key={workoutplan.id} className='mt-10'>
              <div className='flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100'>
                <img
                  className='object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg'
                  src={workoutplan.image}
                  alt=''
                />
                <div className='flex flex-col justify-between p-4 leading-normal'>
                  <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900'>
                    {workoutplan.name}
                  </h5>
                  <p className='mb-2 font-normal text-gray-700'>
                    {workoutplan.description}
                  </p>
                  <button className='bg-black rounded-xl text-white font-medium px-4 py-2 sm:mt-10 mt-8 hover:bg-black/80 w-full'>
                    <a href='/workoutdetails'>See Details</a>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default WorkoutPlans
