import React from 'react'


export default function Home(){
    return (
        <div className="d-flex flex-column text-center mx-auto mt-5 justify-content-center align-items-center border shadow-sm">
            <div>
                <h1>Welcome to Hogwarts School</h1>
            </div>

            <div className="w-50 text-center">
                <p>Teachers please use the links on the top right corner to add scores or to add details of new student admit</p>
            </div>
        </div>
    )
}