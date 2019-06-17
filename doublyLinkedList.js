const DoublyLinkedList = function () {
    const Node  = function (elem) {
        this.elem = elem;
        this.prev = null;
        this.next = null;
    };

    let length = 0;
    let head = null;
    let tail = null;

    this.insert = function (pos, elem) {
        if (pos >= 0 && pos <= length) {
            let node = new Node(elem),
                current = head,
                previous = null,
                index = 0;

            if (pos === 0) {
                if (!head) {
                    head = node;
                    tail = node;
                }else {
                    node.next = current;
                    current.prev = node;
                    head = node;
                }
            }else if (pos === length) {
                current = tail;
                current.next = node;
                node.prev = current;
                tail = node;
            }else {
                while (index++ < pos) {
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;

                current.prev = node;
                node.prev = previous;
            }

            length ++;
        }else {
            return false;
        }
    }
};

export default DoublyLinkedList;