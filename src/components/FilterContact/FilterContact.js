import PropTypes from 'prop-types';
import styles from './FilterContact.module.css';

const FilterContact = ({ title, value, onChange }) => {
    return (
        <label className={styles.filter__label}>
            {title}
            <input
                className={styles.filter__input}
                type='text'
                name='filter'
                value={value}
                onChange={onChange} />
        </label>
        
    );
};

FilterContact.propTypes = {
    title: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default FilterContact;