import { useState } from "react";

const Home = () => {  
    const [blogs, setBlogs] = useState([
        {title: 'My first blog!', body: 'Welcome!', author: 'Shadi', id: 1},
        {title: 'My second blog!', body: 'Welcome again!', author: 'Shadi I', id: 2}
    ]);
    return ( 
        <div className="home">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2> {blog.title} </h2>
                    <p> Written by: {blog.author}</p>
                </div>
            ))} 
        </div>
     );
     
}
 
export default Home;
