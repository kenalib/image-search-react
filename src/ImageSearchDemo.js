import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import axios from 'axios';
import constants from './Constants';

const flexContainer = {
  display: "flex",
  flexWrap: "wrap",
  margin: "50px auto",
  padding: "0px 80px",
}
const flexItem = {
  width: "300px",
  height: "auto",
  margin: "20px",
}

function FlexBox(props) {
  return (
    <div style={flexItem}>
      <Paper>
        <img src={constants.oss_url + props.item.picName} alt={""}/>
        <Typography gutterBottom variant="headline" component="h2">
          {props.item.picName}
        </Typography>
        <Typography component="p">
          {props.item.sortExprValues}
        </Typography>
      </Paper>
    </div>
  );
}

class ImageSearchDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      selectedFile: null,
    }
  }

  componentDidMount() {
    fetch(constants.api_url)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.Auctions
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          console.log("ERR connect api_url: " + error.message);

          this.setState({
            isLoaded: true,
            items: constants.default_result
          });
        }
      )
  }

  fileChangedHandler = (event) => {
    this.setState({selectedFile: event.target.files[0]});
  }

  uploadHandler = () => {
    if (this.state.selectedFile === null) {
      return;
    }

    const formData = new FormData();
    formData.append('file_name', this.state.selectedFile, this.state.selectedFile.name);

    axios.post(constants.api_url, formData).then(response => {
      this.setState((prevState, props) => {
        return { items: response.data.Auctions };
      });
    }).catch(err => {
      console.log("ERR: Service Suspended");
      console.log(err);
    });
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <Button variant="raised" label='My Label'>
            <input type="file" onChange={this.fileChangedHandler}/>
          </Button>
          <Button  variant="raised"
            onClick={this.uploadHandler}>Upload!</Button>

          <div style={flexContainer}>
            {items.map(item => (
              <FlexBox item={item} key={item.picName}/>
            ))}
          </div>
        </div>
      );
    }
  }
}

export default ImageSearchDemo;
