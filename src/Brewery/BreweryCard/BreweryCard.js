import React from 'react';
import styles from './BreweryCard.module.scss';

const BreweryCard = ({
    key,
    breweryId,
    breweryName,
    breweryType
}) => {

    return (
        <div className={styles.breweryCardContainer} key={key}>
            <div className={styles.breweryCardHeader}>
                <div className={styles.breweryCardName}>
                    {breweryName}
                </div>
                <div className={styles.breweryCardId}>
                    {breweryId}
                </div>
            </div>
            <div className={styles.breweryCardBody}>
                <div className={styles.breweryCardDescription}>
                    {breweryType}
                </div>
            </div>
        </div>
    )

}

export default BreweryCard;