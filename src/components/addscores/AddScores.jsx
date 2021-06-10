import React, {useEffect, useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import {useLocation, useHistory} from 'react-router-dom'
import axios from 'axios'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import AddIcon from '@material-ui/icons/Add';
import styles from './AddScores.module.css'


export default function AddScores(){
    const [student, setStudent] = useState({
        "grade":"",
        "section": "",
        "exam": ""
    })

    const [fetchedData, setFetchedData] = useState([])

    const exam = ['Quarterly', 'Half-yearly', 'Annual']
    const section = ['A', 'B','C', 'D']
    const grade = ['I', 'II', 'III', 'IV', 'V','VI','VII','VIII','IX','X','XI','XII']
    const headers = ['ID', 'Name', 'Gender', 'Grade', 'Section']
    const location = useLocation()
    const history = useHistory()

    const query = new URLSearchParams(location.search)
    const gradeUrl = query.get('grade')
    const sectionUrl = query.get('section')
    const examUrl = query.get('exam')

    const handleChange = (e) => {
        setStudent({
            ...student,
            [e.target.name]: e.target.value
        })
    }
    
    useEffect(()=>{
        if(gradeUrl==="" && sectionUrl ==="" && examUrl === ""){
            return
        }
        else if((gradeUrl==="") || (sectionUrl ==="") || (examUrl === "")){
            alert("Please fill in all the details")
            return
        }
        
        const fetchData = async() => {
            const classDetails = await axios.get(`${process.env.REACT_APP_BACKEND_HOST}/addscores?grade=${gradeUrl}&&section=${sectionUrl}&&exam=${examUrl}`)
            setFetchedData(classDetails.data)
        }

        fetchData()
        
    },[gradeUrl, sectionUrl, examUrl])

    const handleSubmit = (e) => {
        e.preventDefault()
        history.push(`/addscores?grade=${student.grade}&&section=${student.section}&&exam=${student.exam}`)
    }    
    
    const handleAdd = (studid) => {
        history.push(`/addscores/${studid}?grade=${gradeUrl}&&section=${sectionUrl}&&exam=${examUrl}`)
    }

    const handleDelete = async(studid) => {
        const removeEntity = await axios.delete(`${process.env.REACT_APP_BACKEND_HOST}/addscores/${studid}?grade=${gradeUrl}&&section=${sectionUrl}&&exam=${examUrl}`)
        const message = removeEntity.data.message
        alert(message)
        window.location.reload(false)
    }
    return (
        <div>
            <form onSubmit={(e)=>handleSubmit(e)}>
                <div className="d-flex justify-content-center align-items-center mt-5">
                    <div className="mx-2">
                        <select name="grade"
                        value={student.grade}
                        className="form-control"
                        onChange = {(e)=>handleChange(e)}>
                            <option value="">Grade</option>
                            {grade.map(grade=>{
                                return <option key = {uuidv4()} value = {grade}>{grade}</option>
                            })}
                            
                        </select> 
                    </div>

                    <div className="mx-2">
                        <select name="section"
                        value={student.section}
                        className="form-control"
                        onChange = {(e)=>handleChange(e)}>
                            <option value="">Section</option>
                            {section.map(section=>{
                                return <option key={uuidv4()} value={section}>{section}</option>
                            })}

                        </select>
                    </div>

                    <div className="mx-2">
                        <select name="exam"
                        value={student.exam}
                        className="form-control"
                        onChange={(e)=>handleChange(e)}>
                            <option value="">Exam Category</option>
                            {exam.map(exam=>{
                                return <option key = {uuidv4()} value={exam}>{exam}</option>
                            })}
                        </select>
                    </div>

                    <div className="mx-2">
                        <button type = "submit" 
                        className="btn btn-sm btn-success px-2">Submit</button>
                    </div>
                </div>
            </form>

            <div className="d-flex justify-content-center mt-5">
                {fetchedData.length?
                    <table className={`${styles.middle} table table-sm table-bordered text-center`}>
                        <thead>
                            <tr>
                                {headers.map(header=>{
                                    return <th key={uuidv4()}>{header}</th>
                                })}
                                
                                <th>Marks</th>
                            </tr>
                        </thead>
                        <tbody>
                            {fetchedData.map(elem=>{
                                return <tr key={uuidv4()}>
                                <td>{elem.ID}</td>
                                <td>{elem.Name}</td>
                                <td>{elem.Gender}</td>
                                <td>{elem.Grade}</td>
                                <td>{elem.Section}</td>
                                <td>
                                    <div className={`${styles.action} justify-content-center`}>
                                        <div className="m-2">
                                            <button className="btn btn-sm btn-outline-success"
                                            onClick = {()=>handleAdd(elem.ID)}>
                                                <AddIcon/>
                                            </button>
                                        </div>

                                        <div className="m-2">
                                            <button className="btn btn-sm btn-outline-danger"
                                            onClick = {()=>handleDelete(elem.ID)}>
                                                <DeleteOutlineIcon/>
                                            </button>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            })}
                        </tbody>
                    </table>:
                        <div className="w-75 mt-5 text-center border shadow-sm py-5 px-5">
                            <h3>Please fill in the above details to get the students lists</h3>    
                        </div>}
            </div>
        </div>
    )
}