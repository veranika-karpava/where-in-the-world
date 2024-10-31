export const getRandomNumber = (range) => {
    return Math.floor(Math.random() * range) + 1
}

export const formattedPopulation = (num) => {
    return new Intl.NumberFormat().format(num);
}