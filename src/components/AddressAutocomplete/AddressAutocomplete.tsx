import React, { FC } from 'react'
import styles from './AddressAutocomplete.module.scss';

const AddressAutocomplete: FC = () => <input placeholder="Enter an address" className={styles.input}/>

export default AddressAutocomplete;