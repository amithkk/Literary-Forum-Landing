let typed = new Typed('#typed', {
    stringsElement: '#strs',
    typeSpeed: 60,
    showCursor: false,
    onComplete: function (self) {
        $(".container").css("display", "flex").hide().fadeIn();
    }

});

