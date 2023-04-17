import useFetch from "../../customize/fetch";
import '../Blog/Blog.scss'
import { Link, useHistory } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import AddNewBlog from "./AddNewBlog";

const Blog = () => {


    const [show, setShow] = useState(false);
    const [newData, setNewData] = useState([]);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { data: dataBlogs, isLoading, isError }
        = useFetch(`https://jsonplaceholder.typicode.com/posts`, false);

    // let history = useHistory();

    useEffect(() => {
        if (dataBlogs && dataBlogs.length > 0) {
            let data = dataBlogs.slice(0, 9) // start - end
            setNewData(data)
        }
    }, [dataBlogs])

    // if (dataBlogs && dataBlogs.length > 0) {
    //     let newDataSimp = dataBlogs.slice(0, 9) //start - end
    //     setNewData(newDataSimp);
    // }

    const handleAddNew = (blog) => {
        // history.push('/add-new-blog')
        let data = newData
        data.unshift(blog)
        setShow(false)
        setNewData(data)
    }

    const deletePost = (id) => {
        let data = newData;
        data = data.filter(item => item.id !== id)
        setNewData(data)
    }
    return (
        <>
            <Button variant="primary" className="my-3" onClick={handleShow}>
                + Add new blog
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add new blog</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddNewBlog handleAddNew={handleAddNew} />
                </Modal.Body>
                {/* <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>Close</Button>
                        <Button variant="primary" onClick={handleClose}>Save changes</Button>
                    </Modal.Footer> */}
            </Modal>
            <div className="blogs-container">
                {isLoading === false && newData && newData.length > 0 && newData.map(item => {
                    return (
                        <div className="single-blog" key={item.id}>
                            <div className="title">Title: {item.title}
                                <span onClick={() => deletePost(item.id)}>X</span></div>
                            <div className="content">{item.body}</div>
                            <button>
                                <Link to={`/blog/${item.id}`}>
                                    View detail
                                </Link>
                            </button>
                        </div>
                    )
                })}

                {isLoading === true &&
                    <div style={{ textAlign: 'center !important', width: '100%' }}>Loading data....</div>}
            </div>
        </>
    )
}

export default Blog;