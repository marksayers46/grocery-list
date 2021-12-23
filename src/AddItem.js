import React from 'react'
import { FaPlus } from 'react-icons/fa';
import { useRef } from 'react';

const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
    const inputRef = useRef();
    
    // made AddItem a controlled component by giving our input one source of truth
    return (
        <form className="addForm" onSubmit={(e) => handleSubmit(e)}>
            <label htmlFor='addItem'>Add Item</label>
            <input
                autoFocus
                ref={inputRef}
                id='addItem'
                type='text'
                placeholder='Add Item...'
                required
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
            />
            <button
                // onClick={(e) => handleSubmit(e)}
                type='submit'
                aria-label='Add Item'
                onClick={(e) => inputRef.current.focus()}
            >
                <FaPlus />     
            </button>    
        </form>
    )
}

export default AddItem;
