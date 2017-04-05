var SquareImpl = (function () {
    function SquareImpl(color, width) {
        this.x = 3.14;
        this.color = color;
        this.width = width;
    }
    SquareImpl.prototype.fun1 = function (source) {
        if (source) {
            return true;
        }
        return false;
    };
    return SquareImpl;
}());
function fun2(sq) {
    console.log(sq.width);
    console.log(sq.color);
    console.log(sq.fun1(""));
}
fun2(new SquareImpl("red", 100));
