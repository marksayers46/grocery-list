import React from 'react'
import { FaPlus } from 'react-icons/fa';

const AddItem = ({ handleSubmit }) => {
    
    
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
