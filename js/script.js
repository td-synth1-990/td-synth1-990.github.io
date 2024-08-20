$(document).ready(function() {
    $('.filter-tag').on('click', function() {
        var tag = $(this).data('tag');
        if (tag === 'all') {
            $('.track').show();
        } else {
            $('.track').hide();
            $('.track').filter(function() {
                var tags = $(this).data('tags').split(',');
                return tags.includes(tag);
            }).show();
        }
    });
});
