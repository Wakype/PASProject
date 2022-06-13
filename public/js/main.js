var swiper = new Swiper(".mySwiper-home", {
  grabCursor: true,
  spaceBetween: 200,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
  },
  slidesPerView: "auto",
  navigation: {
    nextEl: ".swipe-right",
    prevEl: ".swipe-left",
  },
});

var swiper = new Swiper(".mySwiper-produk", {
  grabCursor: true,
  spaceBetween: 30,
  // centeredSlides: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  slidesPerView: "auto",
});

var swiper = new Swiper(".mySwiper-review", {
  grabCursor: true,
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  slidesPerView: "auto",
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

var swiper = new Swiper(".mySwiper-brand", {
  grabCursor: true,
  spaceBetween: 50,
  // centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  slidesPerView: "auto",
});

var nama = document.getElementById('nama');
var email = document.getElementById('email');
var pesan = document.getElementById('pesan');
var contact = document.getElementById('contact')

var nama_salah = document.getElementById('nama_salah');
var email_salah = document.getElementById('email_salah');
var pesan_salah = document.getElementById('pesan_salah');

nama.addEventListener('textInput', namaBenar);
email.addEventListener('textInput', emailBenar);
pesan.addEventListener('textInput', pesanBenar);

function validated() {
  var query = window.matchMedia('(max-width: 992px)');

  if (query.matches) {
    contact.style.height = '1200px';

    if (nama.value.length < 4) {
      nama.style.border = '1px solid red';
      nama_salah.style.display = 'block';
      nama.focus();
      return false;
    }
    if (email.value.length < 6) {
      email.style.border = '1px solid red';
      email_salah.style.display = 'block';
      email.focus();
      return false;
    }
    if (pesan.value.length < 12) {
      pesan.style.border = '1px solid red';
      pesan_salah.style.display = 'block';
      pesan.focus();
      return false;
    }
  } else {
    contact.style.height = '800px';

    if (nama.value.length < 4) {
      nama.style.border = '1px solid red';
      nama_salah.style.display = 'block';
      nama.focus();
      return false;
    }
    if (email.value.length < 6) {
      email.style.border = '1px solid red';
      email_salah.style.display = 'block';
      email.focus();
      return false;
    }
    if (pesan.value.length < 12) {
      pesan.style.border = '1px solid red';
      pesan_salah.style.display = 'block';
      pesan.focus();
      return false;
    }
  }
}

function namaBenar() {
  var query = window.matchMedia('(max-width: 992px)');

  if (query.matches) {
    if (nama.value.length >= 4) {
      contact.style.height = '1100px';
      nama.style.border = '2px solid #84b082';
      nama_salah.style.display = 'none';
      // contact.style.height = '700px';
      return true;
    }
  } else {
    if (nama.value.length >= 4) {
      contact.style.height = '700px';
      nama.style.border = '2px solid #84b082';
      nama_salah.style.display = 'none';
      return true;
    }
  }
}

function emailBenar() {
  var query = window.matchMedia('(max-width: 992px)');

  if (query.matches) {
    if (email.value.length >= 6) {
      contact.style.height = '1100px';
      email.style.border = '2px solid #84b082';
      email_salah.style.display = 'none';
      return true;
    }
  } else {
    if (email.value.length >= 6) {
      contact.style.height = '700px';
      email.style.border = '2px solid #84b082';
      email_salah.style.display = 'none';
      return true;
    }
  }
}

function pesanBenar() {
  var query = window.matchMedia('(max-width: 992px)');

  if (query.matches) {
    if (pesan.value.length >= 12) {
      contact.style.height = '1100px';
      pesan.style.border = '2px solid #84b082';
      pesan_salah.style.display = 'none';
      return true;
    }
  } else {
    if (pesan.value.length >= 12) {
      contact.style.height = '700px';
      pesan.style.border = '2px solid #84b082';
      pesan_salah.style.display = 'none';
      return true;
    }
  }
}