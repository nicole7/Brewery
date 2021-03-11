import styles from './BreweryCard.module.scss';
import Brewery from '../Brewery';

const BreweryCard = () => {
    return (
        <div className={styles.breweryCardContainer}>
            <div className={styles.breweryCardHeader}>
                <div className={styles.breweryCardTitle}>
                    Brewery Card Title
                </div>
                <div className={styles.breweryCardId}>
                    Id 
                </div>
            </div>
            <div className={styles.breweryCardBody}>
                <div className={styles.breweryCardDescription}>
                    Description
                </div>
            </div>
        </div>
    )

}

export default BreweryCard;