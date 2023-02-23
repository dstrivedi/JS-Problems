// the outer function can not have access to the inner function variable 
// the inner function is called clouser

//below second function is called clouser
const first = () => {
    let name = "Drashti";
    const second =() => {
        let lastname = "Trivedi";
        console.log(name + " " + lastname)
    }
    // console.log(lastname) //lastname is not defined
    second(); 
}

first();