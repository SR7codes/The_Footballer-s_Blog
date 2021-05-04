import { useState } from "react";

const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [isPending, setIsPending] = useState('false');

    const handleSubmit = (e) => {
        e.preventDefault(); //prevents the page to refresh//
        const blog = { title, body, author};  //creates a blog object to be saved into the db.json//

        setIsPending(true);

        console.log(blog);
        fetch ('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {"content-Type": "applicatoion/json"},
            body: blog
        }).then (() => {
            console.log(blog);
            console.log ('new blog added');
            setIsPending(false);
        })
    }

    return (
        <div className="create">
            <h2>Add a New Blog!</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title</label>
                <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)}/>

                <label>Blog body</label>
                <textarea required value={body} onChange={(e) => setBody(e.target.value)}/>

                <label>Blog author:</label>
                <input type="text" required value={author} onChange={(e) => setAuthor(e.target.value)}/>

                
                 { isPending && <button>Add Blog</button> } 
                 { !isPending && <button disabled>Adding Blog...</button> } 
            </form>
        </div>
    );
}

export default Create;