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

function togglePolicy() {
    var policy = document.getElementById("policy");
    if (policy.style.display === "none") {
        policy.style.display = "block";
    } else {
        policy.style.display = "none";
    }
}