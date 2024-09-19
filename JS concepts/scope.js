var scope = "global scope";
function check() 
{
    var scope = "local scope"; 
    function f() 
    { 
        console.log(scope);
        return scope; 
    }
    f()
    return f;
}

console.log(check())