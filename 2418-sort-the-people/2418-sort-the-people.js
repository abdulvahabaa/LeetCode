/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
     let combained =[]
    for(let i =0;i<names.length;i++){
        combained.push({name:names[i],height:heights[i]})
    }
    combained.sort((a,b)=>b.height-a.height)
    let sortedNames=combained.map(person=>person.name)
    return sortedNames
};