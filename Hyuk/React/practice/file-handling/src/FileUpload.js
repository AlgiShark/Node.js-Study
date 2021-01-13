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
        return axios.post("/api/upload", formData, config).then(res => {
            alert('성공')
          }).catch(err => {
            alert('실패')
          });
      };

    render() {
        return (
            <div>
                <input type="file" multiple onChange={this.fileChangedHandler}></input>
                <button onClick={this.onClickHandler}>전송하기</button>
            </div>
            
        );
    }
}

export default FileUpload;