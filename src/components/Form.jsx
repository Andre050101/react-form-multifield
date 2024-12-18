import React, { useState } from "react";
import styles from "./Form.module.css"

const Form = ({ onAddArticle }) => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [status, setStatus] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim())
            return alert("Title is required");
        const newArticle = {
            id: Date.now(),
            title,
            author,
            status
        };
        onAddArticle(newArticle);
        setTitle("");
        setAuthor("");
        setStatus("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label className={styles.label}>Title:</label>
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
            <button type="submit">Add Article</button>
        </form>
    );
};

export default Form;