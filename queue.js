const Queue = function () {
    let _items = [];

    this.enqueue = function (elem) {
        _items = _items.push(elem);
    };

    this.dequeue = function () {
        return _items.shift();
    };

    this.front = function () {
        return _items[0];
    };

    this.isEmpty = function () {
        return _items.length === 0
    };

    this.size = function () {
        return _items.length;
    };

    this.print = function () {
        console.log(_items.toString());
    }
};

export default Queue;