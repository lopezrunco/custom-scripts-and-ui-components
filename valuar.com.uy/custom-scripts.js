console.log("Running custom JS");
let d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  appendContactInfo();
  appendBrandsBanner();
});

// Insert contact info on header
const appendContactInfo = () => {
  const $contactInfoWrapper = d.createElement("div");
  const headerElement = d.getElementById("astroid-header");

  $contactInfoWrapper.classList.add("contact-info-wrapper");
  $contactInfoWrapper.innerHTML = `
        <div class='container'>
            <div class='row'>
                <div class='content-wrapper'>
                    <a href='https://wa.me/59896591693' target='_blank'><i class="fab fa-whatsapp"></i>096 591 693</a>
                    <a href='tel:26011774' target='_blank'><i class="fas fa-phone"></i>2481 9265</a>
                    <a href='mailto:info@valuar.com.uy' target='_blank'><i class="far fa-envelope"></i>info@valuar.com.uy</a>
                </div>
            </div>
        </div>
    `;
  headerElement.appendChild($contactInfoWrapper);
};

// Reorder array
const reorderArrayRandomnly = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

// Append brand banner
const appendBrandsBanner = () => {
  const brands = [
    { title: "impol", imgSrc: "2023/04/25/impol.jpg" },
    { title: "zimmer", imgSrc: "2024/04/16/zimmer.jpg" },
    { title: "zepf", imgSrc: "2023/04/25/zepf.jpg" },
    { title: "normmed", imgSrc: "2023/04/25/normmed.jpg" },
    { title: "heraeus", imgSrc: "2023/04/25/heraeus.jpg" },
    { title: "brainlab", imgSrc: "2023/04/25/brainlab.jpg" },
    { title: "cdh", imgSrc: "2023/04/25/cdh.jpg" },
    { title: "bmt", imgSrc: "2023/04/25/bmt.jpg" },
    { title: "choicespine", imgSrc: "2023/04/25/choicespine.jpg" },
  ];

  const reorderedBrands = reorderArrayRandomnly(brands);

  const baseUrl = "https://valuar.com.uy/images/";
  const $contentWrapperElement = d.getElementById("nuestras-marcas");

  const $bannerWrapper = d.createElement("div");
  $bannerWrapper.classList.add("banner-wrapper");
  const $bannerContent = d.createElement("div");
  $bannerContent.classList.add("banner-content");

  reorderedBrands.forEach((element) => {
    const $imageWrapperElement = d.createElement("div");
    $imageWrapperElement.classList.add("image-wrapper");
    const $imageElement = d.createElement("img");
    $imageElement.setAttribute("src", baseUrl + element.imgSrc);
    $imageElement.setAttribute("alt", element.title);
    $imageWrapperElement.appendChild($imageElement);
    $bannerContent.appendChild($imageWrapperElement);
  });

  $bannerWrapper.appendChild($bannerContent);
  $contentWrapperElement.appendChild($bannerWrapper);
};
