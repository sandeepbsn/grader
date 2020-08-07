import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './home/Home'
import AddScores from './addscores/AddScores'
import AddAdmits from './addadmits/AddAdmits'
import EnterScores from './enterscores/EnterScores'


export default function Routes(){

    return(
        <div>
            <Switch>
                <Route path="/" exact render={(props)=><Home/>} />
                <Route path="/addscores/:id" render={(props)=><EnterScores/>} />
                <Route path="/addscores" render={(props)=><AddScores/>} />
                <Route path="/addadmits" render={(props)=><AddAdmits/>} />
            </Switch>
        </div>
    )
}