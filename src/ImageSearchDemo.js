import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import axios from 'axios';
import constants from './Constants';

const flexContainer = {
  display: "flex",
  flexWrap: "wrap",
  margin: "50px auto",
  padding: "0px 50px",
}
const flexItem = {
  width: "300px",
  height: "auto",
  margin: "20px",
}
const imageStyle = {
  maxWidth: "240px",
}
const formControl = {
  margin: "30px",
  minWidth: "200px",
};

function FlexBox(props) {
  return (
    <div style={flexItem}>
      <Paper>
        <img src={constants.oss_url + props.item.picName} alt={""} style={imageStyle}/>
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
      cat_id: "",
    }
  }

  componentDidMount() {
    fetch(constants.api_url)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.SearchItemResponse.auctions
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          console.log("ERR connect api_url: " + error.message);

          this.setState({
            isLoaded: true,
            items: constants.default_result.SearchItemResponse.auctions
          });
        }
      )
  }

  fileChangedHandler = (event) => {
    this.setState({selectedFile: event.target.files[0]});
  }

  catChangeHandler = (event) => {
    this.setState({cat_id: event.target.value}, () => {
      this.uploadHandler();
    });
  }

  uploadHandler = () => {
    if (this.state.selectedFile === null) {
      console.log("ERR: image not set");
      return;
    }

    const formData = new FormData();
    formData.append('file_name', this.state.selectedFile, this.state.selectedFile.name);
    formData.append('cat_id', this.state.cat_id);

    axios.post(constants.api_url, formData).then(response => {
      this.setState((prevState, props) => {
        return { items: response.data.SearchItemResponse.auctions };
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

          <FormControl style={formControl}>
            <InputLabel htmlFor="category-simple">Category</InputLabel>
            <Select value={this.state.cat_id} onChange={this.catChangeHandler}
              inputProps={{name: 'cat_id', id: 'category-simple',}}>
              <MenuItem value="">Not Specified</MenuItem>
              {constants.allCategory.map(item => (
                <MenuItem value={item.id} key={item.id}>{item.id}: {item.name}</MenuItem>
              ))}
            </Select>
          </FormControl>

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
