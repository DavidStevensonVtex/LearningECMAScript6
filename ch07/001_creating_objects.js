let student = {
    name: "Eden",
    printName: function() {
        console.log("this.name: ", this.name);
    }
}

student.printName();

// this.name:  Eden