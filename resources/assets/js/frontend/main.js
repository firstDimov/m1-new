$(document).ready(function(){
  var hotel = new TimelineMax;
  var specdeals = new TimelineMax;
  var imd = new TimelineMax;
  var numbers = new TimelineMax;
  var main = new TimelineMax;
  var contacts = new TimelineMax;
  var sw = 0;

  if (screen.width > 1024) {
    sw = 19;
  } else if (screen.width <= 1024) {
    sw = 16;
  }

  var router = new Router();

  main
    .to($('.line-main1'), 0.5, {width: '100%', delay: 0.1})
    .to($('.line-main3'), 0.5, {height: '100%'})
    .to($('.line-main2'), 0.5, {width: '100%'})
    .to($('.line-main4'), 0.5, {height: '100%'})
    .to($('.loader-main'), 0.5, {autoAlpha: 1})
    .to($('.zip-loader img'), 0.5, {autoAlpha: 1})
    .to($('.bpd22, .bpd44'), 0.5, {width: '82%'})
    .to($('.hbpd66, .hbpd55'), 0.5, {height: '100%'})
    .to($('.bpd11, .bpd33'), 0.5, {width: '12%'})
    .add('end')
    .to($('.bpd22, .bpd44'), 0.5, {width: '12%'}, 'end')
    .to($('.bpd11, .bpd33'), 0.5, {width: '82%'}, 'end')
    .to($('#content-in'), 0.5, {delay: 0.1, autoAlpha: 1})
    .to($('#mask-main'), 0.1, {borderWidth: sw})
    .to($('.loader-main, .line-main'), 1, {autoAlpha: 0, display: 'none'})
    .to($('nav'), 1, {top: -12, autoAlpha: 1})
    .to($('#chat'), 1, {autoAlpha: 1})
    .to($('.info-slide'), 1, {bottom: '18%', autoAlpha: 1})
    .to($('.swiper-pagination'), 1, {autoAlpha: 1})
    .fromTo($('.scroll-slide'), 1.6, {y: -25, autoAlpha: 0.6}, {y: 0, autoAlpha: 1, repeat: -1});

    $.fn.clickToggle = function(func1, func2) {
        var funcs = [func1, func2];
        this.data('toggleclicked', 0);
        this.click(function() {
            var data = $(this).data();
            var tc = data.toggleclicked;
            $.proxy(funcs[tc], this)();
            data.toggleclicked = (tc + 1) % 2;
        });
        return this;
    };

    $('#menu-open').clickToggle(function() {
        $('.menu-burger').css('display','block');
        TweenLite.to($('.menu-burger div'), 0.7, {autoAlpha: 1, right: '16px'});
    }, function() {
      $('.menu-burger').css('display','none');
        TweenLite.to($('.menu-burger div'), 0.7, {autoAlpha: 0, right: '-300px'});
    });

    var i1 = $('.info-slide').offset().top;
    var i2 = $('.info-slide').offset().left;
    var a1 = $('.swiper-pagination').width();
    $('.swiper-pagination').offset({top: (i1 + 20), left: (i2 - 25)});

    var links = ['','page-hotel','deals','numbers','bars','services','events','gallery','contacts'],
        curSect = 1,
        loadPage = function(index){
          var curLink = '/'+links[(index-1)];
          router.navigate(curLink);
          curSect = index;
        };

    $('nav ul li a').click(function () {
      var link = $(this).attr('href');
      router.navigate(link);
      return false;
    });

    router.route('/', function(){
    $.get(
        'main.php',
        function(data){
          var response = $('.section', data).html();
          $('.section[data-id="1"]').html(response);
          $.fn.fullpage.moveTo(1);
          curSect = 1;
        }
      );
    });
    router.route('/:page', function(page){
      $.get(
        page+'.php',
        function(data){
          var response = $('.section', data).html(),
              secId = parseInt($('.section[data-page="'+page+'"]').attr('data-id'));
              
          $('.section[data-page="'+page+'"]').html(response);
          $.fn.fullpage.moveTo(secId);
          $('nav ul li').removeClass('active');
          $('nav ul li').eq(secId - 2).addClass('active');
          curSect = secId;
          if (secId == 2) {
            hotel
              .to($('.info-slide2'), 0.1, {autoAlpha: 1})
              .fromTo($('.info-slide2 div p'), 1, {y: -20, autoAlpha: 0}, {y: 0, autoAlpha: 1})
              .fromTo($('.info-slide2 > p'), 1, {y: -20, autoAlpha: 0}, {y: 0, autoAlpha: 1, delay: 0.01})
              .fromTo($('.info-slide2 span'), 1, {width: 0, autoAlpha: 0}, {width: '107%', autoAlpha: 1, delay: 0.02})
              .fromTo($('.info-slide2 span p'), 0.6, {scale: 0, autoAlpha: 0}, {scale: 1, autoAlpha: 1});
          } else if (secId == 3) {
            specdeals
              .fromTo($('.inset-md'), 1, {y: 30, autoAlpha: 0}, {y: 0, autoAlpha: 1, delay: 0.1})
              .fromTo($('.inset-md span'), 1, {autoAlpha: 0}, {autoAlpha: 1, delay: 0.4});
          } else if (secId == 4) {
            numbers
              .fromTo($('.inset-md-num'), 1, {y: 30, autoAlpha: 0}, {y: 0, autoAlpha: 1});
          } else if (secId == 5) {
            numbers
              .fromTo($('.inset-md-num'), 1, {y: 30, autoAlpha: 0}, {y: 0, autoAlpha: 1});
          } else if (secId == 6) {
            numbers
              .fromTo($('.inset-md-num'), 1, {y: 30, autoAlpha: 0}, {y: 0, autoAlpha: 1});
          } else if (secId == 7) {
            specdeals
              .fromTo($('.inset-md'), 1, {y: 30, autoAlpha: 0}, {y: 0, autoAlpha: 1, delay: 0.1});
          } else if (secId == 8) {
            specdeals
              .fromTo($('.inset-md'), 1, {y: 30, autoAlpha: 0}, {y: 0, autoAlpha: 1, delay: 0.1});
          } else if (secId == 9) {
            contacts
              .fromTo($('.map-google'), 1, {y: 66}, {autoAlpha: 1, y: 0})
              .fromTo($('.in-cm').eq(0), 0.7, {y: 30}, {y: 0, autoAlpha: 1})
              .fromTo($('.in-cm').eq(1), 0.7, {y: 30}, {y: 0, autoAlpha: 1, delay: 0.01})
              .fromTo($('.in-cm').eq(2), 0.7, {y: 30}, {y: 0, autoAlpha: 1, delay: 0.01})
              .fromTo($('.in-cm').eq(3), 0.7, {y: 30}, {y: 0, autoAlpha: 1, delay: 0.01})
              .fromTo($('.in-cm a').eq(0), 0.2, {scale: 0, autoAlpha: 0.5}, {scale: 1, autoAlpha: 0.7})
              .fromTo($('.in-cm a').eq(1), 0.2, {scale: 0, autoAlpha: 0.5}, {scale: 1, autoAlpha: 0.7, delay: 0.01})
              .fromTo($('.in-cm a').eq(2), 0.2, {scale: 0, autoAlpha: 0.5}, {scale: 1, autoAlpha: 0.7, delay: 0.01});
          }
        }
      );
    });
    // router.route('/deals/:inner', function(page){
    //   $.get(
    //     '/api/deals/'+page+'.php',
    //     function(data){
    //       var response = $('.section', data).html(),
    //           secId = parseInt($('.section[data-page="'+page+'"]').attr('data-id'));

    //       $('.section[data-page="'+page+'"]').html(response);
    //       $.fn.fullpage.moveTo(secId);
    //       curSect = secId;
    //     }
    //   );
    // })


    $('#fullpage').fullpage({
      'verticalCentered': false,
      'css3': true,
      menu: 'nav ul',
        onLeave: function( index, slideIndex, direction, nextSlideIndex){
          loadPage(slideIndex);
        }
    });

});