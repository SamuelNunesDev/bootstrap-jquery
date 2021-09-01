(function($) {
    let contentWaypoit = function() {
        $('.element-animate').waypoint(function(direction) {
            if( direction == 'down' && !$(this.element).hasClass('element-animated') ) {
                $(this.element).removeClass('element-animate').addClass('element-animated fadeInUp')
            }
        }, {
            offset: '90%'
        })
    }
    contentWaypoit()
})(jQuery)