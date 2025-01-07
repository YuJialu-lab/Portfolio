
// Skills

var skills = [{
        img: "images/icon_wine.svg",
        title: "Wine Labels"
    },
    {
        img: "images/icon_box.svg",
        title: "Packaging"
    },
    {
        img: "images/icon_book.svg",
        title: "Editorial Design"
    },
    {
        img: "images/icon_card.svg",
        title: "Branding"
    },
    {
        img: "images/icon_ui.svg",
        title: "UI Design"
    },
    {
        img: "images/icon_motion.svg",
        title: "Motion Graphics"
    }
];

var rowIcons = document.querySelector('.row-icons');

for (let i = 0; i < skills.length; i++) {
    const {
        img,
        title
    } = skills[i];


    var templateSkills = `
    <div class="icon-section">
        <img src="${img}" alt="${title}">
        <p>${title}</p>
    </div>`;

    rowIcons.insertAdjacentHTML('beforeend', templateSkills);

};

// Social

var social = [{
        img: "images/icons/linkedin.svg",
        title: "linkedin",
        url: "https://www.linkedin.com/in/rafaelalucas"
    },
    {
        img: "images/icons/dribbble.svg",
        title: "dribbble",
        url: "https://dribbble.com/rafaelalucas"
    },
    {
        img: "images/icons/codepen.svg",
        title: "codepen",
        url: "https://codepen.io/rafaelavlucas"
    },
    {
        img: "images/icons/vimeo.svg",
        title: "vimeo",
        url: "https://vimeo.com/rafaelalucas"
    }
];

var socialItems = document.querySelector('.social-items');

for (let i = 0; i < social.length; i++) {
    const {
        img,
        title,
        url,
    } = social[i];


    var templateSocial = `
        <a class="social" href="${url}" target="_blank"  rel="noopener">
            <img src="${img}" alt="${title}">
            <p class="social-title">${title}</p>
        </a>`;

    socialItems.insertAdjacentHTML('beforeend', templateSocial);

}


/*cv*/
/*mouse over pallax*/

/*

(function() {
    // Add event listener
    document.addEventListener("mousemove", parallax);
    const elem = document.querySelector("#parallax");
    // Magic happens here
    function parallax(e) {
        let _w = window.innerWidth/2;
        let _h = window.innerHeight/2;
        let _mouseX = e.clientX;
        let _mouseY = e.clientY;
        let _depth1 = `${50 - (_mouseX - _w) * 0.02}% ${50 - (_mouseY - _h) * 0.02}%`;
        let _depth2 = `${50 - (_mouseX - _w) * 0.04}% ${50 - (_mouseY - _h) * 0.04}%`;
        let _depth3 = `${50 - (_mouseX - _w) * 0.06}% ${50 - (_mouseY - _h) * 0.06}%`;
        let x = `${_depth3}, ${_depth2}, ${_depth1}`;
        console.log(x);
        elem.style.backgroundPosition = x;
    }

})();


*/




/*  Animated Progress Bars  */
jQuery(document).ready(function () {
    jQuery('.skills li').each(function () {
        jQuery(this).appear(function() {
          jQuery(this).animate({opacity:1,left:"0px"},800);
          var b = jQuery(this).find(".progress-bar").attr("data-width");
          jQuery(this).find(".progress-bar").animate({
            width: b + "%"
          }, 1300, "linear");
        }); 
    });   

});


jQuery(document).ready(function(){
  jQuery('.skillbar').each(function(){
    jQuery(this).appear(function() {
      jQuery(this).find('.skillbar-bar').animate({
        width:jQuery(this).attr('data-percent')
      },1000);
    });
  });
});

/* jQuery.appear */
(function($) {
    $.fn.appear = function(fn, options) {

        var settings = $.extend({

            //arbitrary data to pass to fn
            data: undefined,

            //call fn only on the first appear?
            one: true,

            // X & Y accuracy
            accX: 0,
            accY: 0

        }, options);

        return this.each(function() {

            var t = $(this);

            //whether the element is currently visible
            t.appeared = false;

            if (!fn) {

                //trigger the custom event
                t.trigger('appear', settings.data);
                return;
            }

            var w = $(window);

            //fires the appear event when appropriate
            var check = function() {

                //is the element hidden?
                if (!t.is(':visible')) {

                    //it became hidden
                    t.appeared = false;
                    return;
                }

                //is the element inside the visible window?
                var a = w.scrollLeft();
                var b = w.scrollTop();
                var o = t.offset();
                var x = o.left;
                var y = o.top;

                var ax = settings.accX;
                var ay = settings.accY;
                var th = t.height();
                var wh = w.height();
                var tw = t.width();
                var ww = w.width();

                if (y + th + ay >= b &&
                    y <= b + wh + ay &&
                    x + tw + ax >= a &&
                    x <= a + ww + ax) {

                    //trigger the custom event
                    if (!t.appeared) t.trigger('appear', settings.data);

                } else {

                    //it scrolled out of view
                    t.appeared = false;
                }
            };

            //create a modified fn with some additional logic
            var modifiedFn = function() {

                //mark the element as visible
                t.appeared = true;

                //is this supposed to happen only once?
                if (settings.one) {

                    //remove the check
                    w.unbind('scroll', check);
                    var i = $.inArray(check, $.fn.appear.checks);
                    if (i >= 0) $.fn.appear.checks.splice(i, 1);
                }

                //trigger the original fn
                fn.apply(this, arguments);
            };

            //bind the modified fn to the element
            if (settings.one) t.one('appear', settings.data, modifiedFn);
            else t.bind('appear', settings.data, modifiedFn);

            //check whenever the window scrolls
            w.scroll(check);

            //check whenever the dom changes
            $.fn.appear.checks.push(check);

            //check now
            (check)();
        });
    };

    //keep a queue of appearance checks
    $.extend($.fn.appear, {

        checks: [],
        timeout: null,

        //process the queue
        checkAll: function() {
            var length = $.fn.appear.checks.length;
            if (length > 0) while (length--) ($.fn.appear.checks[length])();
        },

        //check the queue asynchronously
        run: function() {
            if ($.fn.appear.timeout) clearTimeout($.fn.appear.timeout);
            $.fn.appear.timeout = setTimeout($.fn.appear.checkAll, 20);
        }
    });

    //run checks when these methods are called
    $.each(['append', 'prepend', 'after', 'before', 'attr',
        'removeAttr', 'addClass', 'removeClass', 'toggleClass',
        'remove', 'css', 'show', 'hide'], function(i, n) {
        var old = $.fn[n];
        if (old) {
            $.fn[n] = function() {
                var r = old.apply(this, arguments);
                $.fn.appear.run();
                return r;
            }
        }
    });

})(jQuery);



/* Text Effect*/
class Loop {
  constructor() {
    this._idRAF = -1;
    this._count = 0;
    this._listeners = [];
    this._binds = {};
    this._binds.update = this._update.bind(this);
  }
  _update() {
    let listener = null;
    let i = this._count;
    while (--i >= 0) {
      listener = this._listeners[i];
      if (listener) {
        listener.apply(this, null);
      }
    }
    this._idRAF = requestAnimationFrame(this._binds.update);
  }
  start() { this._update(); }
  stop() {
    cancelAnimationFrame(this._idRAF);
  }
  add(listener) {
    const idx = this._listeners.indexOf(listener);
    if (idx >= 0) {
      return;
    }
    this._listeners.push(listener);
    this._count++;
  }
  remove(listener) {
    const idx = this._listeners.indexOf(listener);
    if (idx < 0) {
      return;
    }
    this._listeners.splice(idx, 1);
    this._count--;
  }
}
const loop = new Loop();
loop.start()




/* text effect*/
var words = document.getElementsByClassName('word');
var wordArray = [];
var currentWord = 0;

words[currentWord].style.opacity = 1;
for (var i = 0; i < words.length; i++) {
  splitLetters(words[i]);
}

function changeWord() {
  var cw = wordArray[currentWord];
  var nw = currentWord == words.length-1 ? wordArray[0] : wordArray[currentWord+1];
  for (var i = 0; i < cw.length; i++) {
    animateLetterOut(cw, i);
  }
  
  for (var i = 0; i < nw.length; i++) {
    nw[i].className = 'letter behind';
    nw[0].parentElement.style.opacity = 1;
    animateLetterIn(nw, i);
  }
  
  currentWord = (currentWord == wordArray.length-1) ? 0 : currentWord+1;
}

function animateLetterOut(cw, i) {
  setTimeout(function() {
		cw[i].className = 'letter out';
  }, i*80);
}

function animateLetterIn(nw, i) {
  setTimeout(function() {
		nw[i].className = 'letter in';
  }, 340+(i*80));
}

function splitLetters(word) {
  var content = word.innerHTML;
  word.innerHTML = '';
  var letters = [];
  for (var i = 0; i < content.length; i++) {
    var letter = document.createElement('span');
    letter.className = 'letter';
    letter.innerHTML = content.charAt(i);
    word.appendChild(letter);
    letters.push(letter);
  }
  
  wordArray.push(letters);
}

changeWord();
setInterval(changeWord, 4000);

