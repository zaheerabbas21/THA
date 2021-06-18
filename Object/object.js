// first question
function myFunction(object) {
  var text = "";
  var x;
  for (x in object) {
    text += x + ",";
  }
  return text;
}
myFunction({ name: "David Rayy", sclass: "VI", rollno: 12 });
//   second question
function deleterollno(object) {
  delete object.rollno;
}
deleterollno({ name: "David Rayy", sclass: "VI", rollno: 12 });
// third question
function myFunction(object) {
  var text = 0;
  for (var x in object) {
    text += 1;
  }
  return text;
}
myFunction({ name: "David Rayy", sclass: "VI", rollno: 12 });
//   fourth question
function myFunction(object) {
  //   console.log(object)
  var text = "";
  var x;
  for (x in object) {
    text += object[x] + " ,";
    //     console.log(object[x])
  }
  return text;
}
var library = [
  { author: "Bill Gates", title: "The Road Ahead", readingStatus: true },
  { author: "Steve Jobs", title: "Walter Isaacson", readingStatus: true },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];
for (var x in library) {
  console.log(myFunction(library[x]));
  // fifth question
  function myFunction(object) {
    var volume = (22 / 7) * object.radius ** 2 * object.height;
    console.log(volume.toFixed(4));
  }
  myFunction({ radius: 10, height: 15 });
  // sixth question
  var library = [
    { title: "The Road Ahead", author: "Bill Gates", libraryID: 1254 },
    { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4264 },
    {
      title: "Mockingjay: The Final Book of The Hunger Games",
      author: "Suzanne Collins",
      libraryID: 3245,
    },
  ];
  library.sort(function (obj1, obj2) {
    return obj1["libraryID"] - obj2["libraryID"];
  });
}
