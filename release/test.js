var n6 = {
    key: 6,
    value: "Element 6"
};
var n12 = {
    key: 12,
    value: "Element 12"
};
var n20 = {
    key: 20,
    value: "Element 20"
};
var n8 = {
    key: 8,
    value: "Element 8",
    leftChild: n6
};
var n15 = {
    key: 15,
    value: "Element 15",
    rightChild: n20,
    leftChild: n12
};
var n10 = {
    key: 10,
    value: "Element 10",
    rightChild: n15,
    leftChild: n8
};
var x = 21;
function find() {
    if (x === n10.key) {
        return n10.value;
    }
    if (x > n10.key) {
        if (x === n15.key) {
            return n15.value;
        }
        if (x > n15.key) {
            if (x === n20.key) {
                return n20.value;
            }
            if ((x > n20.key) || (x < n20.key)) {
                console.log("No elements with key");
            }
        }
        if (x < n15.key) {
            if (x === n12.key) {
                return n12.value;
            }
            if ((x > n12.key) || (x < n12.key)) {
                console.log("No elements with key");
            }
        }
    }
    if (x < n10.key) {
        if (x === n8.key) {
            console.log(n8.value);
        }
        if (x > n8.key) {
            console.log("No elements with key");
        }
        if (x < n8.key) {
            if (x === n6.key) {
                console.log(n6.value);
            }
            if ((x > n6.key) || (x < n6.key)) {
                console.log("No elements with key");
            }
        }
    }
}
function insert() {
    if (x === n10.key) {
        console.log(n10.value);
    }
    if (x > n10.key) {
        if (x === n15.key) {
            console.log(n15.value);
        }
        if (x > n15.key) {
            if (x === n20.key) {
                console.log(n20.value);
            }
            if (x > n20.key) {
                var newElem = {
                    key: x,
                    value: "New element"
                };
                n20.rightChild = newElem;
                console.log(newElem.value);
            }
            if (x < n20.key) {
                var newElem = {
                    key: x,
                    value: "New element"
                };
                n20.leftChild = newElem;
                console.log(newElem.value);
            }
        }
        if (x < n15.key) {
            if (x === n12.key) {
                console.log(n12.value);
            }
            if (x > n12.key) {
                var newElem = {
                    key: x,
                    value: "New element"
                };
                n12.rightChild = newElem;
                console.log(n12.value);
            }
            if (x < n12.key) {
                var newElem = {
                    key: x,
                    value: "New element"
                };
                n12.leftChild = newElem;
                console.log(newElem.value);
            }
        }
    }
    if (x < n10.key) {
        if (x === n8.key) {
            console.log(n8.value);
        }
        if (x > n8.key) {
            var newElem = {
                key: x,
                value: "New element"
            };
            n8.rightChild = newElem;
            console.log(newElem.value);
        }
        if (x < n8.key) {
            if (x === n6.key) {
                console.log(n6.value);
            }
            if (x > n6.key) {
                var newElem = {
                    key: x,
                    value: "New element"
                };
                n6.rightChild = newElem;
                console.log(newElem.value);
            }
            if (x < n6.key) {
                var newElem = {
                    key: x,
                    value: "New element"
                };
                n6.leftChild = newElem;
                console.log(n6.value);
            }
        }
    }
}
function show() {
    console.log("   ", n10.key);
    console.log(" ", n10.leftChild.key, "  ", n10.rightChild.key);
    console.log(n6.key, "-", " ", n12.key, n20.key);
}
find();
insert();
show();
