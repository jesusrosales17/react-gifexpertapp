import { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({setCategories}) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    if(inputValue.trim().length > 0) {
      setCategories(cats => [inputValue, ...cats]);
      setInputValue("");
    }
  }
  return (
    <form onSubmit={handleSubmit}>
        <input 
            type="text" 
            placeholder='Add a new category'
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
        />
    </form>
  )
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}

export default AddCategory