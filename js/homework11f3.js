// 1
const bankAccount = {
    ownerName: "Zhorik",
    accountNumber: 12,
    balance: 100,

    deposit() {
        if(confirm("Чи бажаєте Ви поповнити рахунок?")) {
            this.balance = this.balance + Number(prompt("Введіть суму для поповнення: "));
            alert(`Сума на рахунку ${this.balance}`)
        }
    },

    withdraw() {
        if(confirm("Чи бажаєте Ви зняти гроші з рахунку?")) {
            this.balance = this.balance - Number(prompt("Введіть суму, яку бажаєте зняти: "));
            alert(`Залишок на рахунку ${this.balance}`)
        }
    }
}

bankAccount.deposit();
bankAccount.withdraw();

// 2
const temperature = prompt("Введіть температуру у вашому місті:");

const weather = {
    temperature,
    humidity: 3,
    windSpeed: 88,

    temperatureChecking() {
        if(this.temperature < 0) {
            alert("температура нижче 0 градусів Цельсія");
        } else {
            alert("температура вижче 0 градусів Цельсія");
        }
    },
}

weather.temperatureChecking();

// 3
const user = {
    name: "Zhorik 2",
    email: "zhorikcoolestboy2013@gmail.com",
    password: "zhorikcoolestboy110",

    login() {
        return this.email.includes("@") && this.password.length >= 15;
    }
}

console.log(user.login())

// 4 
const movie = {
    title: "film",
    director: "director",
    year: 2002,
    rating: 9,

    ratingChecking() {
        return this.rating > 8;
    }
}

console.log(movie.ratingChecking())