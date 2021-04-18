import React from 'react';
import axios from 'axios';
import  { useState } from 'react';
import { useForm } from "react-hook-form";
import Sidebar from '../Sidebar/Sidebar';

const Review = () => {
    const { register, handleSubmit} = useForm();
    const [imageURL , setImageURL] = useState(null);

    const onSubmit = data => {
      const reviewData = {
        name: data.name,
        designation: data.designation,
        description: data.description,
        imageURL: imageURL,

    }
    // console.log(data)

    const url = `http://localhost:5200/addReview`;
    console.log(reviewData)
    fetch(url, {
      method: 'POST', 
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(reviewData)
    })
    .then(res => console.log('server side response', res))
  };
    const handleImageUpload = review => {
        // console.log(review.target.files[0])
        const imageData = new FormData();
        imageData.set('key' , '8049a7bec90db17809ced82f236506a4')
        imageData.append('image' , review.target.files[0]);
      
        axios.post('https://api.imgbb.com/1/upload', 
        imageData)
        .then(function (response) {
            // console.log(response.data.data.display_url);
            setImageURL(response.data.data.display_url)
        })
        .catch(function (error) {
            console.log(error);
        });
    }
    return (
        <section className="container-fluid row">
            <Sidebar></Sidebar>
            <div style={{ position: "absolute", right: 0}}className = "col-md-10 p-5 ms-5">
            <h5 className = "text-danger">Review</h5>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div class="form-group">
                    <input type="text" class="form-control" name = "name" defaultValue ="Your Name" ref = {register}/>
                </div>
                <br/>
                <div class="form-group">
                    <input type="text" class="form-control" name = "designation" defaultValue="Designation" ref = {register}/>
                </div>
                <br/>
                <div class="form-group">
                    <input type="text" class="form-control" name = "description" defaultValue="Description" ref = {register}/>
                </div>
                <br/>
                <div class="form-group">
                    <input type="file" class="form-control"  name = "exampleRequired" placeholder="Upload" onChange = {handleImageUpload} />
                </div>
                <br/>
                <button type="submit"  class="btn btn-danger">Submit</button>
            </form>
            </div>
        </section>
    );
};

export default Review;