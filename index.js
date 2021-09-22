function findMatching(allDrivers, findDriver) {
    return allDrivers.filter(
        (driver)=> driver.toUpperCase() === findDriver.toUpperCase()
    );
}

function fuzzyMatch(allDrivers, letters) {
    return allDrivers.filter(
        (driver) => (driver.slice(0,letters.length)) === letters
    );
}

function matchName(allDrivers, findName) {
    return allDrivers.filter(
        (driver) => driver.name === findName
    );
}