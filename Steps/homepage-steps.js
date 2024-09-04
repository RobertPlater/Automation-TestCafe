const { Given, When, Then } = require("@cucumber/cucumber");
const homepage = require("../methods/homepage-methods.js");

//fixture('homepage')
//    .page('https://www.directferries.co.uk/');

Then('I see top destinations', async function () {
    await homepage.topDestinationsPresent();
});

Then('I see latest offers', async function () {
    await homepage.offersPresent();
});

Then('I see popular operators', async function () {
    await homepage.popularOperatorsPresent();
});
