import React, {useState} from "react";
// import { useForm } from "@formspree/react";
// import digital from "./images/digital.jpeg";
import avant_me from "./images/avant_me.jpg";
import axios from "axios";
import './button.css';

export default function Signup(){

const [status, setStatus] = useState({
  submitted: false,
  submitting: false,
  info: { error: false, msg: null }
})
const [inputs, setInputs] = useState({
  name: '',
  email: ''
})

const handleServerResponse = (ok, msg) => {
  if (ok){
    setStatus({
      submitted: true, 
      submitting: false,
      info: {error: false, msg: msg}
    })
    setInputs({
      name: '',
      email: ''
    }) 
  } else {
      setStatus({
        info: { error: true, msg: msg }
      })
    }
  }

  const handleOnChange = e => {
    e.persist()
    setInputs(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }))
    setStatus({
      submitted: false,
      submitting: false,
      info: {error: false, msg: null}
    })
  }
  const handleOnSubmit = e => {
    e.preventDefault()
    setStatus(prevStatus => ({ ...prevStatus, submitting: true }))
    axios({
      method: 'POST',
      url: 'https://formspree.io/p/1935891009925807142/f/signup-app',
      data: inputs
    })
    .then(response => {
      handleServerResponse(
        true,
        'Thank You, your email was received.'
      )
    })
    .catch(error => {
      handleServerResponse(false, error.response.data.error)
    })
  }


  return (
    <section>
    <div className="container">
        <div className="row">
        <div className="col-lg-7 offset-lg-2 g-0 mx-auto">
            <div className="fill-form form-box">
            <div className="row g-0">
                <div className="col-xl-6 col-lg-12 d-md-none d-sm-none d-xs-none d-lg-block form-box__img">
                <img alt="" src={avant_me} />
             </div>
                <div className="col-xl-6 col-lg-12 col-md-12 form-box__content">
                <div id="box-title">
                    <p className="main-form-text">Stay up to date</p>
                    <p>Enter your information below</p>
                </div>
                <form onSubmit={handleOnSubmit}>
                     <div className="mt-3">
                       <label>Enter your name</label>
                    <input
                        className="form-control"
                        id="name"
                        name="_name"
                      placeholder="Your name.."
                        type="text"
                        onChange={handleOnChange}
                        required
                        value={inputs.name}                      
                    />
                    </div> 
                    <div className="mt-3">
                      <label> Enter your email</label>
                    <input
                        class="form-control"
                     id="email"
                        placeholder="Your email.."
                        type="email"
                        name="_replyto"
                        onChange={handleOnChange}
                        required
                        value={inputs.message}
                    />
                    </div>
                    <div className="d-grid mt-4">
                    <div class="wrapper">
                    <button type="submit" class="brutal-btn" value="Send Now" 
                      disabled={status.submitting}>
                          {!status.submitting
                            ? !status.submitted
                            ? 'Submit'
                          : 'Submitted'
                        : 'Submitting...'}

                    </button>
                    </div>
                    </div>
                  </form>
                  {status.info.error && (
        <div className="error">Error: {status.info.msg}</div>
      )}
      {!status.info.error && status.info.msg && <p>{status.info.msg}</p>}                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
    </section>
  );
};
