import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import AddItem from './AddItem';
import SearchItem from './SearchItem';
import { useState } from 'react';

function App() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppingList')));
  const [newItem, setNewItem] = useState('')
  const [search, setSearch] = useState('')

  const setAndSavedItems = (newItems) => {
    setItems(newItems);
    localStorage.setItem('shoppingList', JSON.stringify(newItems));
  }

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setAndSavedItems(listItems);
  }

  const handleCheck = (id) => {
    //console.log(`key: ${id}`)
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
    setAndSavedItems(listItems);
  }

  const handleDelete = (id) => {
    //console.log(id)
    const listItems = items.filter((item) => item.id !== id);
    setAndSavedItems(listItems)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!newItem) return;
    //console.log(newItem)
    addItem(newItem);
    setNewItem('');
  }


  return (
    <div className="App">
      <Header title="Grocery List" />
      <SearchItem 
        search={search}
        setSearch={setSearch}
      />
      <AddItem 
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <Content 
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
