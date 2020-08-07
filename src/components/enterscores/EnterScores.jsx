import React, {useState, useEffect} from 'react'
import {useParams, useLocation} from 'react-router-dom'
import axios from 'axios'
import styles from './EnterScores.module.css'
import {Bar} from 'react-chartjs-2'
import {Card, CardContent, Typography} from '@material-ui/core' 
import CountUp from 'react-countup'


export default function EnterScores(){
    const params = useParams()
    const location = useLocation()

    const query = new URLSearchParams(location.search)
    const grade = query.get('grade')
    const section = query.get('section')
    const exam =query.get('exam')
    const id = params.id

    const [fetchedData, setFetchedData] = useState()
    const [maxMarks, setMaxMarks] = useState()
    const [card, setCard] = useState()
    const [editMode, setEditMode] = useState(false)
    let total
    let percentage
    useEffect(()=>{
        const fetchData = async() => {
            const studentDetails = await axios.get(`/addscores/${id}?grade=${grade}&&section=${section}&&exam=${exam}`)
            setFetchedData(studentDetails.data[1])
            setMaxMarks(studentDetails.data[0])
            setCard(studentDetails.data[2])
        }
        fetchData()
    },[exam, grade, id, section])
    
    const handleChange = (e) =>{
        setFetchedData({
            ...fetchedData,
            [e.target.name]:e.target.value
        })
    }

    const changeMode = () => {
        setEditMode(!editMode)
    }

    const handleUpdate = async() => {
        const updateData  = await axios.patch(`/addscores/${id}?grade=${grade}&&section=${section}&&exam=${exam}`,{
            ...fetchedData,
        })
        setEditMode(!editMode)
        const message = updateData.data.message
        alert(message)
    }

    const styleSelector = (marks) => {
        marks = Number(marks)
        if(marks>=50 && marks<80){
            return styles.average
        }
        else if(marks>=80){
            return styles.good
        }
        else if(marks < 50){
            return styles.bad
        }
    }
    

    if(fetchedData?.['ID'] && card){
        total = (Object.values(fetchedData).map(Number).reduce((a,b)=>a + b,0) - Number(fetchedData['ID'])).toString()
        percentage = (total/Number(card['full_total'])) * 100
    }

    
    if(fetchedData?.['ID'] && card){
        return (
            <div>
                <div className="d-flex flex-column align-items-center mt-5">
                    {Object.keys(fetchedData).map((key,index)=>{
                        if(key !== "ID"){
                            return (
                                <div key = {index} className={`${styles.marklist} ${styleSelector(fetchedData[key])} d-flex align-items-center py-2 px-3 shadow-sm`}>
                                    <div className="">
                                        <h5>{key === "Eng"?"English":
                                            key === "RL"?"Language":
                                                    key}</h5>
                                    </div>
                                    <div className= "ml-auto">
                                        {!editMode ? 
                                            <h5>{fetchedData[key]}</h5>:
                                            <input name = {key}   
                                            key = {index}                                 
                                            value={fetchedData[key]}
                                            onChange={(e)=>handleChange(e)}
                                            className = "form-control" />}
                                    </div>
                                </div>
                            )
                        }
                    })} 
        
                    <div className={`${styles.marklist} d-flex border align-items-center py-3 px-3 shadow-sm`}>
                        <div className="">
                            <h4>Total Marks</h4>
                        </div>
                        <div className="ml-auto">
                            <h4>
                                <CountUp start={0} end={Number(total)} duration={5}/>
                            </h4>
                        </div>
                    </div>   
        
                    <div className={`${styles.marklist} d-flex border align-items-center py-3 px-3 shadow-sm`}>
                        <div className="w-100">
                            {!editMode ?
                                <button className="btn btn-lg btn-outline-primary btn-block"
                                onClick = {()=>changeMode()}>
                                Edit    
                                </button> :
                                <button className="btn btn-lg btn-outline-success btn-block"
                                onClick = {()=>handleUpdate()}>
                                Update    
                                </button> } 
                        </div>  
                    </div>   
                </div>
                {maxMarks && card?
                    <div className="d-flex flex-column p-4 justify-content-center align-items-center">
                    <div className="w-100">
                        <Bar data = {{
                            labels:Object.keys(fetchedData).filter(elem=>elem!=='ID'),
                            datasets: [{
                                label: card['name'],
                                backgroundColor:'rgba(0,0,255,0.3)',
                                data:Object.values(fetchedData).filter((elem,index)=>index!==0),
                            },{
                                label: grade + " Grade",
                                backgroundColor:'rgba(0,255,0,0.3)',
                                data:Object.values(maxMarks),
                            }]
                        }}
                        options = {{
                            legends:{display:false},
                            title:{display:true, text: `Comparison Chart`},
                            responsive:true,
                            maintainAspectRatio:true,
                            scales:{
                                yAxes:[{
                                    ticks:{
                                        beginAtZero:true,
                                    }
                                }]
                            }
                        }}/>
                    </div>

                    <div className={`${styles.reportcard} mt-5`}>
                        <Card>
                            <CardContent>
                                <Typography variant = "subtitle1">
                                    <div className="d-flex w-75 mx-auto align-items-center">
                                        <div className="lead">
                                            Name
                                        </div>
                                        <div className="ml-auto lead w-50 text-center">
                                            {card['name']}
                                        </div>
                                    </div>
                                </Typography>

                                <Typography variant = "subtitle1">
                                    <div className="d-flex m-2 w-75 mx-auto align-items-center">
                                        <div>
                                            Grade
                                        </div>
                                        <div className="ml-auto w-50 text-center">
                                            {grade}
                                        </div>
                                    </div>
                                </Typography>

                                <Typography variant = "subtitle1">
                                    <div className="d-flex m-2 w-75 mx-auto align-items-center">
                                        <div>
                                            Total
                                        </div>
                                        <div className="ml-auto w-50 text-center">
                                            {total}
                                        </div>
                                    </div>
                                </Typography>

                                <Typography variant = "subtitle1">
                                    <div className="d-flex m-2 w-75 mx-auto align-items-center">
                                        <div>
                                            Percentage
                                        </div>
                                        <div className="ml-auto w-50 text-center">
                                            {Math.round(percentage)}
                                        </div>
                                    </div>
                                </Typography>

                                <Typography variant = "subtitle1">
                                    <div className="d-flex m-2 w-75 mx-auto align-items-center">
                                        <div>
                                            Rank
                                        </div>
                                        <div className="ml-auto w-50 text-center">
                                            {card['rank']}
                                        </div>
                                    </div>
                                </Typography>

                                <Typography variant = "subtitle1">
                                    <div className="d-flex m-2 w-75 mx-auto align-items-center">
                                        <div>
                                            Remarks
                                        </div>
                                        <div className="ml-auto w-50 text-center">
                                            {percentage >= 80 ? "Good":
                                             percentage >=50 && percentage <80 ? "Average":
                                             "Need to improve" }
                                        </div>
                                    </div>
                                </Typography>
                            </CardContent>
                        </Card>
                    </div>
                </div> :
                "Loading...."}
            </div>
        )
    }
    else{
        return (
            <div className = "d-flex justify-content-center mt-5">
                <h4>Page is loading...</h4>
            </div>
        )
    }
}