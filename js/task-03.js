const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
]; 

// отримати посилання на список
const gallery = document.querySelector(".gallery");

//повернути в рядок елементи <li> з <img> , додати класи.
const createGalleryItem = ({ url, alt }) => {
  return `<li class="gallery-item"><img src="${url}" alt="${alt}" class="gallery-photo"></li>`;
};

//перетворити елементи масиву в елементи галереї з допомогою попередньої ф-ції, з'єднати в один рядок і додати до списку галереї
const createGallery = (images) => {
  const galleryItems = images.map(createGalleryItem).join("");
  gallery.insertAdjacentHTML("beforeend", galleryItems);
};

// Викликати з масивом images як аргументом
createGallery(images);

//_______________________________________________________________________________

// === покроковий варіант ===

// const gallery = document.querySelector(".gallery");
// console.log(listGallery);

// const completeTheListOfGallery = images.map((image) => {
//   const items = document.createElement("li");
//   const createImage = document.createElement("img");
//   const linkImage = image.url;
//   const aboutImage = image.alt;
//   createImage.setAttribute("src", linkImage);
//   createImage.setAttribute("alt", aboutImage);
//   items.appendChild(createImage);

//   listGallery.append(items);
// });
