import { useRef } from "react";
import classNames from "classnames";
import styles from "./Container.module.css";
import useVisibleOnScroll from "../../hooks/useVisibleOnScroll";

function FadeContainer({
    classes,
    width,
    bgImg,
    bgSize,
    bgRepeat,
    bgPosition,
    backgroundColor,
    children,
}) {
    const ref = useRef();
    const isVisibleOnScroll = useVisibleOnScroll(ref);

    let containerBgImgStyle = !bgImg
        ? null
        : {
              background: `url(${bgImg})`,
              backgroundSize: bgSize,
              backgroundRepeat: bgRepeat,
              backgroundPosition: bgPosition,
          };

    const containerClass = classNames(
        styles[width],
        styles[backgroundColor],
        classes,
        styles.fading,
        isVisibleOnScroll ? styles.visible : null
    );

    return (
        <div ref={ref} className={containerClass} style={containerBgImgStyle}>
            {children}
        </div>
    );
}

export default FadeContainer;
