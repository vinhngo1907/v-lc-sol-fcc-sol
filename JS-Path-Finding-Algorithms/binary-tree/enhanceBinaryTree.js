// Data Set
// One top level comment 
const list_aff = [
    {
        aff_id: 1,
        parent_aff_id: null
    },
    {
        aff_id: 2,
        parent_aff_id: 1
    },
    {
        aff_id: 3,
        parent_aff_id: 1
    },
    {
        aff_id: 4,
        parent_aff_id: 2
    },
    {
        aff_id: 5,
        parent_aff_id: 2
    },
    {
        aff_id: 6,
        parent_aff_id: 2
    },
    {
        aff_id: 7,
        parent_aff_id: 2
    },
    {
        aff_id: 10,
        parent_aff_id: null
    },
    {
        aff_id: 11,
        parent_aff_id: 10
    },
    {
        aff_id: 12,
        parent_aff_id: 13
    },
    {
        aff_id: 13,
        parent_aff_id: 14
    },
    {
        aff_id: 14,
        parent_aff_id: 10
    },
];
const idMapping = list_aff.reduce((acc, el, i) => {
    acc[el.aff_id] = i;
    return acc;
}, {});

let root;
list_aff.forEach(el => {
    // Handle the root element
    if (el.parent_aff_id === null) {
        root = el;
        return;
    }
    // Use our mapping to locate the parent element in our list_aff array
    const parentEl = list_aff[idMapping[el.parent_aff_id]];
    // Add our current el to its parent's `children` array
    parentEl.children = [...(parentEl.children || []), el];
});

getDepth = function (obj) {
    var depth = 0;
    if (obj.children) {
        obj.children.forEach(function (d) {
            var tmpDepth = getDepth(d)
            if (tmpDepth > depth) {
                depth = tmpDepth
            }
        })
    }
    return depth = depth + 1
}

let arr = [...list_aff];
let depths = arr.map(x => getDepth(x))
let maxDepth = Math.max(...depths)

function unflatten(arr) {
    var tree = [],
        mappedArr = {},
        arrElem,
        mappedElem;

    // First map the nodes of the array to an object -> create a hash table.
    for (let i = 0, len = arr.length; i < len; i++) {
        arrElem = arr[i];
        mappedArr[arrElem.aff_id] = arrElem;
        mappedArr[arrElem.aff_id]['children'] = [];
    }


    for (let id in mappedArr) {
        if (mappedArr.hasOwnProperty(id)) {
            mappedElem = mappedArr[id];
            // If the element is not at the root level, add it to its parent array of children.
            if (mappedElem.parent_aff_id) {
                mappedArr[mappedElem['parent_aff_id']]['children'].push(mappedElem);
            }
            // If the element is at the root level, add it to first level elements array.
            else {
                tree.push(mappedElem);
            }
        }
    }
    return tree;
}

const tree = unflatten(list_aff);
console.log(tree)
tree.forEach((el)=>{
    console.log(el.children)
})

// function depthDecorator(array, depth = 1) {
//   return array.map((child) => Object.assign(child, {
//     depth,
//     children: depthDecorator(child.children || [], depth + 1)
//   }));
// }

// const depthArray = depthDecorator(tree);
// console.log({depthArray});
