interface IBinaryTree {
    key: number; // ключ
    value: string; // значение
    // необязательные параметры
    rightChild?: IBinaryTree; // правый потомок
    leftChild?: IBinaryTree; // левый потомок
}

let n6: IBinaryTree = {
    key: 6,
    value: "Element 6"
};
let n12: IBinaryTree = {
    key: 12,
    value: "Element 12"
};
let n20: IBinaryTree = {
    key: 20,
    value: "Element 20"
};
let n8: IBinaryTree = {
    key: 8,
    value: "Element 8",
    leftChild: n6
};
let n15: IBinaryTree = {
    key: 15,
    value: "Element 15",
    rightChild: n20,
    leftChild: n12
};
let n10: IBinaryTree = {
    key: 10,
    value: "Element 10",
    rightChild: n15,
    leftChild: n8
};

let x: number = 21;

function find(): string {
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

function insert(): void {
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
                const newElem: IBinaryTree = {
                    key: x,
                    value: "New element"
                };
                n20.rightChild = newElem;
                console.log(newElem.value);
            }
            if (x < n20.key) {
                const newElem: IBinaryTree = {
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
                const newElem: IBinaryTree = {
                    key: x,
                    value: "New element"
                };
                n12.rightChild = newElem;
                console.log(n12.value);
            }
            if (x < n12.key) {
                const newElem: IBinaryTree = {
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
            const newElem: IBinaryTree = {
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
                const newElem: IBinaryTree = {
                    key: x,
                    value: "New element"
                };
                n6.rightChild = newElem;
                console.log(newElem.value);
            }
            if (x < n6.key) {
                const newElem: IBinaryTree = {
                    key: x,
                    value: "New element"
                };
                n6.leftChild = newElem;
                console.log(n6.value);
            }
        }
    }
}

function show(): void {
    console.log("   ", n10.key);
    console.log(" ", n10.leftChild.key, "  ", n10.rightChild.key);
    console.log(n6.key, "-", " ", n12.key, n20.key);
}

find();
insert();
show();





