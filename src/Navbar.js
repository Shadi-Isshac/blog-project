const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>The Meow Meow Blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create" style={{
                    color: "white",
                    backgroundColor: "red",
                    borderRadius: "8px" 
                }}>New Blog</a>
            </div>
        </nav>
     );
}
 
export default Navbar ;