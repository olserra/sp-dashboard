import React from "react";
import classNames from "classnames";

interface IRoundIcon {
  icon: any;
  className: string;
  iconColorClass: string;
  bgColorClass: string;
}

function RoundIcon({
  icon,
  iconColorClass = "text-teal-600 dark:text-teal-100",
  bgColorClass = "bg-teal-100 dark:bg-teal-400",
  className,
}: IRoundIcon) {
  const baseStyle = "p-3 rounded-full";
  const cls = classNames(baseStyle, iconColorClass, bgColorClass, className);
  return <div className={cls}>{/* <Icon className="w-5 h-5" /> */}</div>;
}

export default RoundIcon;
