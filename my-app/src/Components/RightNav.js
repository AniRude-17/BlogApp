import '../css/RightNav.css'
import Searchbox from './Rightnav-Components/Searchbox';
import Tagcloud from './Rightnav-Components/Tagcloud';
<<<<<<< HEAD
import { Blogprev } from './Blogprev';
import Catagories from './Rightnav-Components/Catagories';
=======
>>>>>>> e1c2b5aa9589e6e5730188fa1c2fd3d73a1942b2

export const RightNav = () => {
    return (
        <div className="RightNav">
            <div className='RightComponent'>    
                <Searchbox />
                <h3 className='RightNav-headings'> Tag Cloud </h3>
                <Tagcloud />
<<<<<<< HEAD
                <h3 className='RightNav-headings'> Categories </h3>
                <Catagories />
                
=======
                <h3 className='RightNav-headings'> Categories </h3>'
>>>>>>> e1c2b5aa9589e6e5730188fa1c2fd3d73a1942b2
            </div>
        </div>
    );
}