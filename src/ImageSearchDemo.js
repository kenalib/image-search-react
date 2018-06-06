import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Info from '@material-ui/icons/Info';
import Warning from '@material-ui/icons/Warning';
import axios from 'axios';
import './ImageSearchDemo.css';
import default_response from './__mocks__/default_response.json'

const api_url = process.env.REACT_APP_API_URL;
const oss_url = process.env.REACT_APP_OSS_URL;
const allCategory = default_response.SearchItemResponse.picInfo.allCategory

function FlexBox(props) {
  return (
    <div className="flexItem">
      <Paper>
        <img src={oss_url + props.item.picName} alt={""} className="image"/>
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
      imgSrc: "",
      cat_id: "",
      auto_detected: false,
    }
  }

  componentDidMount() {
    axios.get(api_url, { timeout : 3000 })
      .then((response) => {
        this.setState({
          error: null,
          isLoaded: true,
          items: response.data.SearchItemResponse.auctions
        });
      })
      .catch((error) => {
        console.log("ERR connect api_url: " + error.message);

        this.setState({
          error: {message: error.message},
          isLoaded: true,
          items: default_response.SearchItemResponse.auctions
        });
      })
  }

  fileChangedHandler = (event) => {
    const file = event.target.files[0];

    if (!file) {
      console.log("ERR: empty file");
      return;
    }

    const reader  = new FileReader();
    reader.onloadend = () => {
      this.setState({
          imgSrc: reader.result
      })
    }

    reader.readAsDataURL(file);

    this.setState({selectedFile: file}, () => {
      this.uploadHandler();
    });
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

    axios.post(api_url, formData).then(response => {
      const res = response.data.SearchItemResponse;
      this.setState((prevState, props) => {
        if (res.success) {
          return {
            items: res.auctions,
            cat_id: res.picInfo.category,
            error: null,
            auto_detected: prevState.cat_id !== res.picInfo.category,
          };
        } else {
          return {
            items: [],
            cat_id: "",
            error: {message: res.message}
          }
        }
      });
    }).catch(error => {
      console.log(error.message);
      this.setState((prevState, props) => {
        return {
          error: {message: error.message}
        }
      });
    });
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <img src={this.state.imgSrc} alt="" className="previewImgStyle"/>

          <Button variant="raised" label='Upload Image'>
            <input type="file" onChange={this.fileChangedHandler}/>
          </Button>

          <FormControl style={{minWidth:"200px", marginLeft:"30px"}}>
            <InputLabel htmlFor="category-simple">Category</InputLabel>
            <Select value={this.state.cat_id} onChange={this.catChangeHandler}
              inputProps={{name: 'cat_id', id: 'category-simple',}}>
              <MenuItem value="" key="0">Not Specified</MenuItem>
              {allCategory.map(item => (
                <MenuItem value={item.id} key={item.id}>{item.id}: {item.name}</MenuItem>
              ))}
            </Select>
          </FormControl>

          <div>Note: demo data in 1: Dress, 3: Bag, 4: Shoes</div>

          {error ?
            <pre>Error: {error.message}</pre>: ""
          }

          {this.state.auto_detected ?
            <div>
              <pre>
                <Info className="infoStyle"/>
                Category auto detected
              </pre>
            </div>: ""
          }

          {!error && items && items.length === 0 ?
            <div>
              <Warning className="warningStyle"/>
              Found zero image. Please try different category.
            </div> : ""
          }

          <div className="flexContainer">
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
