<!-- CONNECTION HEADER -->
	<?php include 'header.php' ?>
<!-- CONNECTION HEADER -->
				<div class="slider-main section" id="section0">
					<div class="swiper-container">
						<div class="swiper-pagination"></div>
						<div class="swiper-wrapper">
							<div class="swiper-slide" style="background-image: url('images/back-slider.jpg');">
								<div class="info-slide">
									<div>
										<p>
											Первый морской дизайн-курорт
										</p>
									</div>
									<p>
										Отдых в центре исторической Одессы на берегу Чёрного моря в условиях повышенной комфортности уже стал возможным благодаря появлению дизайн-отеля М1, позиционирующего себя как клубный отель.
									</p>
								</div>
							</div>
							<div class="swiper-slide" style="background-image: url('images/back-slider.jpg');">
								<div class="info-slide">
									<div>
										<p>
											Второй морской дизайн-курорт
										</p>
									</div>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
										tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
										quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
										consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
										cillum dolore eu fugiat nulla pariatur.
									</p>
								</div>
							</div>
						</div>
						<a href="#page-hotel" class="scroll-slide">Скрольте вниз</a>
					</div>
				</div>
				<div class="info-hotel section" id="section1"></div>
				<div class="info-hotel2 section" id="section2"></div>
				<div class="main-deals section" id="section3"></div>
				<div class="main-deals2 section" id="section4"></div>
				<div class="main-deals3 section" id="section5"></div>
				<div class="main-deals4 section" id="section6"></div>
				<div class="main-deals5 section" id="section7"></div>
				<div class="main-deals5 section" id="section8"></div>
			</div>
			<div id="chat">
				<span></span>
			</div>
		</div>
	</div>
	<script src="js/jquery-2.2.3.min.js"></script>
	<script src="js/swiper.min.js"></script>
	<script src="js/CSSPlugin.min.js"></script>
	<script src="js/EasePack.min.js"></script>
	<script src="js/TweenMax.min.js"></script>
	<script src="js/swiper.min.js"></script>
	<script src="js/main.js"></script>
	<script src="js/jquery.fullpage.min.js"></script>
	<script>
    $(document).ready(function(){
	    setTimeout(function(){
	       	var swiper = new Swiper('.swiper-container', {
		        pagination: '.swiper-pagination',
		        direction: 'vertical',
		        slidesPerView: 1,
		        paginationClickable: true,
		        spaceBetween: 0,
		        effect: 'coverflow',
		        autoplay: 5800,
		        speed: 1300,
		        coverflow: {
		            rotate: 10,
		            stretch: 0,
		            depth: 100,
		            modifier: 6,
		            slideShadows: true
	        	}
		    });
    	}, 9000);

    });

    (function() {
		var i, resize;

		i = setInterval(function() {
		    return $("nav").toggleClass("cross");
		}, 1500);

		$("nav").click(function() {
		    clearInterval(i);
		    return $("nav").toggleClass("cross");
		});

	}).call(this);
    </script>
</body>
</html>