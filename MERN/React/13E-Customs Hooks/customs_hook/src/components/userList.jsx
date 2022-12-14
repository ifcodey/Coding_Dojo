// useList.js
import { useState } from 'react';

const useList = (initialList = []) => {
    const [list, setList] = useState(initialList);

    function add(str) {
        setList([...list, str]);
    }

    function remove(index) {
        setList([
            ...list.slice(0, index),
            ...list.slice(index + 1)
        ]);
    }

    // send a list and function to Hook component.
    return {
        list,
        add,
        remove
    };
}
export default useList;
