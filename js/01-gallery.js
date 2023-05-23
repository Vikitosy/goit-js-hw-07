import { galleryItems } from "./gallery-items.js";
const galleryContainer = document.querySelector(".gallery");
const cardMarkup = createGalleryCard(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", cardMarkup);

function createGalleryCard(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>
        `;
    })
    .join("");
}

galleryContainer.addEventListener("click", openModalHandler);

function openModalHandler(evt) {
  evt.preventDefault();

  const isImageEl = evt.target.classList.contains("gallery__image");
  if (!isImageEl) {
    return;
  }

  const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">
`);

  instance.show();
  function closeModalHendler(e) {
      if (e.code === "Escape") {
        instance.close();

        document.removeEventListener("keydown", closeModalHendler);
      }
    }

  document.addEventListener("keydown", closeModalHendler);
}



// Change code below this line

console.log(galleryItems);
