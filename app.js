$( document ).ready(function(){

    var DIMENSIONS = 100;
    var TILE_WIDTH = DIMENSIONS;
    var TILE_HEIGHT = DIMENSIONS;
    var BLANK_POSITION = { top: (400/DIMENSIONS - 1)*DIMENSIONS, left: (400/DIMENSIONS - 1)*DIMENSIONS };

    $('.tile').on('click', function(){
        var canMove = CanMove($(this));
        if (canMove) {
            move($(this),canMove);
        }
    });

    $('.selector').on('change', function(){
        $('form').submit();
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
        BLANK_POSITION = currentPos;
        console.log(BLANK_POSITION);
    }

    function CanMove(el)
    {
        var direction = false;

        currentPos = el.position();
        // Can move up or down
        if (BLANK_POSITION.left == currentPos.left) {
            if (BLANK_POSITION.top == currentPos.top - TILE_HEIGHT) {
                direction = "up";
            } else if (BLANK_POSITION.top == currentPos.top + TILE_HEIGHT) {
                direction = "down";
            }
        // Can move left or right
        } else if (BLANK_POSITION.top == currentPos.top) {
            if (BLANK_POSITION.left == currentPos.left - TILE_WIDTH) {
                direction = "left";
            } else if (BLANK_POSITION.left == currentPos.left + TILE_WIDTH) {
                direction = "right";
            }
        }
        return direction;
    }
});