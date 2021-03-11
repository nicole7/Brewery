import { React, useEffect, useState } from 'react';
import styles from './Brewery.module.scss';
import BreweryCard from './BreweryCard/BreweryCard';
import { getBreweries } from '../BreweryAPI/BreweryAPI';

const Brewery = () => {
    const [breweries, setBreweries] = useState([]);
    const [page, setPage] = useState(0);

    const onClickHandler = (buttonType) => {
        let pageCounter = page;
        if (buttonType === "previous" && page > 0) {
            setPage(pageCounter -= 1);
        } else if (buttonType === "next") {
            setPage(pageCounter += 1);
        }
    }

    useEffect(() => { 
        const getBrewery = async () => {
            const apiResponse = await getBreweries(page);
            const aggregatedData = apiResponse.map(brewery => {
                return { "name": brewery.name, "id": brewery.id, "type": brewery.brewery_type }
              });
            setBreweries(aggregatedData);
            return aggregatedData;
        }
        
        getBrewery();
    }, [page])
    
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
            <div className={styles.buttonContainer}>
                <button className={styles.button} onClick={() => onClickHandler('previous')}>
                    Previous
                </button>
                <button className={styles.button} onClick={() => onClickHandler('next')}>
                    Next
                </button>
            </div>
            
        </div>
    )
    
}

export default Brewery;