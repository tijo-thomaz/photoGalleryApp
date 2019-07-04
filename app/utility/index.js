export const RowBuilder=(items, itemsPerRow = 3)=>{
    return items.reduce((rows, item, key) => {
        if(key % itemsPerRow === 0 && key > 0) rows.push([]);
        rows[rows.length-1].push(item);
        return rows;
    }, [[]]);
}