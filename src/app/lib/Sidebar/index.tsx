import {DiCssdeck} from "react-icons/di";
import SidebarLink from "@/lib/SidebarLink";
import {JSX} from "react";
import {CgProfile} from "react-icons/cg";


export type Path = {
    path: string,
    label: string,
    icon?: JSX.Element
}

const paths: Path[] = [
    { path: '/', label: 'Home', icon: <DiCssdeck />},
    { path: '/profile', label: 'Profile', icon: <CgProfile />},

]

const Sidebar = () => {
    return ( <ul className={'p-2'}>
        { paths.map( (path: Path, index: number) => {
            return <SidebarLink key={`link-${index}`} path={path} />
        } )}
    </ul>)
}

export default Sidebar;
