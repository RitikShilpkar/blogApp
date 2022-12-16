import {db} from '../firebase';
import {getDocs,getDoc,addDoc,deleteDoc,updateDoc,doc,collection} from 'firebase/firestore'
import 'firebase/compat/firestore'

// const firestore = firebase.firestore();
const blogCollectionRef = collection(db, "blog")
class BlogServices {
        addBlog = (newBlog)=>{
             return addDoc(blogCollectionRef,newBlog);
        }
        updateBlog = (id, updatedBlog)=>{
          const blogDoc = doc(db, "blog", id);
          return updateDoc(blogDoc, updatedBlog)
        }
        deleteBlog = (id)=>{
          const blogDoc = doc(db, "blog", id);
          return deleteDoc(blogDoc)
        }
        getAllBlog = ()=>{
          
          return getDocs(blogCollectionRef)
        }
        getABlog = (id)=>{
            const blogDoc = doc(db, "blog", id);
          return getDoc(blogDoc)
        }
}



export default new BlogServices();