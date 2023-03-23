const tab = document.querySelectorAll("[tab-target]");
const content = document.querySelectorAll(".tab-content");

for (let i = 0; i < tab.length; i++) {

    tab[i].onclick = () => {
        for (let j = 0; j < content.length; j++) {
            content[j].classList.remove("active");
            content[j].classList.remove("animate__animated")
            content[j].classList.remove("animate__zoomIn");
        }
        const tabId = tab[i].getAttribute("tab-id");
        for (let k = 0; k < content.length; k++) {
            if (tabId == content[k].getAttribute("content-tab")) {
                content[k].classList.add("active");
                content[k].classList.add("animate__animated");
                content[k].classList.add("animate__zoomIn");
            }
        }
    }
}

$(document).ready(function(){
  $(".dropdown-me").click(function(){
    $(".modal-menu .sub-menu").slideToggle("slow");
  });
});

$('.popup-youtube').magnificPopup({
  disableOn: 700,
  type: 'iframe',
  mainClass: 'mfp-fade',
  removalDelay: 160,
  preloader: false,
  fixedContentPos: false
});


$('.responsive').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 2,
    arrows:false,
    autoplay:true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint:600 ,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.testimonial').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows:false,
    autoplay:true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll:1 
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });


  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });