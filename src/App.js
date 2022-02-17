import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import GridView from './components/GridView';
import Footer from './components/Footer';
import BottomCanvas from './components/BottomCanvas';
import Input from './components/Input';
import TextArea from './components/TextArea';
import Button from './components/Button';
import {default as UUID} from "node-uuid";

const App = () => {
    const keyName = 'dataItems'
    const DATA = JSON.parse(localStorage.getItem(keyName)) || [];
    const [ title, setTitle ] = useState('');
    const [ desc, setDesc ] = useState('');

    return (
        <div className='d-flex vh-100 mx-auto flex-column'>
            <BottomCanvas title="Add Files">
                <Input
                    key="title"
                    type="text"
                    value={title}
                    title="Title"
                    placeholder="Enter title"
                    onChange={(e) => {
                        setTitle(e.target.value);
                    }}
                />
                <TextArea
                    key="description"
                    title="Description"
                    placeholder="Enter Description"
                    value={desc}
                    onChange={(e) => {
                        setDesc(e.target.value);
                    }}
                />
                <Button 
                    value="Add Item" 
                    onClick={() => {
                        DATA.push({
                            id: UUID.v4(),
                            title: title,
                            description: desc,
                            date: new Date().toUTCString()
                        });
                        localStorage.setItem(keyName, JSON.stringify(DATA));
                        
                        setTitle('')
                        setDesc('')
                    }}
                />
            </BottomCanvas>
            <Header title="File Secure" rightButtonText="Add files" /> 
            <div className='container vh-100'>
                <GridView items={DATA} />
            </div>
            <Footer text="© 2017–2021 Company, Inc." />
        </div>
    );
}

export default App;