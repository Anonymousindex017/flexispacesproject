import React from 'react'

const bookingCard = () => {
  return (
    <div>
      <div className="mt-5 sm:mt-10 lg:mt-0">
        <div className="space-y-6 sm:space-y-8">
          <div className="max-w-sm mb-6 mx-auto my-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <h1 className='text-center'>Fill the details</h1>
            <div date-rangepicker="" className="flex items-center">
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </div>
                <input
                  name="start"
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Select date start"
                />
              </div>
              <span className="mx-4 text-gray-500">to</span>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </div>
                <input
                  name="end"
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Select date end"
                />
              </div>
            </div>
            <div className="mt-2 space-y-3">
              <select
                id='catagory'
                className="py-2 px-3 pe-9 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600">
                <option selected="">Space For</option>
                <option> Classroom</option>
                <option>Meeting Room</option>
                <option>Interview Room</option>
                <option>Confrence Room</option>
                <option>Event Room</option>
                <option>Training Room</option>
              </select>
            </div>
            <div className="mt-2 space-y-3">
              <select
                id='catagory'
                className="py-2 px-3 pe-9 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600">
                <option selected="">Person</option>
                <option> 1</option>
                <option> 2</option>
                <option> 3</option>
                <option> 4</option>
                <option> 5</option>
                <option> 6</option>
                <option> 7</option>
                <option> 8</option>
                <option> 9</option>
                <option> 10</option>
                <option> Under 15</option>
                <option> Under 20</option>
                <option> Under 30</option>
                <option> Under 50</option>
                <option> Under 80</option>
                <option> Under 100</option>
                <option> Under 120</option>
                <option> Under 150</option>
              </select>
            </div>
            <div className="mt-2 space-y-3">
              <select
                id='catagory'
                className="py-2 px-3 pe-9 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600">
                <option selected="">Services</option>
                <option>Transport Service</option>
                <option>Canteen </option>
                <option>Parking </option>
              </select>
            </div>
            <button
                    type="submit"
                    className="w-full py-2 px-2 my-5 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  >
                   Booking Confirm
                  </button>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default bookingCard;