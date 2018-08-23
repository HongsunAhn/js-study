$(document).ready(function(){
    hsSlide();
});

var hsSlideOpt = {
    class : 'slide-list',
    arrows : true,
    nextBtnClass : 'next-btn',
    prevBtnClass : 'prev-btn',
    activeClass : 'slide-active',
    speed : 500,
    autoSlide : false,
    autoSlideSpeed : 1000
};

function hsSlide() {
    var $obj = $("." + hsSlideOpt.class),
        wrapper = '<div class="slide-container"></div>',
        activeClass = hsSlideOpt.activeClass;

    function init() {
        $obj.wrap(wrapper);
        var $container = $obj.parent(),
            itemList = $obj.children();
            
        slideWidth($container);
        if (hsSlideOpt.arrows) {
            addArrows($container, itemList);
        }
        $(itemList[0]).addClass(activeClass);
    }
    init();
    function slideWidth(container) {
        var item = $obj.children(),
            itemW = item.outerWidth(),
            objW = item.length * itemW;

        $obj.width(objW);
        container.width(itemW);
    }

    function addArrows(container, itemList) {
        var nextClass = hsSlideOpt.nextBtnClass,
            prevClass = hsSlideOpt.prevBtnClass;
        var nextBtn = '<button type="button" class="'+ nextClass +'">next slide</button>',
            prevBtn = '<button type="button" class="'+ prevClass +'">prev slide</button>',
            idx = 0,
            itemLength = itemList.length;
            
        
        container.append(nextBtn).prepend(prevBtn);

        var $next = container.find("." + nextClass),
            $prev = container.find("." + prevClass);

        $($next).on('click', function() {
            idx === itemLength -1 ? idx = 0 : idx += 1;

            clearInterval(autoMove);
            addActive();
            slideMove(idx);
        });
        $($prev).on('click', function() {
            idx === 0 ? idx = itemLength -1 : idx -= 1;

            clearInterval(autoMove);
            addActive();
            slideMove(idx);
        });

        function addActive() {
            $(itemList).removeClass(activeClass);
            $(itemList[idx]).addClass(activeClass);
        }

        if (hsSlideOpt.autoSlide) {
            var autoMove = setInterval(function() {
                idx += 1;
                
                if (idx === itemLength) {
                    idx = 0;
                }
                addActive();
                slideMove(idx);
            }, hsSlideOpt.autoSlideSpeed);
        }
    }

    function slideMove(cur) {
        var speed = hsSlideOpt.speed,
            moveW = $('.slide-item').outerWidth();

        $obj.stop().animate({
            'left' : -moveW * cur
        },speed);
        
    }
}