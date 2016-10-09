$.fn.extend({
    profile : function(name, email, photo) {
        var that = this;
        $(this).load("html/profile.html", function() {
            $(that).find('[data-profile="photo"]').attr('src', photo);
            $(that).find('[data-profile="name"]').html(name);
            $(that).find('[data-profile="email"]').html(email);
            $(that).find('[data-profile="email"]').attr('href', 'mailto:' + email);
        });
    }
});
