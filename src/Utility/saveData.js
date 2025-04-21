const getIdLocalStorage = () => {
  const storageId = localStorage.getItem("lawyerId");
  if (storageId) {
    return JSON.parse(storageId);
  } else {
    return [];
  }
};

const saveIdLocalStorage = (id) => {
  const storId = getIdLocalStorage();
  console.log(storId);
  const filterId = storId?.find((strId) => strId == id);
  if (filterId) {
    alert("Already Booked");
    return;
  } else {
    storId.push(id);
    const stringifyId = JSON.stringify(storId);
    localStorage.setItem("lawyerId", stringifyId);
    alert("Doctor Book");
  }
};

const deleteIdLocalStorage = (id) => {
  const storId = getIdLocalStorage();
  const filterDeleteId = storId.filter((stId) => stId !== id);
  const stringifyId = JSON.stringify(filterDeleteId);
  localStorage.setItem("lawyerId", stringifyId);
};

export { saveIdLocalStorage, getIdLocalStorage, deleteIdLocalStorage };
