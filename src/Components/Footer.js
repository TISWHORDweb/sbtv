import React, { useState, useEffect } from 'react'
import LogOut from './LogOut'
import { Check } from '../Utils/Core'
import { Link } from 'react-router-dom'

function Footer() {
    const [check, setCheck] = useState()
    useEffect(() => {
        const Checked = Check()
        setCheck(Checked)
    }, [])
    return (
        <div>
            <div className="Footer">
                <div className="container">
                    <center>
                        <div className="top">
                            <h2 className='mb-4'>SBTV</h2>
                            <div className="links mb-3">
                                <ul>
                                    <Link to="/app"> <li className='white'>Home</li></Link>
                                    <Link to="/app/video/all"> <li className='white'>Video</li></Link>
                                    <Link to="#"> <li className='white'>About</li></Link>
                                    <Link to="#"> <li className='white'>Contact</li></Link>
                                </ul>
                            </div>
                            <div className="social mb-4">
                                <ul>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                                        </svg>
                                        Nigeria</li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                                            <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
                                        </svg>
                                        SBTV@gmail.com
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                                            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                                        </svg>
                                        Instagram
                                    </li>
                                </ul>
                            </div>
                            {check === "true" ?
                                <LogOut /> :
                                <></>
                            }
                            <hr />
                        </div>
                        <div className="middle mb-4">
                            <div className="row p-3">
                                <div className="col-md-1"></div>
                                <div className="col-md-4 ">
                                    <h4>Join to get free <br /> updates every <br /> week.</h4>
                                </div>
                                <div className="col-md-6">
                                    <div className="input">
                                        <input type="search" placeholder='Email Address' />
                                        <button className='bn632-hover bn21'>Subscribe</button>
                                    </div>
                                </div>
                                <div className="col-md-1"></div>
                            </div>
                        </div>
                        <div className="down">
                            <ul>
                                <li>©2024 SBTV</li>
                                <li>All rights Reserved</li>
                                <li>Privacy Policy | Terms Of Service</li>
                            </ul>
                        </div>
                    </center>
                </div>
            </div>
        </div>
    )
}

export default Footer