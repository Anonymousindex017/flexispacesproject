'use client';
import React from 'react';
import { useFormik } from 'formik';
import Link from 'next/link';
import * as Yup from 'yup';

const sighupValidationSchema = Yup.object().shape(
  {
    
    name : Yup.string().min(3,'3 Character Kam Nahi').max(20,'20 Character Se Jyada Nahi').required('Apna Name Likhna Bhool Gaye !'),
    lname : Yup.string().required("Last Name is required"),
    cnumber :  Yup.number().min(10, "Phone number must be at least 10 digits").required( "Contact Number is Required"),
    email : Yup.string().email('Invalid Email').required( 'Apna Email Banao'),
    password : Yup.string().min(6,'6 Character Kam Nahi !').max(12,'12 Character Se Jyada Nahi').required('Phle Password Set Karo !')
    .matches(/[A-Z]/,'Password mudt contain uppercase letter')
    .matches (/[a-z]/, 'Password must contain lowercase letter')
    .matches(/[0-9]/, 'Password must contain number'),

    cpassword : Yup.string().required('Phle Password Set Karo !')
    .oneOf([Yup.ref('password'),null],'Password must cotain matches')

  }
);
const Signup = () => {

  const signupForm = useFormik (
    {
      initialValues : {
        
        name : '',
        lname:'',
        cnumber:'',
        email :'',
        password : '',
        cpassword: ''
      },
      onSubmit : (values) => {
        console.log(values);
        //send data to backend
      },
      validationSchema:sighupValidationSchema
    }
  )


  return (
    <section className="vh-100 bg-primary-subtle">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col">
            <div className="card shadow my-4">
              <div className="row g-0">
                <div className="col-xl-6 d-none d-xl-block">
                  <div style={{
                    backgroundImage: `url('https://assets.materialup.com/uploads/7563d4bc-0ed9-4202-a86c-ac8dc46e73ef/preview.jpg')`,
                    height: '100%',
                    backgroundPosition: 'center',
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat'
                  }}>

                  </div>
                  {/* <img
                    src="https://assets.materialup.com/uploads/7563d4bc-0ed9-4202-a86c-ac8dc46e73ef/preview.jpg"
                    alt="Sample"
                    className="img-fluid"
                  /> */}
                </div>
                <div className="col-xl-6">

                  <div className="card-body p-md-5">
                    <h3 className="mb-5 text-primary fw-bold  fs-1">
                      Registration Form
                    </h3>
                    <form onSubmit={signupForm.handleSubmit}>

                      
                      <div className="mb-3">
                        <div className='row'>
                        <div className='col-6'>
                        <label for="" className="form-label">Name</label>
                        <input
                          type="text"
                          id="name"
                          onChange={ signupForm.handleChange }
                          value={signupForm.values.name}
                          className="form-control"
                          placeholder="Apna Naam Likhe !"
                        />{ signupForm.touched.name &&
                          <small className="text-danger">{signupForm.errors.name}</small>
                          }
                        </div>
                        <div className='col-6'>
                        <label for="" className="form-label">Last Name</label>
                        <input
                          type="text"
                          id="lname"
                          onChange={ signupForm.handleChange }
                          value={signupForm.values.lname}
                          className="form-control"
                          placeholder="Apna Last Naam Likhe !"
                        />{ signupForm.touched.lname &&
                          <small className="text-danger">{signupForm.errors.lname}</small>
                          }
                        </div>
                        </div>
                     </div>
                      <div className="mb-3">
                        <label for="" className="form-label">Contact Number</label>
                        <input
                          type="number"
                          id="cnumber"
                          onChange={ signupForm.handleChange }
                          value={ signupForm.values.cnumber }
                          className="form-control"
                          placeholder="Apna Password Banao !"
                        />{
                          signupForm.touched.cnumber &&
                        <small className="text-danger">{signupForm.errors.cnumber}</small>
                        }
                      </div>
                      <div className="mb-3">
                        <label for="" className="form-label">Email Address</label>
                        <input
                          type="text"
                          id="email"
                          onChange={ signupForm.handleChange }
                          value={signupForm.values.email}
                          className="form-control"
                          placeholder="Apna New Email Likhe !"
                        />
                        {
                          signupForm.touched.email &&
                        <small className="text-danger">{signupForm.errors.email}</small>
                        }
                      </div>
                      <div className="mb-3">
                        <label for="" className="form-label">Password</label>
                        <input
                          type="password"
                          id="password"
                          onChange={ signupForm.handleChange }
                          value={ signupForm.values.password }
                          className="form-control"
                          placeholder="Apna Password Banao !"
                        />{
                          signupForm.touched.password &&
                        <small className="text-danger">{signupForm.errors.password}</small>
                        }
                      </div>
                      <div className="mb-3">
                        <label for="" className="form-label">Confirm Password</label>
                        <input
                          type="password"
                          id="cpassword"
                          onChange={signupForm.handleChange}
                          value={signupForm.values.cpassword}
                          className="form-control"
                          placeholder="Dubara Password Likhe !"
                        />{
                          signupForm.touched.cpassword &&
                        <small className="text-danger">{signupForm.errors.cpassword}</small>
                        }
                      </div>
                      <div className="form-check mb-4">
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          defaultValue=""
                          id="form2Example33"
                          defaultChecked=""
                        />
                        <label
                          className="form-check-label"
                          htmlFor="form2Example33"
                        >
                          I Agree to Terms & Conditions
                        </label>
                      </div>
                      <div className="d-flex justify-content-end pt-3">
                        <button type="button" className="btn btn-light">
                          Reset all
                        </button>
                        <button type="submit" className="btn btn-primary ms-2">
                          Submit form
                        </button>
                      </div>
                    </form>

                    <p>Already Registered? <Link href='/login'>Login Here</Link></p>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Signup;