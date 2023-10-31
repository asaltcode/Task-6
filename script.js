// 1. question A.)
class Movie{
    constructor(title,studio,rating = "PG"){
        this.title = title;
        this.studio =studio;
        this.rating = rating;
    }
    get getPG(){
        let titles = "";
        if(this.rating == "PG"){
           titles+= this.title;
        }
        return titles;
    }
}

// b)
let rating = new Movie("Leo", "Seven Screen");
console.log(`1. B.)
Title : ${rating.title}
Studio : ${rating.studio}
Rating : ${rating.rating}`)

// c)
let PG = new Movie("Thunivu", "Zee Studios");
console.log(`C.)
Title : ${PG.title}
Studio : ${PG.studio}
Rating : ${PG.rating}

Title : ${PG.getPG}, ${rating.title}
`)


// d)
let movie = new Movie("Casino Royale", "Eon Productions", "PG-13")
console.log(`D.)
Title : ${movie.title}
Studio : ${movie.studio}
Rating : ${movie.rating}`)

// question 2

class Circle{
    constructor(radius, color){
        this.radius = radius;
        this.color = color;
    }
    get Radius(){
        return this.radius;
    }
    set Radius(radius){
        this.radius = radius;
    }
    get Color(){
        return this.color;
    }
    set Color(color){
        this.color = color;
    }
    get toString(){
        return `"Cercle[radius=${this.radius},color=${this.color}"]`
    }
    get Area(){
        return Math.PI * this.radius * this.radius;
    }
    get Circumference(){
        return Math.PI * this.radius;
    }
}

let circle = new Circle(1.0, "red")

console.log(`2. Question`)
circle.Radius = 1.1
console.log(`radius: ${circle.Radius}, color: ${circle.Color}`)
circle.Color = "green";
console.log(`
setColor: ${circle.Color}

toString: ${circle.toString}

getArea: ${circle.Area}

getCircumference: ${circle.Circumference}
`)





// https://github.com/rvsp/typescript-oops/blob/master/Practice/Movie.md
// https://github.com/rvsp/typescript-oops/blob/master/Practice/class-circle.md
// 3.Write a “person” class to hold all the details.

class Person{
    constructor(name, age, gender, state, country){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.state = state;
        this.country = country;
    }
}

let person = new Person("Elango", 21, "Male", "Tamil nadu", "India");
console.log(`3.Write a “person” class to hold all the details.
${person.name}
${person.age}
${person.gender}
${person.state}
${person.country}
`)

// 4.write a class to calculate the uber price.

const uber = {
    set kiloMeter(km){    
       this.price = `${km} km = Rs.${km * 50}` ;
    },
    get kiloMeter(){
       return this.price;
    }
}

uber.kiloMeter = 2;

console.log(`4.) write a class to calculate the uber price.
Answer : ${uber.kiloMeter}`)



