const setItem = (data) => {
    const result = localStorage.setItem("LinkList", JSON.stringify(data));
    return result;
}

const getItem = () => {
    const result = localStorage.getItem("LinkList");
    return result;
}

export {setItem, getItem}