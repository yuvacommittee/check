jQuery(window).scroll(function(){
    if (jQuery(this).scrollTop() > 50) {
        jQuery('.main-menu').addClass('sticky');
    } else {
        jQuery('.main-menu').removeClass('sticky');
    }
});
jQuery(document).ready(function($){
    var owlCustSlider = jQuery('.banner-slider');
    owlCustSlider.owlCarousel({
    margin: 15,
    nav: true,
	navText: [
		'<i class="fa fa-angle-left" aria-hidden="true"></i>',
		'<i class="fa fa-angle-right" aria-hidden="true"></i>'
	  ],
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout:30000,
    smartSpeed:450,
    dots: false,
	video:true,
    loop: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });

    $(".mobile_code").intlTelInput({
      initialCountry: "US",
      separateDialCode: true,
      // utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/11.0.4/js/utils.js"
    });

    // menubar icon
    $('.navbar-toggler').on('click', function () {
      $(this).toggleClass('change')
    });
    $('.navbar-toggler').on('click', function () {
        $('body').toggleClass('fixed')
    });
    
	
	if( jQuery('.gallery-slider').length > 0 ) {
		$(document).ready(function() {
	  /*var bigimage = $("#big");
	  var thumbs = $("#thumbs"); */
	var bigimage = $("#sync1");
	var thumbs = $("#sync2");
	  //var totalslides = 10;
	  var syncedSecondary = true;

	  bigimage
		.owlCarousel({
		 items: 1,
        slideSpeed: 2000,
        nav: true,
        autoplay: false, 
        dots: false,
      animateIn: 'fadeIn', // add this
    animateOut: 'fadeOut',
        loop: true,
        responsiveRefreshRate: 200,
		navText: [
		  '<i class="fa fa-angle-left" aria-hidden="true"></i>',
		'<i class="fa fa-angle-right" aria-hidden="true"></i>'
		],
	  })
		.on("changed.owl.carousel", syncPosition);

	  thumbs
		.on("initialized.owl.carousel", function() {
		thumbs
		  .find(".owl-item")
		  .eq(0)
		  .addClass("current");
	  })
		.owlCarousel({
		dots: false,
		smartSpeed: 200,
        slideSpeed: 500,
		nav: false,
		navText: [
		 '<i class="fa fa-angle-left" aria-hidden="true"></i>',
		'<i class="fa fa-angle-right" aria-hidden="true"></i>'
		],
		// slideBy: 4,
		responsiveRefreshRate: 100,
		responsive: {
				0: {
                    items: 3
                  },
                  600: {
                    items: 3
                  },
				  1000: {
                    items: 5
                  }
			}
	  })
		.on("changed.owl.carousel", syncPosition2);

	  function syncPosition(el) {
		//if loop is set to false, then you have to uncomment the next line
		//var current = el.item.index;

		//to disable loop, comment this block
		var count = el.item.count - 1;
		var current = Math.round(el.item.index - el.item.count / 2 - 0.5);

		if (current < 0) {
		  current = count;
		}
		if (current > count) {
		  current = 0;
		}
		//to this
		thumbs
		  .find(".owl-item")
		  .removeClass("current")
		  .eq(current)
		  .addClass("current");
		var onscreen = thumbs.find(".owl-item.active").length - 1;
		var start = thumbs
		.find(".owl-item.active")
		.first()
		.index();
		var end = thumbs
		.find(".owl-item.active")
		.last()
		.index();

		if (current > end) {
		  thumbs.data("owl.carousel").to(current, 100, true);
		}
		if (current < start) {
		  thumbs.data("owl.carousel").to(current - onscreen, 100, true);
		}
	  }

	  function syncPosition2(el) {
		if (syncedSecondary) {
		  var number = el.item.index;
		  bigimage.data("owl.carousel").to(number, 100, true);
		}
	  }

	  thumbs.on("click", ".owl-item", function(e) {
		e.preventDefault();
		var number = $(this).index();
		bigimage.data("owl.carousel").to(number, 300, true);
	  });
	});
	 /*var sync1 = $("#sync1");
	  var sync2 = $("#sync2");

	  sync1.owlCarousel({
		  items : 1,
		singleItem : true,
		autoPlay : true,
		slideSpeed : 1000,
		navigation: true,
		pagination:true,
		afterAction : syncPosition,
		responsiveRefreshRate : 200,
	  });

	  sync2.owlCarousel({
		items : 5,
		itemsDesktop      : [1199,10],
		itemsDesktopSmall     : [979,10],
		itemsTablet       : [768,8],
		itemsMobile       : [479,4],
		pagination:false,
		responsiveRefreshRate : 100,
		afterInit : function(el){
		  el.find(".owl-item").eq(0).addClass("synced");
		}
	  });

	  function syncPosition(el){
		var current = this.currentItem;
		$("#sync2")
		  .find(".owl-item")
		  .removeClass("synced")
		  .eq(current)
		  .addClass("synced")
		if($("#sync2").data("owlCarousel") !== undefined){
		  center(current)
		}
	  }

	  $("#sync2").on("click", ".owl-item", function(e){
		e.preventDefault();
		var number = $(this).data("owlItem");
		sync1.trigger("owl.goTo",number);
	  });

	  function center(number){
		var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
		var num = number;
		var found = false;
		for(var i in sync2visible){
		  if(num === sync2visible[i]){
			var found = true;
		  }
		}

		if(found===false){
		  if(num>sync2visible[sync2visible.length-1]){
			sync2.trigger("owl.goTo", num - sync2visible.length+2)
		  }else{
			if(num - 1 === -1){
			  num = 0;
			}
			sync2.trigger("owl.goTo", num);
		  }
		} else if(num === sync2visible[sync2visible.length-1]){
		  sync2.trigger("owl.goTo", sync2visible[1])
		} else if(num === sync2visible[0]){
		  sync2.trigger("owl.goTo", num-1)
		}

	  }*/
	}
// 	mobile menu js 
	 jQuery('.menu-item-has-children > .nav-link').on('click', function(e) {
      jQuery('.sub-menu').toggleClass("open");  
      e.preventDefault();
    });
});

if( jQuery('.custom-select').length > 0 ) {

    var x, i, j, l, ll, selElmnt, a, b, c;
    x = document.getElementsByClassName("custom-select");
    l = x.length;
    for (i = 0; i < l; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    ll = selElmnt.length;
    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected form-control");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
	
    for (j = 1; j < ll; j++) {
        c = document.createElement("DIV");
        c.innerHTML = selElmnt.options[j].innerHTML;
        c.addEventListener("click", function(e) {
            var y, i, k, s, h, sl, yl;
            s = this.parentNode.parentNode.getElementsByTagName("select")[0];
            sl = s.length;
            h = this.parentNode.previousSibling;
            for (i = 0; i < sl; i++) {
            if (s.options[i].innerHTML == this.innerHTML) {
                s.selectedIndex = i;
                h.innerHTML = this.innerHTML;
                y = this.parentNode.getElementsByClassName("same-as-selected");
                yl = y.length;
                for (k = 0; k < yl; k++) {
                y[k].removeAttribute("class");
                }
                this.setAttribute("class", "same-as-selected");
                break;
            }
            }
            h.click();
        });
        b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function(e) {
        e.stopPropagation();
        closeAllSelect(this);
        this.nextSibling.classList.toggle("select-hide");
        this.classList.toggle("select-arrow-active");
        });
    }
    function closeAllSelect(elmnt) {
    var x, y, i, xl, yl, arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    xl = x.length;
    yl = y.length;
    for (i = 0; i < yl; i++) {
        if (elmnt == y[i]) {
        arrNo.push(i)
        } else {
        y[i].classList.remove("select-arrow-active");
        }
    }
    for (i = 0; i < xl; i++) {
        if (arrNo.indexOf(i)) {
        x[i].classList.add("select-hide");
        }
    }
    }
    document.addEventListener("click", closeAllSelect);
}

jQuery(window).on('load', function () {
	jQuery('.select-items div:nth-child(1)').addClass('same-as-selected');
	jQuery(document).on('click', ".select-items > div", function () {
		var sel = jQuery(this).text();
		if(sel == "English"){
			jQuery('span.language').text("En");
		}
		if(sel == "हिन्दी"){
			jQuery('span.language').text("आ");
		}
	});
})

// timeline js 
if( jQuery('.subscribe-form').length > 0 ) {
	var regexpEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	jQuery(document).ready(function(){
		jQuery('.subscribe-form .subscribe-btn').click(function(){
			var err = 0;
			var email = jQuery('.subscribe-form input[type="email"]').val();
			if(email == "" || !regexpEmail.test(email)){
				jQuery('.subscribe-form input[type="email"]').addClass('error');
				err++;
			}else{
				jQuery('.subscribe-form input[type="email"]').removeClass('error');
			}
			if(!jQuery('.subscribe-form input[type="checkbox"]').is(":checked")){
				jQuery('.subscribe-form .form-check-label').addClass('error');
				err++;
			}else{
				jQuery('.subscribe-form .form-check-label').removeClass('error');
			}
			if(err != 0){
				return false;
			}
		});
	});
}
if( jQuery('.js-timeline').length > 0 ) {
(function ($) {
    $(function () {
  
  
      $(window).on('scroll', function () {
        fnOnScroll();
      });
  
      $(window).on('resize', function () {
        fnOnResize();
      });
  
  
      var agTimeline = $('.js-timeline'),
        agTimelineLine = $('.js-timeline_line'),
        agTimelineLineProgress = $('.js-timeline_line-progress'),
        agTimelinePoint = $('.js-timeline-card_point-box'),
        agTimelineItem = $('.js-timeline_item'),
        agOuterHeight = $(window).outerHeight(),
        agHeight = $(window).height(),
        f = -1,
        agFlag = false;
  
      function fnOnScroll() {
        agPosY = $(window).scrollTop();
  
        fnUpdateFrame();
      }
  
      function fnOnResize() {
        agPosY = $(window).scrollTop();
        agHeight = $(window).height();
  
        fnUpdateFrame();
      }
  
      function fnUpdateWindow() {
        agFlag = false;
  
        agTimelineLine.css({
          top: agTimelineItem.first().find(agTimelinePoint).offset().top - agTimelineItem.first().offset().top,
          bottom: agTimeline.offset().top + agTimeline.outerHeight() - agTimelineItem.last().find(agTimelinePoint).offset().top
        });
  
        f !== agPosY && (f = agPosY, agHeight, fnUpdateProgress());
      }
  
      function fnUpdateProgress() {
        var agTop = agTimelineItem.last().find(agTimelinePoint).offset().top;
  
        i = agTop + agPosY - $(window).scrollTop();
        a = agTimelineLineProgress.offset().top + agPosY - $(window).scrollTop();
        n = agPosY - a + agOuterHeight / 2;
        i <= agPosY + agOuterHeight / 2 && (n = i - a);
        agTimelineLineProgress.css({height: n + "px"});
  
        agTimelineItem.each(function () {
          var agTop = $(this).find(agTimelinePoint).offset().top;
  
          if((agTop + agPosY - $(window).scrollTop()) < agPosY + .5 * agOuterHeight){
            $('.js-timeline_item').removeClass('js-ag-active');
            $(this).addClass('js-ag-active');
          }
          // else{
          //   $(this).removeClass('js-ag-active');
          // } 
        })
      }
  
      function fnUpdateFrame() {
        agFlag || requestAnimationFrame(fnUpdateWindow);
        agFlag = true;
      }
  
  
    });
  })(jQuery);
	
}



/* Gallery Slider
jQuery(document).ready(function($){
	$('.home-banner-slider').owlCarousel({
		loop: true,
		items: 1,
		slideSpeed: 500000,
		nav: true,
		autoplay: true,
		thumbs: true,
		thumbImage: true,
		thumbContainerClass: 'owl-thumbs',
		thumbItemClass: 'owl-thumb-item',
		thumbsPrerendered: true,
		animateIn: 'fadeIn',
		animateOut: 'fadeOut'
	});

	$(document).on('click', '.owl-thumbs .owl-thumb-item', function(){
		$(this).addClass('active').siblings().removeClass('active');
	}); 
}); */

/*  English */

jQuery(document).ready(function($){
	
	$("#phonetext-1").after('<span id="phone-msg" class="wpcf7-not-valid-tip" aria-hidden="true"></span>');
	
	//$("#phonetext-1").removeAttr('placeholder');
	
	function phonetext_1_auto(){
		
		var code = $(".wpcf7-phonetext-country-code").val();
		
		$("#phonetext-1").val(code);
	}
	
	setTimeout(phonetext_1_auto, 1000);
	
	$("#wpcf7-f315-o1 form").on('submit', function(e){
		
	var err = 0 ;
		
	if($("#phonetext-1").val() == ''){
		
		$("#phone-msg").html('Please fill out this field.');
		err = 1 ;

	}
	
	else if($("#phonetext-1").val().length <= 9){
		
		$("#phone-msg").html('Please fill out this field.');
		err = 1 ;

	}
	
		
	else{
		
		$("#phone-msg").html('');
		err = 0 ;
		
	}
		
	//console.log(err);
		
	if(err > 0 ){

		e.preventDefault();

	}else{

		$("#wpcf7-f315-o1 form").submit();
	}

		
	});
	
 });

/*  Hindi */

jQuery(document).ready(function($){
	
	$("#phonetext-2").after('<span id="phone-msg-2" class="wpcf7-not-valid-tip" aria-hidden="true"></span>');
	function phonetext_2_auto(){
		
		var code = $(".wpcf7-phonetext-country-code").val();
		
		$("#phonetext-2").val(code);
	}
	
	setTimeout(phonetext_2_auto, 1000);
	
	$("#wpcf7-f316-o1 form").on('submit', function(e){
		
	var err = 0 ;
		
	if($("#phonetext-2").val() == ''){
		
		$("#phone-msg-2").html('कृपया इस क्षेत्र को भरें');
		err = 1 ;

	}
		
	else if($("#phonetext-2").val().length <= 9){
		
		$("#phone-msg-2").html('कृपया इस क्षेत्र को भरें');
		err = 1 ;

	}
		
	else{
		
		$("#phone-msg-2").html('');
		err = 0 ;
		
	}
		
	//console.log(err);
		
	if(err > 0 ){

		e.preventDefault();

	}else{

		$("#wpcf7-f316-o1 form").submit();
	}

		
	});
	
 });