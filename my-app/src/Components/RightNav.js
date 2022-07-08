import '../css/RightNav.css'
import Searchbox from './Rightnav-Components/Searchbox';
import Tagcloud from './Rightnav-Components/Tagcloud';
export const RightNav = () => {
    return (
        <div className="RightNav">
            
            <Searchbox />
            <Tagcloud />
            <div className='RightComponent'>
                <h2> SAMPLE </h2>
                <h2> SAMPLE </h2>
                <h2> SAMPLE </h2>
                <h2> SAMPLE </h2>
            </div>
        </div>
    );
}