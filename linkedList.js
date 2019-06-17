const LinkedList = function () {
    const Node = function (elem) {
        this.elem = elem;
        this.next = null;
    };

    let length = 0;//链表长度
    let head = null;// 链表头

    this.append = function (elem) {
        let node = new Node(elem);

        if (head === null) {
            head = node;
        } else {
            let current = head;
            while (current.next) {
                current = current.next
            }

            current.next = node;
        }

        length ++;
    };

    this.insert = function (pos, elem) {
        if (pos > -1 && pos <= length) {
            let node = new Node(elem),
                current = head,
                previous = null,
                index = 0;

            if (pos === 0) {
                node.next = current;
                head = node;
            }else {
                while (index++ < pos) {
                    previous = current;
                    current = current.next
                }
                node.next = current;
                previous.next = node;
            }

            length ++;
            return true;
        }else {
            return false;
        }
    };

    this.removeAt = function (pos) {
        if (pos >= 0 && pos <= length && length > 0) {
            let current = head,
                previous = null,
                index = 0;

            if (pos === 0) {
                head = current.next;
                current = null;
            }else {
                while (index++ < pos) {
                    previous = current;
                    current = current.next;
                }

                previous.next = current.next;
            }

            length --;
            return current.elem;
        }else {
            return null;
        }
    };

    this.remove = function (elem) {
        let index = this.indexOf(elem);
        return this.removeAt(index);
    };

    this.indexOf = function (elem) {
        let current = head,
            index = -1;

        while (current) {
            if (elem === current.elem) {
                return index;
            }
            index ++;
            current = current.next;
        }

        return -1;
    };

    this.isEmpty = function () {
        return length === 0;
    };

    this.size = function () {
        return length;
    };

    this.toString = function () {
        let current = head,
            string = '';

        while (current) {
            string += ',' + current.elem;
            current = current.next;
        }

        return string.slice(1);
    };

    this.print = function () {
        console.log(this.toString());
    };

    this.getHead = function () {
        return head;
    }
};

export default LinkedList;