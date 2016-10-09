function Wizard() {
}

Wizard.prototype.constructor = function(selector) { 
    var that = this;
    this.queue = [ ];
    this.current = -1;

    this.next = function() {
        var next = $(this).attr('wizard-next');
        if (next && next.length > 0) {
            that.queue = next.trim().split(" ");
            that.current = 0;
        } else {
            that.current++;
        }
        $(this).parents(".wizard").fadeOut(400, function() {
            $(that.queue[that.current]).fadeIn();
        });
    }
    this.previous = function() {
        console.log("next", previous);
    }

    $wizards = $(selector).find(".wizard");
    $wizards.attr('style', 'display: none');
    $wizards.find(".wizard-next").each(function() {
        $(this).click(next);
    });
    $wizards.find(".wizard-previous").each(function() {
        $(this).click(previous);
    });
 
}

Wizard.prototype.start = function(selector) {
    $(selector).fadeIn();
}

Wizard.prototype.end = function() {
}
