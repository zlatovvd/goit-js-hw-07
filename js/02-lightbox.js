import { galleryItems } from "./gallery-items.js";

console.log(galleryItems);

let gallery = document.querySelector(".gallery");

let markup = galleryItems
  .map(
    (item) =>
      `<li class="gallery__item">
          <a  class="gallery__link" href="${item.original}">
            <img class="gallery__image" 
              src="${item.preview}" 
              alt = "${item.description}" 
            />
          </a>
       </li>`
  )
  .join("");

gallery.innerHTML = markup;

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  captionPosition: 'bottom',
});
