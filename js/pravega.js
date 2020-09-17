$('.menu-toggle').click(function(){
   $(".nav").toggleClass("mobile-nav");
   $(this).toggleClass("is-active");
});

$(window).scroll(function(){
	$('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
});


$(window).on('load',function() {
	var theWindow        = $(window),
	    $bg              = $('bg'),
	    aspectRatio      = $bg.width() / $bg.height();

	function resizeBg() {

		if ( (theWindow.width() / theWindow.height()) < aspectRatio ) {
		    $bg
		    	.removeClass()
		    	.addClass('bgheight');
		} else {
		    $bg
		    	.removeClass()
		    	.addClass('bgwidth');
		}
	}
	theWindow.resize(resizeBg).trigger("resize");
});


var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 1500;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};


$(function(){  // $(document).ready shorthand
  $('#monster').fadeIn('slow');
});

$(document).ready(function() {

    /* Every time the window is scrolled ... */
    $(window).scroll( function(){

        /* Check the location of each desired element */
        $('.hideme').each( function(i){

            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){

                $(this).animate({'opacity':'1'},500);

            }

        });

    });
});


// Get the modal
var modal = document.getElementById("myModalp");

// Get the button that opens the modal
var btn = document.getElementById("myBtnp");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

window.document.onkeydown = function(e) {
  if (!e) {
    e = event;
  }
  if (e.keyCode == 27) {
    lightbox_close();
  }
}

window.document.onkeydown = function(e) {
  if (!e) {
    e = event;
  }
  if (e.keyCode == 27) {
    lightbox_close1();
  }
}

window.document.onkeydown = function(e) {
  if (!e) {
    e = event;
  }
  if (e.keyCode == 27) {
    lightbox_close2();
  }
}

window.document.onkeydown = function(e) {
  if (!e) {
    e = event;
  }
  if (e.keyCode == 27) {
    lightbox_close3();
  }
}

window.document.onkeydown = function(e) {
  if (!e) {
    e = event;
  }
  if (e.keyCode == 27) {
    lightbox_close4();
  }
}

window.document.onkeydown = function(e) {
  if (!e) {
    e = event;
  }
  if (e.keyCode == 27) {
    lightbox_close5();
  }
}

window.document.onkeydown = function(e) {
  if (!e) {
    e = event;
  }
  if (e.keyCode == 27) {
    lightbox_close6();
  }
}

window.document.onkeydown = function(e) {
  if (!e) {
    e = event;
  }
  if (e.keyCode == 27) {
    lightbox_close7();
  }
}

function lightbox_open() {
  var lightBoxVideo = document.getElementById("CardVideo");

  document.getElementById('light').style.display = 'block';
  document.getElementById('fade').style.display = 'block';
  lightBoxVideo.play();

}

function lightbox_close() {
  var lightBoxVideo = document.getElementById("CardVideo");
  document.getElementById('light').style.display = 'none';
  document.getElementById('fade').style.display = 'none';
  lightBoxVideo.pause();
}

function lightbox_open1() {
  var lightBoxVideo1 = document.getElementById("CardVideo1");

  document.getElementById('light1').style.display = 'block';
  document.getElementById('fade1').style.display = 'block';
  lightBoxVideo1.play();

}

function lightbox_close1() {
  var lightBoxVideo1 = document.getElementById("CardVideo1");
  document.getElementById('light1').style.display = 'none';
  document.getElementById('fade1').style.display = 'none';
  lightBoxVideo1.pause();
}

function lightbox_open2() {
  var lightBoxVideo2 = document.getElementById("CardVideo2");

  document.getElementById('light2').style.display = 'block';
  document.getElementById('fade2').style.display = 'block';
  lightBoxVideo2.play();

}

function lightbox_close2() {
  var lightBoxVideo2 = document.getElementById("CardVideo2");
  document.getElementById('light2').style.display = 'none';
  document.getElementById('fade2').style.display = 'none';
  lightBoxVideo2.pause();
}

function lightbox_open3() {
  var lightBoxVideo3 = document.getElementById("CardVideo3");

  document.getElementById('light3').style.display = 'block';
  document.getElementById('fade3').style.display = 'block';
  lightBoxVideo3.play();

}

function lightbox_close3() {
  var lightBoxVideo3 = document.getElementById("CardVideo3");
  document.getElementById('light3').style.display = 'none';
  document.getElementById('fade3').style.display = 'none';
  lightBoxVideo3.pause();
}

function lightbox_open4() {
  var lightBoxVideo4 = document.getElementById("CardVideo4");

  document.getElementById('light4').style.display = 'block';
  document.getElementById('fade4').style.display = 'block';
  lightBoxVideo4.play();

}

function lightbox_close4() {
  var lightBoxVideo4 = document.getElementById("CardVideo4");
  document.getElementById('light4').style.display = 'none';
  document.getElementById('fade4').style.display = 'none';
  lightBoxVideo4.pause();
}

function lightbox_open5() {
  var lightBoxVideo5 = document.getElementById("CardVideo5");

  document.getElementById('light5').style.display = 'block';
  document.getElementById('fade5').style.display = 'block';
  lightBoxVideo5.play();

}

function lightbox_close5() {
  var lightBoxVideo5 = document.getElementById("CardVideo5");
  document.getElementById('light5').style.display = 'none';
  document.getElementById('fade5').style.display = 'none';
  lightBoxVideo5.pause();
}

function lightbox_open6() {
  var lightBoxVideo6 = document.getElementById("CardVideo6");

  document.getElementById('light6').style.display = 'block';
  document.getElementById('fade6').style.display = 'block';
  lightBoxVideo6.play();

}

function lightbox_close6() {
  var lightBoxVideo6 = document.getElementById("CardVideo6");
  document.getElementById('light6').style.display = 'none';
  document.getElementById('fade6').style.display = 'none';
  lightBoxVideo6.pause();
}

function lightbox_open7() {
  var lightBoxVideo7 = document.getElementById("CardVideo7");

  document.getElementById('light7').style.display = 'block';
  document.getElementById('fade7').style.display = 'block';
  lightBoxVideo7.play();

}

function lightbox_close7() {
  var lightBoxVideo7 = document.getElementById("CardVideo7");
  document.getElementById('light7').style.display = 'none';
  document.getElementById('fade7').style.display = 'none';
  lightBoxVideo7.pause();
}



$(function(){
  $('.carouselp-item').eq(0).addClass('active');
  var total = $('.carouselp-item').length;
  var current = 0;
  $('#moveRight').on('click', function(){
    var next=current;
    current= current+1;
    setSlide(next, current);
  });
  $('#moveLeft').on('click', function(){
    var prev=current;
    current = current- 1;
    setSlide(prev, current);
  });
  function setSlide(prev, next){
    var slide= current;
    if(next>total-1){
     slide=0;
      current=0;
    }
    if(next<0){
      slide=total - 1;
      current=total - 1;
    }
           $('.carouselp-item').eq(prev).removeClass('active');
           $('.carouselp-item').eq(slide).addClass('active');
      setTimeout(function(){

      },800);



    console.log('current '+current);
    console.log('prev '+prev);
  }
});
