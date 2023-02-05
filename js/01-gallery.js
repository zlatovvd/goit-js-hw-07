import { galleryItems } from "./gallery-items.js";
// Change code below this line

let gallery = document.querySelector(".gallery");
let instance;

gallery.addEventListener("click", onGalleryClick);
document.addEventListener("keydown", onEscape);

console.log(galleryItems);

let markup = galleryItems
  .map(
    (item) =>
      `<div class="gallery__item">
            <a class="gallery__link" href="${item.original}">
                <img class="gallery__image" 
                src="${item.preview}" 
                alt = "${item.description}" 
                data-source = "${item.original}"
               />
            </a>
        </div>`
  )
  .join("");

gallery.innerHTML = markup;

function onGalleryClick(event) {
  event.preventDefault();
  if (event.target.dataset.source) {
    instance = basicLightbox.create(
      `<img src="${event.target.dataset.source}"/>`,
      {
        onShow: (instance) =>
          instance.element().ownerDocument.activeElement.className ===
          "gallery__link",

        onClose: () => true,
      }
    );

    instance.show();
  }
}

function onEscape(event) {
  if (event.key === "Escape") {
    instance.close();
  }
}
