(function($) {
    $('.paroller').paroller()
    let contentWaypoit = function() {
        $('.element-animate').waypoint(function(direction) {
            const $element = $(this.element)
            let effect = $element.data('animate-effect') || 'fadeInUp'

            if( direction == 'down' && !$element.hasClass('element-animated') ) {
                $element.removeClass('element-animate').addClass(`element-animated ${effect}`)
            }
        }, {
            offset: '90%'
        })
    }
    contentWaypoit()
})(jQuery)