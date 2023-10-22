export const optionButton = (db, target, op) => {
  let tr;
  if (target.title == op) tr = target.parentElement.parentElement.parentElement;
  else tr = target.parentElement.parentElement.parentElement.parentElement;
  return db[tr.children[0].innerText - 1].idCategory;
};
