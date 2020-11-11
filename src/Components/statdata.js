import React, { Component } from "react";
import { Accordion, Button, Card } from "react-bootstrap";
import Axios from 'axios'

class Statedata extends Component {
  constructor() {
    super();
    this.state = {
      stateData: {},
    };
  }
  componentDidMount(){
      Axios.get('https://api.covid19india.org/state_district_wise.json').then(response=>{
          this.setState({stateData:response.data})
      })
  }

  render() {
    let keys = Object.keys(this.state.stateData);
    return (
      <div className="row">
        <div className="col-md-12">
          <Accordion>
            {keys.map((itm, ky) => {
              let districts = this.state.stateData[itm].districtData
              let district_keys = Object.keys(districts)
              let total_active = 0
              let total_conformed = 0
              let total_deaths = 0
              let total_recovered = 0
                let district_list=[]

              for(let x in districts){
                total_active +=  districts[x].active
                total_conformed +=  districts[x].confirmed
                total_deaths +=  districts[x].deceased
                total_recovered +=  districts[x].recovered
               
                let ob = districts[x]
                ob['district_name'] = x
                district_list.push(districts[x]) 
              }
              return(
                <Card >
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="dark" eventKey={ky}>
                    {itm} <span className='btn-dark '>Total Cases - {total_conformed}</span> <span className="btn-dark">Active - {total_active}</span>Recovered -{total_recovered} Death - {total_deaths}
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey={ky}>
                  <Card.Body>
                      <table className='table table-bordered '>
                          <thead>
                              <td>Districts</td>
                              <td>Conformed</td>
                              <td>Active</td>
                              <td>Recovered</td>
                              <td>Deaths</td>
                          </thead> 
                          <tbody>
                              {
                                  district_list.map((itm,ky)=>{
                                      return(
                                          <tr>
                                             <td>{itm.district_name}</td> 
                                             <td>{itm.total_conformed}</td> 
                                             <td>{itm.active}</td> 
                                             <td>{itm.recovered}</td> 
                                             <td>{itm.deceased}</td> 
                                          </tr>
                                      )
                                  })
                              }
                          </tbody>
                      </table>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              )
            })}
           
          </Accordion>
        </div>
      </div>
    );
  }
}
export default Statedata;
