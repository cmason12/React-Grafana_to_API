import React, { PureComponent } from 'react';
import { PanelProps } from '@grafana/data';
import { SimpleOptions } from 'types';
import Button from '@material-ui/core/Button';

interface Props extends PanelProps<SimpleOptions> {}

export class SimplePanel extends PureComponent<Props> {
  // prettier-ignore
  handleClick() {
    console.log('The link was clicked.');
  }
  // prettier-ignore
  componentDidMount() {
    // Simple POST request with a JSON body using fetch
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'mode': 'cors',},
      
        body: JSON.stringify({  jsonrpc: "2.0",
        

    params:{
      method:"get_drivers",
      driver: "building1",
      point: "AC",
      value: "True"
    }})
    };
    fetch('https://niro-lenovo-y40-70:8443/drivers', requestOptions)
        .then(response => response.json())
        .then((data) => {
          console.log(data);
        });
       
}
  render() {
    return (
      <form>
        <p>
          <input type="text" defaultValue="Platform" ref="Platform" />
          <input type="text" defaultValue="Driver" ref="Driver" />
          <input type="text" defaultValue="Agent" ref="Agent" />
          <Button variant="contained" color="primary" onClick={this.handleClick}>
            Submit
          </Button>
        </p>
      </form>
    );
  }
}
