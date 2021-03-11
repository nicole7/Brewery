import { getBreweries } from './BreweryAPI';

describe('brewery api', () => {
    test('can return a brewery name', async () => {
        const breweries = await getBreweries();
        const breweryName = breweries[0].name;
        expect(breweryName).toEqual('Avondale Brewing Co')
       
    })
    test('can return a brewery id', async () => {
        const breweries = await getBreweries();
        const breweryId = breweries[1].id;
        expect(breweryId).toEqual(44)
       
    })
    test('can return a brewery type', async () => {
        const breweries = await getBreweries();
        const breweryType = breweries[2].brewery_type;
        expect(breweryType).toEqual('micro')
    })
})
