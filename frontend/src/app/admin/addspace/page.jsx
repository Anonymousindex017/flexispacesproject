'use client';
import React from 'react'

const addspace = () => {
  return (
    <div>
        <>
  {/* Card Section */}
  <div className="max-w-2xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    {/* Card */}
    <div className="bg-white rounded-xl shadow p-4 sm:p-7 dark:bg-slate-900">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-200">
          Add Space
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Manage your Space.
        </p>
      </div>
      <form>
        {/* Section */}
        <div className="py-6 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200 dark:border-gray-700 dark:first:border-transparent">
          <label
            htmlFor="af-payment-billing-contact"
            className="inline-block text-sm font-medium dark:text-white"
          >
            Catagory
          </label>
          <div className="mt-2 space-y-3">
          <select className="py-2 px-3 pe-9 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600">
                <option selected="">space</option>
                <option> Classroom</option>
                <option>Meeting Room</option>
                <option>Interview Room</option>
              </select>
          </div>
        </div>
        {/* End Section */}
        {/* Section */}
        <div className="py-6 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200 dark:border-gray-700 dark:first:border-transparent">
          <label
            htmlFor="af-payment-billing-address"
            className="inline-block text-sm font-medium dark:text-white"
          >
            Address
          </label>
          <div className="mt-2 space-y-3">
            <input
              id="af-payment-billing-address"
              type="text"
              className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
              placeholder="Street Address"
            />
            <input
              type="text"
              className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
              placeholder="Apt, Syuite, Building (Optional)"
            />
            <div className="grid sm:flex gap-3">
              <input
                type="text"
                className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                placeholder="Area Code"
              />
              <select className="py-2 px-3 pe-9 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600">
                <option selected="">City</option>
                <option>City 1</option>
                <option>City 2</option>
                <option>City 3</option>
              </select>
              <select className="py-2 px-3 pe-9 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600">
                <option selected="">State</option>
                <option>State 1</option>
                <option>State 2</option>
                <option>State 3</option>
              </select>
            </div>
          </div>
        </div>
        {/* End Section */}
        {/* Section */}
        <div className="py-6 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200 dark:border-gray-700 dark:first:border-transparent">
          <label
            htmlFor="af-payment-payment-method"
            className="inline-block text-sm font-medium dark:text-white"
          >
            Price details
          </label>
          <div className="mt-2 space-y-3">
            <input
              id="af-payment-payment-method"
              type="text"
              className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
              placeholder="By Square Feet"
            />
            <input
              type="text"
              className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
              placeholder="fix Size"
            />
          </div>
        </div>
        {/* End Section */}
      </form>
      <div className="mt-5 flex justify-end gap-x-2">
        <button
          type="button"
          className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
        >
          Cancel
        </button>
        <button
          type="button"
          className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
        >
          Submit
        </button>
      </div>
    </div>
    {/* End Card */}
  </div>
  {/* End Card Section */}
</>

    </div>
  )
}

export default addspace;