import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { FormGroup,Input,Button,Form } from 'reactstrap';
import axios from 'axios'
import ReactProgressMeter from 'react-progress-meter'

function App() {



  const [fname,setFName] = useState('')

  const [lname,setLName] = useState('')

  const [state,setState] = useState(0)

  const [message,setMessage] = useState('')

  const handleCheck = (e) => {
    e.preventDefault()
    var options = {
      method: 'GET',
      url: 'https://love-calculator.p.rapidapi.com/getPercentage',
      params: {sname: fname, fname: lname},
      headers: {
        'x-rapidapi-host': 'love-calculator.p.rapidapi.com',
        'x-rapidapi-key': process.env.REACT_APP_KEY
      }
    };
    
    axios.request(options).then(function (response) {
      setMessage(response.data.result)
      setState(response.data.percentage)
    }).catch(function (error) {
      console.error(error);
    });
  }

  return (
    <div className="App">
        <h2>Calculate compatibility with your partner</h2>
        <Form onSubmit={(e) => handleCheck(e)}>
          <div className="form-group">
            <label>Enter your name</label>
            <Input type="text"  required onChange={ (e) => setFName(e.target.value) }/>        
          </div>
          <div className="form-group">
            <label>Enter your partner name</label>
            <Input type="text" required onChange={ (e) => setLName(e.target.value) }/>      
          </div>
          <Button color="primary">Check Compatibiity</Button>
        </Form>
        <div className="your-score">
          <h4>{message ? message : ""}</h4>
          <ReactProgressMeter 
                currentProgress={state} 
                showPercent={true}
                show={true}
                color="red" 
                width="80%"
        />
        </div>
    </div>
  );
}

export default App;
