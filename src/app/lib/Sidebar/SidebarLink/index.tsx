import {ComponentProps} from "react";
import {Path} from "@/app/lib/Sidebar";
import ActiveLink from "@/app/lib/Sidebar/ActiveLink";

type SidebarProps = ComponentProps<'li'> & {
    path: Path
};
const SidebarLink = ({ path }: SidebarProps) => {
    return <li className={'flex gap-x-3 items-center hover:bg-gray-700 hover:cursor-pointer rounded-s p-2'}>{ path.icon }
                <ActiveLink path={path.path} label={path.label} />
            </li>

}

export default SidebarLink;
