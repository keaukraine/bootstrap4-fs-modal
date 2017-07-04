$(function() {
    $('.modal.modal-fullscreen').on('show.bs.modal', function() {
        var $this = $(this),
            $buttons = $(this).find('.modal-footer [data-button-tag]');

        $this.find('.modal-header .pull-right, .modal-header [data-additional-close]').remove();

        $('<div class="pull-right fullscreen-buttons">')
            .prependTo($this.find('.modal-header'));

        $.each($buttons, function() {
            var dataAttr = $(this).data('buttonTag'),
                dataIcon = $(this).data('icon');

            $('<button>')
                .addClass('btn btn-link btn-lg')
                .attr('type', 'button')
                .attr('data-button-tag', dataAttr)
                .appendTo($this.find('.modal-header .pull-right:last'));
            $('<i>')
                .addClass('glyphicon ' + dataIcon)
                .prependTo($this.find('.pull-right button:last'));
        });

        $('<button class="btn btn-link btn-lg" type="button" data-dismiss="modal" aria-label="Close" data-additional-close>')
            .prependTo($this.find('.modal-header'));

        $('<i class="glyphicon glyphicon-chevron-left">')
            .prependTo($this.find('.modal-header button:first'));
    });

    $('body').on('click', '.modal-header .btn-link', function(e) {
        var $this = $(this),
            buttonTag = $this.data('buttonTag'),
            $footer = $this.parents('.modal-content').find('.modal-footer');

        $footer.find('[data-button-tag="' + buttonTag + '"]').click();
    });
});
