const student = {
    name: "alok",
    age: 21,
    eng: 89,
    math: 98,
    phy: 93,
    getAvg() {
        let avg = ( this.eng + this.math + this.phy) / 3
        console.log(avg);
    }
}

student.getAvg();