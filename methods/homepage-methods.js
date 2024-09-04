const { Selector, t } = require('testcafe');

module.exports = {
    topDestinationsPresent: async function () {
        await t
        .expect(Selector('.df-dom-destinations-content').exists).ok()
    },
    offersPresent: async function () {
        await t
        .expect(Selector('.df-dom-offers-head').exists).ok()
        .expect(Selector('#df-dom-cards-block-full').exists).ok()
        .expect(Selector('#df-dom-cards-block-full').find('li').count).gte(3)
    },
    popularOperatorsPresent: async function () {
        await t
        .expect(Selector('.df-dom-operators').exists).ok()
        .expect(await Selector('.df-dom-operators').find('.df-operator-img').count).gte(16)
    }
}
