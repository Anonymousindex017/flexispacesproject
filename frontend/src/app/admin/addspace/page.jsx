'use client';
import { useFormik } from 'formik';
import { enqueueSnackbar } from 'notistack';
import React from 'react';
import { array } from 'yup';

const addspace = () => {

  const addspaceForm = useFormik({
    initialValues: {
      location: String,
      category: String,
      area: Number,
      duration: String,
      price: String,
      services: array
    },
    onSubmit: (values) => {
      console.log(values);

      //sending request to backend

      fetch('http://localhost:5000/user/add', {
        method: 'POST',
        body: JSON.stringify(values), //covert js to json
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then((response) => {
          console.log(response.status);
          if (response.status === 200) {
            enqueueSnackbar("User Added Successfully", { variant: 'success' })
          } else {
            enqueueSnackbar("Somthing went wrong", { variant: 'error' })
          }
        }).catch((err) => {
          console.log(err);
          enqueueSnackbar("Somthing went wrong", { variant: 'error' })
        });
      // validationSchema: signupValidationSchema
    }
  })



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
            <form onSubmit={addspaceForm.handleSubmit}>
              {/* Section */}
              <div className="py-6 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200 dark:border-gray-700 dark:first:border-transparent">
                <label
                  htmlFor="contact"
                  className="inline-block text-sm font-medium dark:text-white"
                >
                  Catagory
                </label>
                <div className="mt-2 space-y-3">
                  <select
                    id='catagory'
                    className="py-2 px-3 pe-9 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600">
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
                  <textarea
                    id="address"
                    onChange={addspaceForm.handleChange}
                    rows={5}
                    value={addspaceForm.values.address}
                    className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                    placeholder="Address"
                  ></textarea>

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
                    id="price"
                    onChange={addspaceForm.handleChange}
                    value={addspaceForm.values.price}
                    type="number"
                    className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                    placeholder="By Square Feet"
                  />
                </div>
              </div>
              {/* End Section */}
              <div className="mt-5 flex justify-end gap-x-2">
                <button
                  type="button"
                  className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
          {/* End Card */}
        </div>
        {/* End Card Section */}
      </>

    </div>
  )
}

export default addspace;