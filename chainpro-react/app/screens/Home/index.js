
{/**Please put  core FrameWorks Below*/}
import React, { Component } from 'react';
import {DefaultRoute, Route, Router, Switch, Link} from 'react-router-dom';
import LoadingIcon from '../LoadingIcon/';
import CoreGraph from '../CoreGraph';
import RealTimeData from '../RealTimeData';
import Tools from '../Tools'
import TransactionHistory from '../TransactionHistory'

class Home extends Component {

  constructor(props){
    super(props);
    this.state = {
      loading: true
      };
  }

  componentDidMount() {
          //Simulamos una espera asincrona, para mostrar boton de carga
          setTimeout(() => this.setState({ loading: false }), 1745);
  }

  render() {

    const App =()=>(
      <div className="app-layout">
        <div className="app-container">

            <div className="core-tools">
                <Tools/>
                <CoreGraph/>
                <RealTimeData/>
            </div>

            <TransactionHistory/>

        </div>
      </div>
    )

    return (
              this.state.loading ? <LoadingIcon/> : <App/>
           )
          }

}

export default Home;
