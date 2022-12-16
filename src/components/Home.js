import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useUserAuth } from "../context/userAuthContext";
// import Blog from '../components/blogOperations'
import {db} from '../firebase'
import {collection,getDoc, getDocs } from 'firebase/firestore'
import blogOperations from "./blogOperations";

function Home() {
  const { logOut,user } = useUserAuth();

  const hanleOnLogout = async () => {
    await logOut();
  };

  const [blog, setblog] = useState("")
  const [Blogs, setBlogs] = useState([])
  
  const AddBlog = async()=>{
    const newBlog = {
        email:user.email,
        contend:blog
    }
   try {
    await blogOperations.addBlog(newBlog);
    setblog("")
   } catch (error) {
    console.log(error)
   }
    
  }

  useEffect(() => {
    getAllblogs();

  })
  const getAllblogs = async()=>{
    const data = await blogOperations.getAllBlog();
    // console.log(data.docs)
    setBlogs(data.docs.map((doc)=> ({ ...doc.data(), id: doc.id})))
    console.log(Blogs)
  }
  const deleteblog = async(id)=>{
     await blogOperations.deleteBlog(id);
  }
  
  return (
    <>
   
    <button onClick={hanleOnLogout} className="btn btn-danger">
        LogOut
      </button>
      <div className="add container my-3">
        <textarea onChange={(e)=> setblog(e.target.value)} value={blog}  className="form-control b my-4" name="text" id="" cols="20" rows="5" placeholder="Enter your blog"></textarea>
        {/* <input
          type="text"
          
          className="form-control b my-4"
          name="text"
          id=""
          placeholder="enter anything"
        /> */}
        <button onClick={AddBlog} className="btn btn-success">Add</button>
      </div>
     <div className="container mx-5 my-5 row"> 
      { " " }
      { Blogs.map((Blog, index)=>{
        return (
            <>
            <div class="card my-4 col-10 col-md-4 mx-3" >
  <div class="card-body ">
    <h5 class="card-title "> <span className="text-primary">Created by</span> {Blog.email}</h5>
    {/* <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
    <p class="card-text">{Blog.contend}</p>
    {/* <a href="#" class="card-link">Card link</a> */}
    <button onClick={()=> deleteblog(Blog.id)} className="btn text-danger">delete</button>
  </div>
</div>
            </>
        )
      })}
         
     </div>
      
    </>
  );
}

export default Home;
