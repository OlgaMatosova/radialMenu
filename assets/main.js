var nbOptions = 8;
var angleStart = -360;

// jquery rotate animation
function rotate(li,d) {
    $({d:angleStart}).animate({d:d}, {
        step: function(now) {
            $(li)
               .css({ transform: 'rotate('+now+'deg)' })
               .find('a')
                  .css({ transform: 'rotate('+(-now)+'deg)' });
        }, duration: 0
    });
}

// show / hide the options
function toggleOptions(s) {
    $(s).toggleClass('open');

    var li = $(s).find('li');
    var deg = $(s).hasClass('half') ? 180/(li.length-1) : 360/li.length;
    for(var i=0; i<li.length; i++) {
        var d = $(s).hasClass('half') ? (i*deg)-90 : i*deg;
        $(s).hasClass('open') ? rotate(li[i],d) : rotate(li[i],angleStart);
    }
}

$('.selector li').hover(function(e) {
    $('.selector li a').css('border-color', '#fff');
    $(this).find('a').css('border-color', '#428bca');
    var el = $(this).find('a');
    var elName = document.createElement('h4');
    var elContext = document.createElement('p');
    elName.innerHTML = el[0].dataset.name;
    elContext.innerHTML = el[0].dataset.context;
    $('.bubble .context').html('').append(elName).append(elContext);
    var deg = 30;
    var d = $(this).hasClass('half') ? ($(this).index()*deg)-90 : $(this).index()*deg;
    $('.bubble .circle').css({ transform: 'rotate('+d+'deg)'});


});

setTimeout(function() { 
    toggleOptions('.selector'); 

}, 100);//@ sourceURL=pen.js