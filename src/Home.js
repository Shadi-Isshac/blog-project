import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {  
    const [blogs, setBlogs] = useState([
        {title: 'My first blog!', body: 'Welcome!', author: 'Shadi', id: 1},
        {title: 'Great to be apart of this Community!', body: 'Oi!', author: 'Anon', id: 2}
    ]);
    return ( 
        <div className="home">
           <BlogList blogs={blogs} title="All Blogs!" />
           <BlogList blogs={blogs.filter((blog) => blog.author === "Shadi" )} title="Shadi's blogs" />
        </div>
     );

}
 
export default Home;
