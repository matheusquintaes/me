import './style.css';
import './index.html'
import $ from 'jquery';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';



$('.owl-carousel').owlCarousel({
    loop:false,
    margin:10,
    nav:true,
    items:1,
    center: true
})