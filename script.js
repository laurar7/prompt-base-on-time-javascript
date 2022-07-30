var time = new Date().getHours();

// console.log(time);

var greeting = "Hello";
var name = "Laura";

// Your code here
if (time < 12) {
  greeting = "Good morning";
} else if (time <= 18) {
  greeting = "Good afternoon";
} else if (time <= 22) {
  greeting = "Good evening";
} else {
  greeting = "Go to bed :)";
}

// alert(=
alert(`${greeting}, ${name}!`);
