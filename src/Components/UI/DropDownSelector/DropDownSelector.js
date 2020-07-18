import React from 'react';
import styles from './DropDownSelector.module.css'


function DropDownSelector({items}) {
    const [show, setShow] = React.useState(false);
    const [selectedItem, setSelectedItem] = React.useState("Select an organisation");

    const selectItem = (item) => {
        setSelectedItem(item.name);
        setShow(false);
    }

    return (
        <div className={styles.DropDownSelector}>
            <div className={styles.SelectedItem}>{selectedItem}</div>
            <div className={styles.DropDownButton} onClick={()=>setShow(!show)}><span className={styles.ArrowDown}></span></div>
            {show ? items.map((item)=> <div onClick={()=>selectItem(item.name)} key={item.id}>{item.name}</div>) : null}
            <select name="selector">
                {items.map((item => <option value={item.name}></option>))}
            </select>
        </div>
        
    );
}

export default DropDownSelector;