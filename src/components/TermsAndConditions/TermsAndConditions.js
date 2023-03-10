import React from 'react';
import './TermsAndConditions.css';
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const TermsAndConditions = () => {
    useTitle('Terms');
    return (
        <div className='text-center mt-5 terms'>
            <h3>Accepted Terms and Conditions</h3>
            <Link to='/register'>Back to Register</Link>
        </div>
    );
};

export default TermsAndConditions;