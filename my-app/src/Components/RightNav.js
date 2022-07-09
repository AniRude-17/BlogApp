import '../css/RightNav.css'
import Searchbox from './Rightnav-Components/Searchbox';
import Tagcloud from './Rightnav-Components/Tagcloud';

export const RightNav = () => {
    return (
        <div className="RightNav">
            <div className='RightComponent'>    
                <Searchbox />
                <h3 className='RightNav-headings'> Tag Cloud </h3>
                <Tagcloud />
                <h3 className='RightNav-headings'> Categories </h3>'
            </div>
        </div>
    );
}