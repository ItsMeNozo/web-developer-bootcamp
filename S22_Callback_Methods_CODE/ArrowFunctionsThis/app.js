const person = {
    firstName: 'Viggo',
    lastName: 'Mortensen',
    fullName: function () {
        console.log(this); 
        return `${this.firstName} ${this.lastName}`
    },
    shoutName: function () {
        setTimeout(() => {
            //keyword 'this' in arrow functions refers to the value of 'this' when the function is created
            console.log(this);
            console.log(this.fullName())
        }, 3000)
    }
}


const {firstName: fn, lastName: ln, noExist = 'None'} = person; 

// function raceResults(gold, sil, ...rest)
// {
//     console.log(`Gold: ${gold}\n sil: ${sil}\n rest: ${rest}`);
// }