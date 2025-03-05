import { Navlinks } from "../navlink";
import { NavSearch } from "../navsearch";

export function Navbar() {
    console.log('navbar returned');
    return (
        <div>
            <Navlinks></Navlinks>
            <NavSearch></NavSearch>
        </div>
    )
}