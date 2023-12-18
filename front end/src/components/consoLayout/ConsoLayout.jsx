import './ConsoLayout.css';
import PropTypes from 'prop-types';

function ConsoLayout({ data, logo, text1, text2, id, alt }) {
    return (
        <div className='consoLayout'>
            <div className='infosContainer'>
                <p className='bold'>
                    {data}{text1}
                </p>
                <p className='grey'>
                    {text2}
                </p>
            </div>
            <div id={id} className='consoLogo'>
                <img src={logo} alt={alt} />
            </div>

        </div>
    );
}

ConsoLayout.propTypes = {
    data: PropTypes.number,
    logo: PropTypes.string,
    text1: PropTypes.string,
    text2: PropTypes.string,
    id: PropTypes.string,
    alt: PropTypes.string
}

export default ConsoLayout;
