/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation, Thumbs, Autoplay } from "swiper";
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Инициализация слайдеров
function initSliders() {
  // Перечень слайдеров
  // Проверяем, есть ли слайдер на стронице

  var gallerySlider = new Swiper(".gallery__body", {
    modules: [Navigation],
    loop: true,
    slidesPerView: 3,
    spaceBetween: 24,
    speed: 500,

    // Кнопки "влево/вправо"
    navigation: {
      prevEl: ".gallery__button-prev",
      nextEl: ".gallery__button-next",
    },

    // Брейкпоинты

    // breakpoints: {
    // 	320: {
    // 		slidesPerView: 1,
    // 		spaceBetween: 0,
    // 		autoHeight: true,
    // 	},
    // 	768: {
    // 		slidesPerView: 2,
    // 		spaceBetween: 20,
    // 	},
    // },
  });
  var employeesSlider = new Swiper(".employees__body", {
    modules: [Navigation],
    // loop: true,
    slidesPerView: 3,
    spaceBetween: 24,
    speed: 500,

    // Кнопки "влево/вправо"
    navigation: {
      prevEl: ".employees__button-prev",
      nextEl: ".employees__button-next",
    },

    // Брейкпоинты

    // breakpoints: {
    // 	320: {
    // 		slidesPerView: 1,
    // 		spaceBetween: 0,
    // 		autoHeight: true,
    // 	},
    // 	768: {
    // 		slidesPerView: 2,
    // 		spaceBetween: 20,
    // 	},
    // },
  });
  var reviewsWhSlider = new Swiper(".reviews-wh", {
    modules: [Navigation],
    loop: true,
    slidesPerView: 4,
    spaceBetween: 24,
    speed: 500,

    // Кнопки "влево/вправо"
    navigation: {
      prevEl: ".reviews-wh__button-prev",
      nextEl: ".reviews-wh__button-next",
    },

    // Брейкпоинты

    // breakpoints: {
    // 	320: {
    // 		slidesPerView: 1,
    // 		spaceBetween: 0,
    // 		autoHeight: true,
    // 	},
    // 	768: {
    // 		slidesPerView: 2,
    // 		spaceBetween: 20,
    // 	},
    // },
  });
  var reviewsAudioSlider = new Swiper(".reviews-audio", {
    modules: [Navigation],
    loop: true,
    slidesPerView: 4,
    spaceBetween: 24,
    speed: 500,

    // Кнопки "влево/вправо"
    navigation: {
      prevEl: ".reviews-audio__button-prev",
      nextEl: ".reviews-audio__button-next",
    },

    // Брейкпоинты

    // breakpoints: {
    // 	320: {
    // 		slidesPerView: 1,
    // 		spaceBetween: 0,
    // 		autoHeight: true,
    // 	},
    // 	768: {
    // 		slidesPerView: 2,
    // 		spaceBetween: 20,
    // 	},
    // },
  });
  var reviewsVideoSlider = new Swiper(".reviews-video", {
    modules: [Navigation],
    loop: true,
    slidesPerView: 3,
    spaceBetween: 24,
    speed: 500,

    // Кнопки "влево/вправо"
    navigation: {
      prevEl: ".reviews-video__button-prev",
      nextEl: ".reviews-video__button-next",
    },

    // Брейкпоинты

    // breakpoints: {
    // 	320: {
    // 		slidesPerView: 1,
    // 		spaceBetween: 0,
    // 		autoHeight: true,
    // 	},
    // 	768: {
    // 		slidesPerView: 2,
    // 		spaceBetween: 20,
    // 	},
    // },
  });
  var reviewsTextSlider = new Swiper(".reviews-text", {
    modules: [Navigation],
    loop: true,
    slidesPerView: 4,
    spaceBetween: 24,
    speed: 500,

    // Кнопки "влево/вправо"
    navigation: {
      prevEl: ".reviews-text__button-prev",
      nextEl: ".reviews-text__button-next",
    },

    // Брейкпоинты

    // breakpoints: {
    // 	320: {
    // 		slidesPerView: 1,
    // 		spaceBetween: 0,
    // 		autoHeight: true,
    // 	},
    // 	768: {
    // 		slidesPerView: 2,
    // 		spaceBetween: 20,
    // 	},
    // },
  });
  var licensesSlider = new Swiper(".licenses__body", {
    modules: [Navigation],
    loop: true,
    slidesPerView: 4,
    spaceBetween: 24,
    speed: 500,

    // Кнопки "влево/вправо"
    navigation: {
      prevEl: ".licenses__button-prev",
      nextEl: ".licenses__button-next",
    },

    // Брейкпоинты

    // breakpoints: {
    // 	320: {
    // 		slidesPerView: 1,
    // 		spaceBetween: 0,
    // 		autoHeight: true,
    // 	},
    // 	768: {
    // 		slidesPerView: 2,
    // 		spaceBetween: 20,
    // 	},
    // },

    // События
    on: {},
  });
  var newsSlider = new Swiper(".news__body", {
    modules: [Navigation],
    slidesPerView: 4,
    spaceBetween: 24,
    speed: 500,

    // Кнопки "влево/вправо"
    navigation: {
      prevEl: ".news__button-prev",
      nextEl: ".news__button-next",
    },

    // Брейкпоинты

    // breakpoints: {
    // 	320: {
    // 		slidesPerView: 1,
    // 		spaceBetween: 0,
    // 		autoHeight: true,
    // 	},
    // 	768: {
    // 		slidesPerView: 2,
    // 		spaceBetween: 20,
    // 	},
    // },

    // События
    on: {},
  });
  var ourClinicSlider = new Swiper(".our-clinic__col-img", {
    modules: [Navigation],
    loop: true,
    slidesPerView: 2,
    spaceBetween: 24,
    speed: 500,

    // Кнопки "влево/вправо"
    navigation: {
      prevEl: ".our-clinic__button-prev",
      nextEl: ".our-clinic__button-next",
    },

    // Брейкпоинты

    // breakpoints: {
    // 	320: {
    // 		slidesPerView: 1,
    // 		spaceBetween: 0,
    // 		autoHeight: true,
    // 	},
    // 	768: {
    // 		slidesPerView: 2,
    // 		spaceBetween: 20,
    // 	},
    // },

    // События
    on: {},
  });
  var rehabSlider = new Swiper(".recommendations-rehab", {
    modules: [Navigation],
    loop: true,
    slidesPerView: 4,
    spaceBetween: 24,
    speed: 500,

    // Кнопки "влево/вправо"
    navigation: {
      prevEl: ".recommendations__button-prev",
      nextEl: ".recommendations__button-next",
    },

    // Брейкпоинты

    // breakpoints: {
    // 	320: {
    // 		slidesPerView: 1,
    // 		spaceBetween: 0,
    // 		autoHeight: true,
    // 	},
    // 	768: {
    // 		slidesPerView: 2,
    // 		spaceBetween: 20,
    // 	},
    // },

    // События
    on: {},
  });
  var drugSlider = new Swiper(".recommendations-drug", {
    modules: [Navigation],
    loop: true,
    slidesPerView: 4,
    spaceBetween: 24,
    speed: 500,

    // Кнопки "влево/вправо"
    navigation: {
      prevEl: ".recommendations__button-prev",
      nextEl: ".recommendations__button-next",
    },

    // Брейкпоинты

    // breakpoints: {
    // 	320: {
    // 		slidesPerView: 1,
    // 		spaceBetween: 0,
    // 		autoHeight: true,
    // 	},
    // 	768: {
    // 		slidesPerView: 2,
    // 		spaceBetween: 20,
    // 	},
    // },

    // События
    on: {},
  });
}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
  let sliderScrollItems = document.querySelectorAll(".swiper_scroll");
  if (sliderScrollItems.length > 0) {
    for (let index = 0; index < sliderScrollItems.length; index++) {
      const sliderScrollItem = sliderScrollItems[index];
      const sliderScrollBar =
        sliderScrollItem.querySelector(".swiper-scrollbar");
      const sliderScroll = new Swiper(sliderScrollItem, {
        observer: true,
        observeParents: true,
        direction: "vertical",
        slidesPerView: "auto",
        freeMode: {
          enabled: true,
        },
        scrollbar: {
          el: sliderScrollBar,
          draggable: true,
          snapOnRelease: false,
        },
        mousewheel: {
          releaseOnEdges: true,
        },
      });
      sliderScroll.scrollbar.updateSize();
    }
  }
}

window.addEventListener("load", function (e) {
  // Запуск инициализации слайдеров
  initSliders();
  // Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
  //initSlidersScroll();
});
