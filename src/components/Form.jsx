import React, { useState } from "react";
import styles from "./Form.module.css"

const Form = ({ onAddArticle }) => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [status, setStatus] = useState("");
    const [image, setImage] = useState(null);
    const [content, setContent] = useState("");
    const [category, setCategory] = useState("");
    const [tags, setTags] = useState("");
    const [state, setState] = useState("");

    const HandleImage = (e) => {
        const file = e.target.files[0];
        if (file) {
            if (!file.type.startsWith("image/")) {
                alert("Please upload a valid image file!");
                return;
            }
            setImage(URL.createObjectURL(file));
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim())
            return alert("Title is required");
        const newArticle = {
            id: Date.now(),
            title,
            author,
            status,
            image,
            content,
            category,
            tags,
            state
        };
        onAddArticle(newArticle);
        setTitle("");
        setAuthor("");
        setStatus("");
        setImage(null);
        setContent("");
        setCategory("");
        setTags("");
        setState("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title:</label>
                <input
                    type="text"
                    name="title"
                    placeholder="Enter article title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div>
                <label>Author:</label>
                <input
                    type="text"
                    placeholder="Enter article author"
                    name="author"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)} />
            </div>
            <div>
                <label>Status:</label>
                <select
                    name="status"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                >
                    <option value="" disabled>Choose a status</option>
                    <option value="draft">Draft</option>
                    <option value="published">Published</option>
                </select>
            </div>
            <div>
                <label>Image:</label>
                <input
                    type="file"
                    name="Image"
                    accept="image/*"
                    onChange={HandleImage} />
                {image && <img src={image} alt="Preview" style={{ maxWidth: "200px", marginTop: "10px" }} />}
            </div>
            <button type="submit">Add Article</button>
        </form>
    );
};

export default Form;