import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

document.addEventListener("DOMContentLoaded", () => {
  const images = [
    {
      preview: "https://picsum.photos/id/1015/300/200",
      original: "https://picsum.photos/id/1015/1200/800",
      description: "Mountain landscape",
    },
    {
      preview: "https://picsum.photos/id/1016/300/200",
      original: "https://picsum.photos/id/1016/1200/800",
      description: "River in forest",
    },
    {
      preview: "https://picsum.photos/id/1024/300/200",
      original: "https://picsum.photos/id/1024/1200/800",
      description: "Beautiful dog",
    },
  ];

  const galleryEl = document.querySelector(".gallery");

  if (!galleryEl) return;

  const markup = images
    .map(
      ({ preview, original, description }) => `
        <li class="gallery-item">
          <a class="gallery-link" href="${original}">
            <img
              class="gallery-image"
              src="${preview}"
              alt="${description}"
            />
          </a>
        </li>
      `
    )
    .join("");

  galleryEl.innerHTML = markup;

  new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
  });
});
