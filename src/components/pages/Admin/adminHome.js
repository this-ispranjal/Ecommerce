import axios from "axios"
import { useEffect, useState } from "react"
import newstyle from "./adminHome.module.css"

const AdminHome = () => {
    const [posts, setPosts] = useState([]);
    const [reset, setReset] = useState(0);


    useEffect(() => {
        async function fetchData() {
        try{
           const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/admin/getPost`)
           if(response.status !== 200) return
           setPosts(response.data.post);
           console.log(response.data.post);
        }catch(error){
            console.log(error)
        }
    }
        fetchData();
    }, [reset]);

    const styles = {
        container: {
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
          padding: "20px",
          fontFamily: "Arial, sans-serif",
        },
        card: {
          width: "300px",
          border: "1px solid #ccc",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          padding: "15px",
          backgroundColor: "#fff",
        },
        title: {
          fontSize: "18px",
          fontWeight: "bold",
          color: "#333",
          marginBottom: "10px",
        },
        field: {
          marginBottom: "5px",
          color: "#555",
        },
        message: {
          fontSize: "14px",
          fontStyle: "italic",
          color: "#666",
        },
        
      };
    
      return (
        <>
        <button className={newstyle.btnOutline} onClick={() => setReset(reset + 1)}>RESET</button>  
        <div style={styles.container}>
          {posts.map((post) => (
              <div key={post.id} style={styles.card}>
              <div style={styles.title}>{post.name}</div>
              <div style={styles.field}>
                <strong>Email:</strong> {post.email}
              </div>
              <div style={styles.field}>
                <strong>Contact:</strong> {post.contactNumber}
              </div>
              <div style={styles.message}>
                <strong>Message:</strong> {post.message}
              </div>
            </div>
          ))}
        </div>
        </>
      );
    };
    

export default AdminHome