import classNames from "classnames";
import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";

const iconMap = {
    Fa: FaIcons,
    Md: MdIcons,
};

function DynamicIcon({ classes, iconName, size, color }) {
    const iconClass = classNames(classes);
    const prefix = iconName.slice(0, 2); // e.g. "Fa"
    const iconPack = iconMap[prefix];

    const IconComponent = iconPack?.[iconName];

    if (!IconComponent) return <span>🚫</span>;

    return <IconComponent className={iconClass} size={size} color={color} />;
}

export default DynamicIcon;
