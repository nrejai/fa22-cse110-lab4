let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};

for (let value in statistics) {
    if (value[0]=='r' || statistics[value]%2 != 0) {
        
        console.log(statistics[value]);
    }
}