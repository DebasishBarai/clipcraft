const Page = () => {
  return(
    <main className='min-w-full min-h-screen flex flex-col'>
      <div className='flex flex-row justify-end items-end'>
        <button className='bg-blue-800 rounded-sm text-xl text-white'>SignIn</button>
      </div>
      <div className='flex flex-col justify-center items-center'>
      <h1>Welcome to the Home page</h1>
      </div>
      </main>
  )
}

export default Page