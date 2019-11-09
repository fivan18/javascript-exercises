function getAge(person){
    let age;
    if("yearOfDeath" in person){
        age = person.yearOfDeath - person.yearOfBirth;
    } else {
        age = (new Date().getFullYear()) - person.yearOfBirth;
    }
    return age;
}

let findTheOldest = function(people) {
    return people.reduce((longest, person) => {
        return getAge(person) > getAge(longest)
                ? person
                : longest;
    }, people[0]);
}



module.exports = findTheOldest
