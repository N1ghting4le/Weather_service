import { onEnter } from "../../commonFunctions";
import './search.css';

const Search = ({setTown}) => (
    <div style={{position: 'relative'}}>
        <input type="text" placeholder="Enter town name..." onKeyDown={(e) => onEnter(e, setTown, e.target.value)}/>
        <img src="https://img.icons8.com/ios/50/search.png" alt="search icon" className="search_icon" 
             onClick={(e) => setTown(e.target.previousElementSibling.value)}/>
    </div>
);

export default Search;