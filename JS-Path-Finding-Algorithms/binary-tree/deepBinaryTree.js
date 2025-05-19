// Data Set
// One top level list aff 
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
    // {
    //     aff_id: 6,
    //     parent_aff_id: 2
    // },
    // {
    //     aff_id: 7,
    //     parent_aff_id: 2
    // },
    {
        aff_id: 10,
        parent_aff_id: null
    },
    // {
    //     aff_id: 11,
    //     parent_aff_id: 10
    // },
    // {
    //     aff_id: 12,
    //     parent_aff_id: 13
    // },
    {
        aff_id: 13,
        parent_aff_id: 14
    },
    {
        aff_id: 14,
        parent_aff_id: 10
    },
];

const recursionListToTree = (items, aff_id = null, link = 'parent_aff_id') =>
    items
        .filter(item => item[link] === aff_id)
        .map(item => ({ ...item, children: recursionListToTree(items, item.aff_id) }));


function doEnhanceListToTree(list) {
    var map = {}, node, roots = [], i;

    for (i = 0; i < list.length; i += 1) {
        map[list[i].aff_id] = i; // initialize the map
        list[i].children = []; // initialize the children
    }

    for (i = 0; i < list.length; i += 1) {
        node = list[i];
        if (node.parent_aff_id !== null) {
            list[map[node.parent_aff_id]].children.push(node);
        } else {
            roots.push(node);
        }
    }
    return roots;
}

const new_arr = doEnhanceListToTree(list_aff);
// console.log(new_arr)

const depth = 2;
function searchTree(element, matchingAff) {
    if (element.aff_id == matchingAff) {
        return element;
    } else if (element.children != null) {
        var i;
        var result = null;
        for (i = 0; result == null && i < element.children.length; i++) {
            result = searchTree(element.children[i], matchingAff);
        }
        return result;
    }
    return null;
}

// console.log(searchTree(new_arr[0], 2))
console.log({new_arr});
const aff_id = 2;
function search(new_arr, aff_id){
    let result = {};
    for(let i = 0 ; i < new_arr.length; i++){
        console.log(new_arr[i])
        result = searchTree(new_arr[i], aff_id)
        if(result !== null){
            return result
        }else{
            continue;
        }
    }
    return result;
}
const result = search(new_arr, 10)
console.log(">>>>",{result})

// const paths = new_arr.map(function(path) { return path.split('/'); });
// var items = [];
// for(var i = 0, l = paths.length; i < l; i++) {
//     var path = paths[i];
//     var name = path[0];
//     var rest = path.slice(1);
//     var item = null;
//     for(var j = 0, m = items.length; j < m; j++) {
//         if(items[j].name === name) {
//             item = items[j];
//             break;
//         }
//     }
//     if(item === null) {
//         item = {name: name, children: []};
//         items.push(item);
//     }
//     if(rest.length > 0) {
//         item.children.push(rest);
//     }
// }
// console.log(items)