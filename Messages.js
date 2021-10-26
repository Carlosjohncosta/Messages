const messages = {
    m1: ["Today", "Tomorrow", "Next week", "Next month"],
    m2: ["it will", "it wont", "it might", "it may not"],
    m3: ["be sunny.", "be cloudy.", "rain.", "thunder."],
    genMessage() {
        return `${this.m1[random()]} ${this.m2[random()]} ${this.m3[random()]}`;
    }
}

const random = () => {
    return Math.floor(Math.random() * 4);
}

console.log(messages.genMessage());