import {ComponentProps} from "react";
import {Path} from "@/app/lib/Sidebar";

type SidebarProps = ComponentProps<'li'> & {
    path: Path
};
const SidebarLink = ({ path }: SidebarProps) => {
    return <li className={'flex gap-x-3 items-center'}>{ path.icon }<span className={'block'}>{ path.label}</span></li>

}

export default SidebarLink;
