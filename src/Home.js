import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {  
    const [blogs, setBlogs] = useState([
        {title: 'My first blog!', body: 'Welcome!', author: 'Shadi', id: 1},
        {title: 'My second blog!', body: 'Welcome again!', author: 'Shadi I', id: 2}
    ]);
    return ( 
        <div className="home">
           <BlogList blogs={blogs} title="All Blogs!" />
        </div>
     );

}
 
export default Home;
