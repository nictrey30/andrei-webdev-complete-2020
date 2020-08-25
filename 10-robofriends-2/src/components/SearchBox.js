import React from 'react';

const SearchBox = ({ searchChange }) => {
  return (
    <div className='p2'>
      <input
        type='search'
        className='pa3 ba b--green bg-lightest-blue'
        name=''
        id=''
        placeholder='search robots'
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
