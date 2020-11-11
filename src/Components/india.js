import React, { Component } from "react";
import {Card} from 'react-bootstrap' 
import Statedata from './statdata'
import {Helmet} from 'react-helmet';
import Axios from 'axios'
class India extends Component {

constructor(props){
  super(props)
  this.state={
    indiaData:[]
  }
}

  componentDidMount(){
    Axios.get('https://corona.lmao.ninja/v2/countries/india').then(response=>{
      this.setState({indiaData:response.data})
    })
  }

  render() {
    return (
      
      
      
      <div className="row">
        <Helmet>
    <style>{'body { background-color: grey; }'}</style>
        </Helmet>
        <div className="col-md-12">
         <div >
         <img  src="https://www.countryflags.io/IN/shiny/64.png" />
          <h3>INDIA</h3>
         </div>
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-3">
                <Card className="badge badge-info " style={{ width: "18rem" },{borderRadius:'5px'}}>
                  <Card.Body className="text-center" >
                    <Card.Title>Total Cases</Card.Title>
    <h3>{this.state.indiaData.cases}</h3>
                    <Card.Text>
                    
                    </Card.Text>

                  </Card.Body>
                </Card>
              </div>
              <div className="col-md-3">
                <Card className="badge badge-info " style={{ width: "18rem" },{borderRadius:'5px'}}>

                  <Card.Body className="text-center" >
                    <Card.Title>Active Cases</Card.Title>
                    <h3>{this.state.indiaData.active}</h3>
                    <Card.Text>
                    
                    </Card.Text>

                  </Card.Body>
                </Card>
              </div>
              <div className="col-md-3">
                <Card className="badge badge-info" style={{ width: "18rem" },{borderRadius:'5px'}}>

                  <Card.Body className="text-center" >
                    <Card.Title>Recovered Cases</Card.Title>
    <h3>{this.state.indiaData.recovered}</h3>
                    <Card.Text>
                   
                    </Card.Text>

                  </Card.Body>
                </Card>
              </div>
              <div className="col-md-3">
                <Card className="badge badge-info" style={{ width: "18rem" },{borderRadius:'5px'}}>

                  <Card.Body className="text-center" >
                    <Card.Title>Total Deths</Card.Title>
    <h3>{this.state.indiaData.deaths}</h3>
                    <Card.Text>
                    
                    </Card.Text>

                  </Card.Body>
                </Card>
              </div>
              
            </div>
          </div>

          
        </div>
        <div className="col-md-12" >
            <Statedata/>
            
        </div>
      </div>
    );
  }
}
export default India;
