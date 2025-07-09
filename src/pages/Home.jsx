import React from 'react'

function Home() {
  return (
    <>
      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 w-[700px]">
        <div className="flex gap-1">
          <input type="text" className='border p-3 py-3 w-full rounded-l-xl focus:outline-none focus:border-neutral-500' placeholder='Ask ChatGPT' />
          <input type="submit" className='bg-black text-white py-3 px-5 rounded-r-xl' />
        </div>
        <p className='text-sm text-center mt-1 text-neutral-600'>This is an AI tool and can make mistake </p>
      </div>
    </>
  )
}

export default Home;
