
var FlightSuretyApp = artifacts.require("FlightSuretyApp");
var FlightSuretyData = artifacts.require("FlightSuretyData");
var BigNumber = require('bignumber.js');

var Config = async function(accounts) {

    // These test addresses are useful when you need to add
    // multiple users in test scripts
    let testAddresses = [
        "0x2006570f0C2Ea5a041274F05FE47aCa8F2B6A6A9",
        "0x48B0A0DA59f20Fa02406f5d14a21b9D65ba8FE99",
        "0x763737F1Ab81C3A840d4EBe30Fd2Df37d06DEdAF",
        "0xF3E2833A51A89955879b3ED86e428daea1c00eF0",
        "0x7bCE7F5169Bbf337F2196768A79f67200bD8bb20",
        "0x36ca61Ce352EC95824199Cef402518176c3D281c",
        "0x5dE1011042B53889fcd765e9B855EB9581C152EF",
        "0x8b492bdB1708A85202B7B2b17C7ABCb6980d00F7",
        "0x7CAb4224bF6475bf722934D886c9B25d43989908"
    ];


    let owner = accounts[0];
    let firstAirline = accounts[1];

    let flightSuretyData = await FlightSuretyData.new(firstAirline);
    let flightSuretyApp = await FlightSuretyApp.new(flightSuretyData.address);
    await flightSuretyData.authorizeCaller(FlightSuretyApp.address,{from : owner});

    return {
        owner: owner,
        firstAirline: firstAirline,
        weiMultiple: (new BigNumber(10)).pow(18),
        testAddresses: testAddresses,
        flightSuretyData: flightSuretyData,
        flightSuretyApp: flightSuretyApp
    }
}

module.exports = {
    Config: Config
};
