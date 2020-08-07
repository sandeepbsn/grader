import React, {useEffect} from 'react';
import Navbar from './components/navbar/Navbar'
import Routes from './components/Routes';


class App extends React.Component{
  constructor(props){
    super(props)

    this.state = {

    }
  }

  render(){
    return (
      <div>
        <Navbar/>
        <Routes/>
      </div>
    )
  }
}
export default App;
