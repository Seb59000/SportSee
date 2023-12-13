import './ConsoLayout.css';
import PropTypes from 'prop-types';
// import { Image as ImageNative } from 'react-native';

function ConsoLayout({ data, logo, text1, text2, id, alt }) {
    return (
        <div className='consoLayout'>
            <div id={id} className='consoLogo'>
                <img src={logo} alt={alt} />
            </div>
            <div className='infosContainer'>
                <p className='bold'>
                    {data}{text1}
                </p>
                <p className='grey'>
                    {text2}
                </p>
            </div>
        </div>
    );
}

ConsoLayout.propTypes = {
    data: PropTypes.number,
    logo: PropTypes.string,
    // logo: ImageNative.propTypes.Image,
    // source: ImageNative.propTypes.source.isRequired
    text1: PropTypes.string,
    text2: PropTypes.string,
    id: PropTypes.string,
    alt: PropTypes.string
}

export default ConsoLayout;
