import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar(){


    return (
        <div className="container-fluid p-0">
            <div className="d-flex border w-100 shadow-sm align-items-center py-3">

                <div className="ml-2">
                    <h4>Hogwarts School</h4>
                </div>

                <div className="ml-auto mr-3">
                    <Link to = "/">Home</Link>
                </div>

                <div className="mr-3 text-center">
                    <Link to ="/addscores">Add Scores</Link>
                </div>

                <div className="text-center">
                    <Link to ="/addadmits">Add Admits</Link>
                </div>

            </div>
        </div>
    )
}