const swiper = new Swiper(".swiper-container", {


  slidesPerView: 1,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 3000,
  },
 
  pagination: {
    el: ".hero__pagination",
    type: "bullets",
  },

  
  navigation: {
    nextEl: ".hero-btn-next",
    prevEl: ".hero-btn-prev",
  }
});

const menu = document.querySelector(".header__bottom");
const modal = document.querySelector(".modal__container");

function toggleOpen(obj) {
  switch (obj) {
    case "menu": {
      console.log(obj);
      menu.classList.toggle("open");
      break;
    }
    case "modal": {
      console.log(obj);
      modal.classList.toggle("open");
      document.body.classList.toggle("openedModal");
      break;
    }
  }
}

document.querySelector(".modal__form_submit").addEventListener("click", (e) => {
  e.preventDefault();
  modal.querySelector(".modal").innerHTML = `
    <span onclick="toggleOpen('modal')" class="close__modal">
      <svg
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <path
            d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"
          ></path>
        </g>
      </svg>
    </span>
    <h2 class="modal_title">Форма обратной связи</h2>
    <p class="modal_text finished">Ваша заявка успешно отправлена</p>
    <button onclick="toggleOpen('modal')" class="modal_button btn" type="submit">Закрыть</button>`;
});

IMask(document.getElementById("phoneInput"), {
  mask: "+{7}(000)000-00-00",
});


