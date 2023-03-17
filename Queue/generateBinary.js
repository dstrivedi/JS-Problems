
// function to generate binary numbers
function generatePrintBinary(n)
{
    // Create an empty queue of strings
    var q = [];
         
    // Enqueue the first binary number
    q.push("1");
         
    // This loops is like BFS of a tree with 1 as root
    // 0 as left child and 1 as right child and so on
    while(n-- > 0)
    {
        // print the front of queue
        var s1 = q[0];
        // console.log("s1 -> ", s1)
        q.shift();
        // console.log("queue -> ",q)
        console.log("s1 -> ",s1);
             
        // Store s1 before changing it
        var s2 = s1;
        // Append "0" to s1 and push it
        q.push(s1 + "0");
             
        // Append "1" to s2 and push it. Note that s2 contains
        // the previous front
        q.push(s2 + "1");
        // console.log("s2 -> ", s2)
    }
}

generatePrintBinary(5);