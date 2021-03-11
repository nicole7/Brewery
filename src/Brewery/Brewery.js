import { React, useEffect, useState } from 'react';
import styles from './Brewery.module.scss';
import BreweryCard from './BreweryCard/BreweryCard';
import { getBreweries } from '../BreweryAPI/BreweryAPI';

const Brewery = () => {
    const [breweries, setBreweries] = useState({});

    useEffect(() => { 
        const getBrewery = async () => {
            const apiResponse = await getBreweries();
            const aggregatedData = apiResponse.map(brewery => {
                return {
                    id: brewery.id,
                    title: brewery.name,
                    description: brewery.description
                };
            })
            setBreweries(aggregatedData);
        }
        
        getBrewery();
    })
    

    return (
        <div className={styles.breweryContainer}>
            <div className={styles.breweryCardContainer}>
                <BreweryCard />
            </div>
        </div>
    )
    
}

export default Brewery;