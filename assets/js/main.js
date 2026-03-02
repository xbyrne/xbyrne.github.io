/*
    Story by Pixelarity
    pixelarity.com | hello@pixelarity.com
    License: pixelarity.com/license
*/

(function ($) {

    $(function () {

        var $window = $(window),
            $body = $('body'),
            $wrapper = $('#wrapper');

        // Disable animations/transitions until the page has loaded.
        $body.addClass('is-loading');

        $window.on('load', function () {
            window.setTimeout(function () {
                $body.removeClass('is-loading');
            }, 100);
        });

        // Wrapper.
        $wrapper.children()
            .scrollex({
                top: '30vh',
                bottom: '30vh',
                initialize: function () {
                    $(this).addClass('is-inactive');
                },
                terminate: function () {
                    $(this).removeClass('is-inactive');
                },
                enter: function () {
                    $(this).removeClass('is-inactive');
                },
                leave: function () {

                    var $this = $(this);

                    if ($this.hasClass('onscroll-bidirectional'))
                        $this.addClass('is-inactive');

                }
            });

        // (Gallery and lightbox removed — no .gallery elements in site)

    });

})(jQuery);
