const Page = () => {
  return(
    <main className='min-w-full min-h-screen flex flex-col'>
  <div className='flex flex-row justify-end flex-grow-0'>
    <button className='bg-blue-900 p-4 text-xl text-white rounded-xl m-4'>SignIn</button>
  </div>
  <div className='flex flex-col justify-center items-center flex-grow text-4xl text-blue-400'>
    <h1>Welcome to <span className='text-blue-800 font-bold'>clipcraft</span> app</h1>
  </div>
</main>
  )
}

export default Page