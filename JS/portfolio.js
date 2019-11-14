function scroll(){
    $('main').on('scroll', function(){
        $('section').fadeIn(300)
        console.log('working');
    })
}

(function(){
    $('scroll');
})