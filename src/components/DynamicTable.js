import React, {useEffect, useState} from 'react';

const DynamicTable = ({amount}) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const arrItems = [];
        for (let i = 0; i < amount; i += 1) {
            arrItems.push('down');
        }
        setItems(arrItems);

        return () => {
        };
    }, [amount]);


    const handleClickItem = (selectedIndex) => {
        const newItems = items.map((i, position) => {
            if (selectedIndex === position) {
                return "up";
            }

            return "down";
        })

        setItems(newItems)
    }

    return (
        <table>
            <tbody>
            <tr>
                {items.map((item, index) => (
                    <td
                        style={{padding: 10, background: "#F2F4F6", cursor: 'pointer'}}
                        onClick={() => handleClickItem(index)}
                    >
                        {item}
                    </td>
                ))}
            </tr>
            </tbody>
        </table>
    );
};

export default DynamicTable;
