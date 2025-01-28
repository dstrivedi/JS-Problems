/*
    To notify JS that we are working with promises we need to wrap ‘await’ inside an ‘async’ function. In the above example, we (a)wait for two things: response and posts. Before we can convert the response to JSON format, we need to make sure we have the response fetched, otherwise we can end up converting a response that is not there yet, which will most likely prompt an error.
*/

// const showPosts = async () => {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//     const posts = await response.json();
//     console.log(posts[0]);
// }

// showPosts();

console.log("----------user data ----------------")
const getFirstUserData = async () => {
    //get user list
    console.log("Started.....")
    const userList = await fetch("https://jsonplaceholder.typicode.com/users")
    const users = await userList.json()
    console.log(users[0])
    console.log("Ended....");
}

// getFirstUserData()

console.log("only await use")
// await Promise.resolve(console.log("Hello await"))

async function syncData() {
  console.log("async syncData");
  return new Promise((resolve, reject) => {
    if (resolve) {
      console.log("Hello resolved");
    }
  });
}

(async function () {
  console.log("1");
  await syncData();
  console.log("2");
})();

// VS


(async function () {
  console.log("1");
    syncData();
  console.log("2");
})();