$(function() {
    var idCounter = 0;

    $('body').on('show.bs.modal', '.modal.modal-fullscreen', function() {
        var $this = $(this),
            $buttons = $(this).find('.modal-footer [data-glyphicon]'),
            urlReplace, popstateEvent;

        $this.find('.modal-header .pull-right, .modal-header [data-additional-close]').remove();

        $('<div class="pull-right fullscreen-buttons">')
            .prependTo($this.find('.modal-header'));

        $.each($buttons, function() {
            var key = idCounter++,
                dataIcon = $(this).data('glyphicon');

            $(this).attr('data-button-tag', key);

            $('<button>')
                .addClass('btn btn-link btn-lg')
                .attr('type', 'button')
                .attr('data-button-tag', key)
                .appendTo($this.find('.modal-header .fullscreen-buttons:last'));
            $('<i>')
                .addClass('glyphicon ' + dataIcon)
                .prependTo($this.find('.fullscreen-buttons button:last'));
        });

        $('<button class="btn btn-link btn-lg" type="button" data-dismiss="modal" aria-label="Close" data-additional-close>')
            .prependTo($this.find('.modal-header'));

        $('<i class="glyphicon glyphicon-chevron-left">')
            .prependTo($this.find('.modal-header button:first'));

        urlReplace = '#fsmodal' + ++idCounter;
        history.pushState(null, null, urlReplace);

        popstateEvent = function() {
            $this.data('hidden-by-back', true);
            $this.modal('hide');
        };

        $(window).one('popstate.fs-modal', popstateEvent);

        $this.one('hide.bs.modal', function() {
            $(window).off('.fs-modal', popstateEvent);
            if (!$this.data('hidden-by-back')) {
                history.back();
            }
            $this.data('hidden-by-back', null);
        });
    });

    $('body').on('click', '.modal-header .fullscreen-buttons .btn-link', function(e) {
        var $this = $(this),
            buttonTag = $this.data('buttonTag'),
            $footer = $this.parents('.modal-content').find('.modal-footer');

        $footer.find('[data-button-tag="' + buttonTag + '"]').click();
    });
});
