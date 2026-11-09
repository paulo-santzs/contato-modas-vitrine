const whatsappBase = "https://wa.me/5514996066057?text=";
document.querySelectorAll("[data-product]").forEach((link) => {
  const item = link.dataset.product;
  const message = `Oi! Vi a peça “${item}” na vitrine da Contato Modas. Você pode me informar o preço, os tamanhos e a disponibilidade?`;
  link.href = whatsappBase + encodeURIComponent(message);
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.setAttribute("aria-label", `Consultar ${item} pelo WhatsApp`);
  link.title = `Consultar ${item} pelo WhatsApp`;
});

const lightbox = document.querySelector(".lightbox");
const lightboxImage = lightbox?.querySelector("img");
document.querySelectorAll("[data-lightbox]").forEach((link) => link.addEventListener("click", (event) => {
  event.preventDefault();
  if (!lightbox || !lightboxImage) return;
  lightboxImage.src = link.href;
  lightboxImage.alt = link.querySelector("img")?.alt || "Peça da Contato Modas";
  lightbox.showModal();
}));
lightbox?.querySelector(".lightbox-close")?.addEventListener("click", () => lightbox.close());
lightbox?.addEventListener("click", (event) => {
  if (event.target === lightbox) lightbox.close();
});
