import styles from './Brewery.module.scss';
import BreweryCard from './BreweryCard/BreweryCard';
import BreweryAPI from '../BreweryAPI/BreweryAPI';

const Brewery = () => {
    return (
        <div className={styles.breweryContainer}>
            <div className={styles.breweryCardContainer}>
                <BreweryCard />
            </div>
        </div>
    )
    
}

export default Brewery;