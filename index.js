import Book from "./book.js";

    // this.title = title;
    // this.pages = pages;
    // this.colour = colour;
    // this.bookRead = bookRead;

const JurrassicPark = new Book (
"Jurrassic Park",
448,
"orange",
true
);

console.log("Jurrassic Park book:", JurrassicPark);
console.log("Have I read this?", JurrassicPark.bookRead);


const TheRosieProject = new Book (
    "The Rosie Project",
    304,
    "red",
    false
    );

console.log("The Rosie Project book:", TheRosieProject);
console.log("Have I read this?", TheRosieProject.bookRead);

const TheMartian = new Book (
    "The Martian",
    369,
    "orange",
    true
    );

console.log("The Martian book:", TheMartian);
console.log("Have I read this?", TheMartian.bookRead);
    
