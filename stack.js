const Stack = function () {
    let _items = [];

    this.push = function (elem) {
        _items.push(elem);
    };

    this.pop = function () {
        return  _items.pop();
    };

    this.peek = function () {
        return _items[_items.length - 1];
    };

    this.isEmpty = function () {
        return _items.length === 0;
    };

    this.size = function () {
        return _items.length;
    };

    this.clear = function () {
        _items = [];
    };

    this.print = function () {
        console.log(_items.toString());
    }
};

export default Stack;