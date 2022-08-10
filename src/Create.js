import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Shadi');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };

        setIsPending(true);

       fetch('http://localhost:3300/blogs', {
           method: 'POST',
           headers: { "Content-type": "application/json" },
           body: JSON.stringify(blog)
       }).then(() => {
           console.log("new blog added")
           setIsPending(false);
           history.push('/');
       })  
    }
    
    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog:</label>
                <textarea
                required
                value={ body }
                onChange={(e) => setBody(e.target.value)}
                >
                </textarea>
                <label>Blog author</label>
                <select
                value={ author }
                onChange={(e) => setAuthor(e.target.value)}>
                    <option value="Shadi">Shadi</option>
                    <option value="Meowzers">Meowzers</option>
                </select>
               { !isPending && <button>Add Blog</button> } 
                <p>{ title }</p>
                <p>{ body }</p>
                <p>{ author }</p>
            </form>
        </div>
    );
}
 
export default Create;