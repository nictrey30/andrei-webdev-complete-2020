import React from 'react';

function SearchBox({ searchChange }) {
  return (
    <div className='fixbar'>
      <input
        className='pa3 ba b--green bg-lightest-blue'
        type='search'
        name=''
        id=''
        placeholder='search robots'
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;
