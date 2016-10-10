$.fn.extend({
    wizard : function() {
        var $wizards = $(this).find(".wizard");
        var queue = [ ];
        var current = -1;
        next = function() {
            var $start = $(this).parents(".wizard-start");
            if ($start.length > 0) {
                queue = [ $start.attr('id') ];
                current = 0;
            }
            var next = $(this).attr('wizard-tree');
            if (next && next.length > 0) {
                queue = queue.slice(0, current + 1);
                queue.push.apply(queue, next.trim().split(" "));
            }
            current++;
            if (current < queue.length) {
                $("#" + queue[current - 1]).fadeOut(400, function() {
                    $("#" + queue[current]).fadeIn();
                });
            }
        }

        prev = function() {
            current--;
            if (current >= 0) {
                $("#" + queue[current + 1]).fadeOut(400, function() {
                    $("#" + queue[current]).fadeIn();
                });
            }
        }

        $($wizards).find(".wizard-next").each(function() {
            $(this).click(next);
        });
        $($wizards).find(".wizard-previous").each(function() {
            $(this).click(prev);
        });

        $($wizards).fadeOut(0);
    }
});

