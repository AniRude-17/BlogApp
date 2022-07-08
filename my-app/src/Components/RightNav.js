import '../css/RightNav.css'

export const RightNav = () => {
    return (
        <div className="RightNav">
            <form action='#' className='SearchForm'>
                <input type="text" name="search" className='SearchBar' placeholder='Enter a Keyword and hit Enter'/>
            </form>

            <div className='RightComponent'>
                <h2> SAMPLE </h2>
                <h2> SAMPLE </h2>
                <h2> SAMPLE </h2>
                <h2> SAMPLE </h2>
            </div>
        </div>
    );
}