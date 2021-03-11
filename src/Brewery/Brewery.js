import { React, useEffect, useState } from 'react';
import styles from './Brewery.module.scss';
import BreweryCard from './BreweryCard/BreweryCard';
import { getBreweries } from '../BreweryAPI/BreweryAPI';

const Brewery = () => {
    const [breweries, setBreweries] = useState([]);

    useEffect(() => { 
        const getBrewery = async () => {
            const apiResponse = await getBreweries();
            const aggregatedData = apiResponse.map(brewery => {
                return { "name": brewery.name, "id": brewery.id, "type": brewery.brewery_type }
              });
            setBreweries(aggregatedData);
            return aggregatedData;
        }
        
        getBrewery();
        console.log('breweries', breweries)
    })
    
    return (
        <div className={styles.breweryContainer}>
            <div className={styles.breweryCardContainer}>
                {breweries.map((brewery, key) =>
                    < BreweryCard
                        key={key}
                        breweryId={brewery.id}
                        breweryName={brewery.name}
                        breweryType={brewery.type}
                    />     
                )}
           </div>
        </div>
    )
    
}

export default Brewery;