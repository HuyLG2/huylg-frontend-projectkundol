const carouselItem = document.querySelector(".main-carousel");
for (i = 1; i <= 4; i++) {
  const div = document.createElement("div");
  div.setAttribute("class", "carousel-cell");
  div.innerHTML = `
        <div class="item">
            <img src="./img/slide-img-${i}.jpg" />
            <div class="caption">
                <h1>Creative Frontend</h1>
                <p>I'm Frontend Developer. I work at Vietnam. my skill React, Web Responsive</p>
            </div>
        </div>
`;
  carouselItem.appendChild(div);
}

const elem = document.querySelector(".main-carousel");
let flkty = new Flickity(elem, {
  // options
  cellAlign: "center",
  contain: true,
  wrapAround: true,
  pageDots: false,
});

let textH1 = document.querySelectorAll(".main-carousel h1");
let textP = document.querySelectorAll(".main-carousel p");
let rangerColor = ["black", "yellow", "purple", "pink"];
flkty.on("change", (item, index) => {
  textH1.forEach((val, i) => {
    if (i === item) {
      val.classList.add("active-h1");
    } else {
      val.classList.remove("active-h1");
    }
    rangerColor.forEach((value, y) => {
      if (i === y) {
        val.style.color = value;
      }
    });
  });
  textP.forEach((val, i) => {
    if (i === item) {
      val.classList.add("active-p");
    } else {
      val.classList.remove("active-p");
    }
    rangerColor.forEach((value, y) => {
      if (i != y) {
        val.style.color = value;
      }
    });
  });
});
