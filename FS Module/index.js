import fs from "fs";

//read text file
fs.readFile("./blog.txt", (error, data) => {
  if (error) {
    console.log(error);
  }
  console.log(data.toString());
});
