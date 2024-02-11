import styles from './Section.module.css';
import PropTypes from 'prop-types';

 const Section = ({ title, children }) => {
  return (
    <>
      <h2 className={styles.heading}>{title}</h2>
      {children}
    </>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};

export default Section;