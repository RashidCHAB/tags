import React, { useState } from 'react';
import Form from './Form';
import './App.css'
const App = () => {
    const [tags, setTags] = useState([
        { title: 'JavaScript' },
        { title: 'Python' },
        { title: 'C++' }
    ])
    const addTag = (title) => {
        setTags([{ title: title }, ...tags])
    }

    const cleaner = (i) => {
        const filtered = tags.filter((item, index) => {
            if (i === index) {
                return false
            } else return true
        })
        setTags(filtered)
    }
    return (
        <div>
            <Form addTag={addTag} />
            {tags.map((item, index) =>

                <div>{item.title}
                    <button onClick={() => cleaner(index)}>X</button>
                </div>

            )}
        </div>
    );
};

export default App;