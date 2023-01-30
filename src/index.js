import "./css/style.css"; //importing css
const modalBox = document.querySelector(".modal");
const modal = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("block");
    }, 3000);
  });
};
const section1 = document.querySelector("#myModal");
section1.classlist.add(".modal__content");
modal().then((result) => (modalBox.style.display = result));
