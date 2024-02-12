import { error } from "console";
import fs from "fs";

//read text file
// fs.readFile("./blog.txt", (error, data) => {
//   if (error) {
//     console.log(error);
//   }
//   console.log(data.toString());
// });

//write a file that exists
// fs.writeFile("./blog.txt", "This is a new demo", () => {
//   console.log("File was written");
// });

//write a file that doesn't exist
// fs.writeFileSync("./blog2.txt", "This is a second blog", () => {
//   console.log("File created synchronomously");
// });
// fs.writeFileSync("./blog3.txt", "This is a third blog", () =>{
//   console.log("Another file created")
// })

//delete  a file
// if (fs.existsSync("./blog4.txt")) {
//   fs.unlink("./blog4.txt", () => {
//     console.log("File deleted")
//   });
// } else {
//   console.log("File doesn't exist")

// }

//Create a folder
// if (!fs.existsSync("./asset")) {
//   fs.mkdir("./asset", (error) =>{
//     if (error) {
//       console.log(error);
//     }
//     console.log("Folder created")
//   })
// } else {
//   console.log("Folder already exists")
// }

//delete a folder
if (fs.existsSync("./assets")) {
  fs.rmdir("./assets", (error) => {
    if (error) {
      console.log(error);
    }
    console.log("Folder was deleted");
  });
}
