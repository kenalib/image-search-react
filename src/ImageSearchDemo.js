import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Watning from '@material-ui/icons/Warning';
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
const previewImgStyle = {
  maxWidth: '150px',
  maxHeight: '100px',
  margin: '20px',
  verticalAlign:'middle',
}

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
      imgSrc: "",
      cat_id: "",
    }
  }

  componentDidMount() {
    axios.get(constants.api_url, { timeout : 3000 })
      .then((response) => {
        this.setState({
          isLoaded: true,
          items: response.data.SearchItemResponse.auctions
        });
      })
      .catch((error) => {
        console.log("ERR connect api_url: " + error.message);

        this.setState({
          isLoaded: true,
          items: constants.default_result.SearchItemResponse.auctions
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

    axios.post(constants.api_url, formData).then(response => {
      const res = response.data.SearchItemResponse;
      this.setState((prevState, props) => {
        if (res.success) {
          return {
            items: res.auctions,
            cat_id: res.picInfo.category,
            error: null
          };
        } else {
          return {
            items: [],
            cat_id: "",
            error: {message: res.message}
          }
        }
      });
    }).catch(err => {
      console.log("ERR: Service Suspended");
      console.log(err);
    });
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <img src={this.state.imgSrc} alt="" style={previewImgStyle}/>

          <Button variant="raised" label='Upload Image'>
            <input type="file" onChange={this.fileChangedHandler}/>
          </Button>

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

          <div>Note: demo data in 1: Dress, 3: Bag, 4: Shoes</div>

          {error ?
            <pre>Error: {error.message}</pre>: ""
          }

          {!error && items.length === 0 ?
            <div>
              <Watning style={{color: 'orange', marginRight: '5px'}}/>
              Found zero image. Please try different category.
            </div> : ""}

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
