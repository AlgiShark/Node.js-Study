import React, { Component } from 'react';
import axios from 'axios';

class FileUpload extends Component {
    state = { selectedFiles: null }

    fileChangedHandler = (e) => {
        const files = e.target.files;
        this.setState({
            selectedFiles: files
        })
        console.log(e.target.files);
    };

    onClickHandler = (e) => {
        const formData = new FormData();
        formData.append(
          "uploadFiles",
          this.state.selectedFiles,
        );
        const config = {
          headers: {
            "content-type": "multipart/form-data"
          }
        };
        return axios.post("http://220.67.126.27:3000/upload", formData, config).then(res => {
            alert('성공')
          }).catch(err => {
            alert('실패')
          });
      };

    render() {
        return (
            <div className='form center pa4 br3 shadow-5'>
                <input className='f4 pa2 w-70 center' type="file" multiple onChange={this.fileChangedHandler}></input>
                <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple' onClick={this.onClickHandler}>전송하기</button>
            </div>
            
        );
    }
}

export default FileUpload;