import {DiCssdeck} from "react-icons/di";
import SidebarLink from "./SidebarLink";
import {JSX} from "react";
import {CgProfile} from "react-icons/cg";


export type Path = {
    path: string,
    label: string,
    icon?: JSX.Element
}

const paths: Path[] = [
    { path: '/profile', label: 'Profile', icon: <CgProfile />},
    { path: '/', label: 'Home', icon: <DiCssdeck />},

]

const Sidebar = () => {
    return ( <ul className={'p-2 bg-gray-800 text-gray-100 w-1/6 h-dvh'}>
        { paths.map( (path: Path, index: number) => {
            return <SidebarLink key={`link-${index}`} path={path} />
        } )}
    </ul>)
}

export default Sidebar;
