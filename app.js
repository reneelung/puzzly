$( document ).ready(function(){

    var TILE_WIDTH = 80;
    var TILE_HEIGHT = 80;
    var blankPos = { left: 320, top: 320 };

    $('.tile').on('click', function(){
        console.log(CanMove($(this)));

        var canMove = CanMove($(this));
        if (canMove) {
            move($(this),canMove);
        }
    });

    function move(el, canMove)
    {
        currentPos = el.position();

        var css = {};

        if (canMove == "up") {
            css.top = currentPos.top - TILE_HEIGHT
        } else if (canMove == "down") {
            css.top = currentPos.top + TILE_HEIGHT
        } else if (canMove == "left") {
            css.left = currentPos.left - TILE_WIDTH
        } else if (canMove == "right") {
            css.left = currentPos.left + TILE_WIDTH
        } else {
            return false;
        }

        el.css(css);
        $('.empty').css(currentPos);
        blankPos = $('.empty').position();
    }

    function CanMove(el)
    {
        var direction = false;

        currentPos = el.position();

        // Can move up or down
        if (blankPos.left == currentPos.left) {
            if (blankPos.top == currentPos.top - TILE_HEIGHT) {
                direction = "up";
            } else if (blankPos.top == currentPos.top + TILE_HEIGHT) {
                direction = "down";
            }
        // Can move left or right
        } else if (blankPos.top == currentPos.top) {
            if (blankPos.left == currentPos.left - TILE_WIDTH) {
                direction = "left";
            } else if (blankPos.left == currentPos.left + TILE_WIDTH) {
                direction = "right";
            }
        }

        return direction;
    }
});