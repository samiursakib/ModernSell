import React from "react";

// Styles

const Header = ({ tabs, selected, setSelected, children }) => {
  return (
    <div style={{width: '100%', display: 'flex'}}>
      <ul className='nav nav-pills' style={{marginTop: '300px', display: 'flex', flexDirection: 'column', marginLeft: -100, marginRight: 100}}>
        {
          tabs.map( tab => {
            const active = tab === selected ? ' active' : '';
            return (
              <li className='nav-item' key={tab} style={{cursor: 'pointer'}}>
                <button className={'nav-link' + active } onClick={() => setSelected(tab)}>{ tab }</button>
              </li>
            );
          })
        }
      </ul>
      <div className='middleContent'>{ children }</div>
    </div>
  );
};

export default Header;