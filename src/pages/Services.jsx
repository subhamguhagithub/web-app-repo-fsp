import React, { useEffect, useState } from 'react'

function Services() {
  const [value, setValue] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log("Services Component will mount")
    return () => {
      console.log("Services Component will unmount")
    }
  }, [])

  useEffect(() => {
    if (count !== 0) {
      console.log(`Services Component Updated - count is now: ${count}`)
    }
  }, [count])

  const handleIncrement = () => {
    setValue(value + 1)
  }

  const handleDecrement = () => {
    setValue(value - 1)
  }

  console.log("value", value)

  return (
    <div style={{ textAlign: "center" }}>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Deccrement</button>
      <h2>{value}</h2>
      <hr />
        
      <h2>component life cycle</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase count</button>
      
      {/*Tailwindcss Example*/}
      <hr/>
      <div className='font-sans text-gray-800'>
        <nav className='bg-white shadow-md w-full z-10'>
          <div
          className='container mx-auto px-6 py-4 flex justify-between items-center'>
            <h1 className="text-2xl font-bold text-blue-600">MyWebsite</h1>
            <div  className="space-x-6 hidden md:flex">
              <a href="#" className="hover:text-blue-600">Home</a>
              <a href="#" className="hover:text-blue-600">About</a>
              <a href="#" className="hover:text-blue-600">Services</a>
              <a href="#" className="hover:text-blue-600">Contact</a>
            </div>
            <button className="md:hidden text-blue-600">
              Navbar
            </button>
          </div>
        </nav>
{/* Hero Section */}
<section className="pt-20 bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-600 h-screen flex flex-col items-center justify-center text-center">
  <h2 className="text-4xl md:text-6xl font-bold text-black">
    Our First Website using Tailwind
  </h2>

  <p className="text-lg md:text-xl mt-4 text-black">
    Our development makes development fast and beautiful
  </p>

  {/* New Button */}
  <button className="mt-6 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition duration-300">
    New Button
  </button>
</section>
{/* Features Section using Grid */}
<section className="pt-32 pb-20 bg-gray-100">
  <div className="container mx-auto px-6 text-center">

    <h2 className="text-3xl md:text-4xl font-bold mb-12">
      Our Features
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

      {/* Card 1 */}
      <div className="bg-white p-8 rounded-xl shadow-md">
        <h3 className="text-xl font-semibold mb-4">
          Fast Development
        </h3>
        <p className="text-gray-600">
          Build responsive layouts quickly using Tailwind utility classes.
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-white p-8 rounded-xl shadow-md">
        <h3 className="text-xl font-semibold mb-4">
          Fast Development
        </h3>
        <p className="text-gray-600">
          Build responsive layouts quickly using Tailwind utility classes.
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-white p-8 rounded-xl shadow-md">
        <h3 className="text-xl font-semibold mb-4">
          Fast Development
        </h3>
        <p className="text-gray-600">
          Build responsive layouts quickly using Tailwind utility classes.
        </p>
      </div>

    </div>

  </div>
</section>
{/* Footer */}
<footer className="bg-gray-800 text-white py-6">
  <div className="container mx-auto px-6 text-center">
    <p className="text-sm">
      © 2026 MyWebsite. All rights reserved.
    </p>
  </div>
</footer>

     </div>
    </div>
  );
}

export default Services