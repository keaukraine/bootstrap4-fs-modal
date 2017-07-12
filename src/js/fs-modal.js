$(function() {
    var idCounter = 0;

    $('body').on('show.bs.modal', '.modal.modal-fullscreen', function() {
        var $this = $(this),
            $buttons = $this.find('.modal-footer .btn:not([data-dismiss="modal"])'),
            popstateEvent;

        $this.find('.modal-header .pull-right, .modal-header [data-additional-close]').remove();

        $('<div class="pull-right fullscreen-buttons">')
            .prependTo($this.find('.modal-header'));

        $.each($buttons, function() {
            var key = idCounter++,
                $button = $(this),
                dataGlyphIcon = $button.data('glyphicon'),
                dataFAIcon = $button.data('faicon'),
                dataMobileText = $button.data('mobileText'),
                text = dataMobileText || $button.text(),
                $newButton;

            $(this).attr('data-button-tag', key);

            if (dataGlyphIcon || dataFAIcon) {
                $newButton = $('<button>')
                    .attr('title', text)
                    .attr('data-toggle', 'tooltip')
                    .attr('data-placement', 'bottom');

                dataGlyphIcon && $('<i class="glyphicon ' + dataGlyphIcon + '">').appendTo($newButton);
                dataFAIcon && $('<i class="fa fa-2x ' + dataFAIcon + '">').appendTo($newButton);
            } else {
                $newButton = $('<button>')
                    .text(text);
            }

            $newButton
                .addClass('btn btn-link')
                .attr('data-button-tag', key)
                .appendTo($this.find('.modal-header .fullscreen-buttons:last'));

            (dataGlyphIcon || dataFAIcon) && $newButton.tooltip();
        });

        $('<button class="btn btn-link btn-lg" type="button" data-dismiss="modal" aria-label="Close" data-additional-close>')
            .prependTo($this.find('.modal-header'));

        $('<i class="glyphicon glyphicon-chevron-left">')
            .prependTo($this.find('.modal-header button:first'));

        history.pushState(null, null, null);

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
