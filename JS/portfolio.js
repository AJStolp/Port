function scroll(){
    $('main').on('scroll', function(){
        $('section').fadeIn(300)
    })
}

$(scroll);