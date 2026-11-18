let isLoggedIn = true;
let role = "Admin";
if (!isLoggedIn) {
  console.log("Please log in");
} else if (role === "Admin") {
  console.log("Welcome, Admin");
} else {
  console.log("Welcome, User");
}
