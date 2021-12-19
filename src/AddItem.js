import React from 'react'
import { FaPlus } from 'react-icons/fa';

const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
    
    // made AddItem a controlled component by giving our input one source of truth
    return (
        <form className="addForm">
            <label htmlFor='addItem'>AddItem</label>
            <input
            autoFocus
            id='addItem'
            type='text'
            placeholder='Add Item'
            required
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            />
            <button
                onClick={() => handleSubmit()}
                type='submit'
                aria-label='Add Item'
            >
                <FaPlus />     
            </button>    
        </form>
    )
}

export default AddItem;
