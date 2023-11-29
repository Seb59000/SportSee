import './ConsoLayout.css';

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

export default ConsoLayout;
