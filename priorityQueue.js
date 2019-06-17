const PriorityQueue = function () {
    let _items = [];

    function QueueElement(elem, priority) {
        this.elem = elem;
        this.priority = priority;
    }

    this.enqueue = function (elem, priority) {
        const queueElem = new QueueElement(elem, priority);

        if (this.isEmpty()) {
            _items.push(elem);
        }else {
            let added = false;
            for (let i = 0; i < _items.length; i++) {
                if (queueElem.priority < _items[i].priority) {
                    _items.splice(i, 0, queueElem);
                    added = true;
                    break;
                }
            }
            if (!added) {
                _items.push(queueElem);
            }
        }
    };
};