import BreweryCard from './BreweryCard';
import { render } from '@testing-library/react';

const breweries = [

    {
      name: "Avondale Brewerig Co"
    },
    {
    id: 2
    },
    {
      type: "micro"
    }
]

describe('a Brewery card', () => {
    test('renders correctly with a name, id and type', () => {
        render(<BreweryCard breweryName={breweries.name} breweryId={breweries.id} breweryType={breweries.type}/>);
    })
});
  
