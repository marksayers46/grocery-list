import React from 'react'
import { FaTrashAlt } from 'react-icons/fa';

const AddItem = () => {
    
    
    return (
        <form className="addForm">
            <label htmlFor='addItem'>AddItem</label>
            <input
            autoFocus
            id='addItem'
            type='text'
            placeholder='Add Item'
            required
            />
            <button
                type='submit'
                aria-label='Add Item'
            >
                <FaTrashAlt />     
            </button>    
        </form>
    )
}

export default AddItem;
