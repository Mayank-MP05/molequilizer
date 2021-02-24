// const original_balance_factor = [
//     [2, 3, 2, 0],
//     [4, 3, 2, 0],
//     [2, 7, 6, 4],
//     [1, 2, 2, 1],
//     [1, 2, 1, 2],
//     [4, 5, 4, 6],
//     [1, 1, 1, 3],
// ]
function gcd_two_numbers(x, y) {
    return (y == 0) ? x : gcd_two_numbers(y, x % y);
}
function check() {
    let cr1 = $("#cr1").val();
    let cr2 = $("#cr2").val();
    let cp1 = $("#cp1").val();
    let cp2 = $("#cp2").val();
    console.log(cr1, cr2, cp1, cp2);
    let obj_reactant = {};
    let obj_product = {};
    for (let i = 0; i < reactants.nodes.length; i++) {
        if (typeof obj_reactant[reactants.nodes[i]["atom"]] == "undefined")
            obj_reactant[reactants.nodes[i]["atom"]] = 1;
        else
            obj_reactant[reactants.nodes[i]["atom"]] = obj_reactant[reactants.nodes[i]["atom"]] + 1;
    }
    for (let i = 0; i < products.nodes.length; i++) {
        if (typeof obj_product[products.nodes[i]["atom"]] == "undefined")
            obj_product[products.nodes[i]["atom"]] = 1;
        else
            obj_product[products.nodes[i]["atom"]] = obj_product[products.nodes[i]["atom"]] + 1;
    }
    var gcd_of_all_var;
    if (!isP2There)
        gcd_of_all_var = gcd_two_numbers(cr1, gcd_two_numbers(cr2, cp1));
    else
        gcd_of_all_var = gcd_two_numbers(cr1, gcd_two_numbers(cr2, gcd_two_numbers(cp1, cp2)));
    for (const [property, value] of Object.entries(obj_reactant)) {
        if (obj_product[property] == value)
            console.log("Balance");
        else if (obj_product[property] < value)
            console.log("less reactant" + property);
        else
            console.log("product is more " + property);
    }
}
/*
let original_balance_factors = [

];*/
