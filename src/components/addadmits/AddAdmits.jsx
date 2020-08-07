import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {v4 as uuidv4} from 'uuid'


export default function Home(){
    const [student, setStudent] = useState({
        "id":"",
        "name":"",
        "gender":"",
        "grade":"",
        "section":""
    })

    useEffect(()=>{
        const fetchID = async() => {
            const fetchedId = await axios.get("/addadmits")
            console.log(fetchedId)
            setStudent({
                ...student,
                "id":fetchedId.data,
            })
        }
        fetchID()
    },[student])

    const handleChange = (e) => {
        setStudent({
            ...student,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        const sendStudent = await(axios.post("/addadmits", {
            ...student,
        }))

        if(sendStudent.data.status === 'success'){
            alert("Student details have been successfully added")
            window.location.reload(false)
        }
    }
    
    const section = ['A', 'B','C', 'D']
    const grade = ['I', 'II', 'III', 'IV', 'V','VI','VII','VIII','IX','X','XI','XII']
    return (
        <div>
            <form onSubmit = {(e)=>handleSubmit(e)}>
                <div className="d-flex flex-column w-50 text-center mx-auto mt-5">
                    <div className="my-2">
                        <input name="id"
                        value={student.id}
                        className = "form-control"
                        readOnly/>
                    </div>

                    <div className="my-2">
                        <input name="name"
                        placeholder="Name"
                        value={student.name}
                        onChange = {(e)=>handleChange(e)}
                        className = "form-control" />
                    </div>

                    <div className="my-2">
                        <select name="gender"
                        placeholder="Gender"
                        value={student.gender}
                        onChange = {(e)=>handleChange(e)}
                        className = "form-control">
                            <option>Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>

                    <div className="my-2">
                        <select name="grade"
                        value={student.grade}
                        className="form-control"
                        onChange = {(e)=>handleChange(e)}>
                            <option>Grade</option>
                            {grade.map(grade=>{
                                return <option key = {uuidv4()} value = {grade}>{grade}</option>
                            })}
                            
                        </select> 
                    </div>

                    <div className="my-2">
                        <select name="section"
                        value={student.section}
                        className="form-control"
                        onChange = {(e)=>handleChange(e)}>
                            <option>Section</option>
                            {section.map(section=>{
                                return <option key={uuidv4()} value={section}>{section}</option>
                            })}

                        </select>
                    </div>

                    <div className="my-2">
                        <button type="submit" className="btn btn-sm btn-success px-5 py-2">
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}