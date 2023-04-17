import { useState } from 'react';
import '../Blog/Blog.scss'
import axios from 'axios';

const AddNewBlog = (props) => {

    const [title, setTilte] = useState('');
    const [content, setContent] = useState('');

    const handleButton = async () => {
        // event.preventDefaul();  
        console.log(">>>> check title content: ", title, content)
        if (!title) {
            alert('miss title')
            return;
        }
        if (!content) {
            alert('miss content')
            return;
        }

        let data = {
            title: title,
            body: content,
            userId: 1
        }

        let res = await axios.post('https://jsonplaceholder.typicode.com/posts', data);
        if (res && res.data) {
            let newBlog = res.data
            props.handleAddNew(newBlog)
            console.log('Check new blog', newBlog)
        }
    }

    return (
        <div className="add-new-container">
            <div className="text-add-new">--- Add new blog ---</div>
            <div className="inputs-data">
                <label>Title: </label>
                <input type="text"
                    value={title}
                    onChange={(event) => setTilte(event.target.value)} />
            </div>
            <div className="inputs-data">
                <label>Content: </label>
                <input type="text"
                    value={content}
                    onChange={(event) => setContent(event.target.value)}
                />
            </div>
            <button className='btn-add-new' onClick={handleButton}>Submit</button>
        </div>
    )
}

export default AddNewBlog;