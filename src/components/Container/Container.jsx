import classNames from "classnames";
import styles from "./Container.module.css";

function Container({
    classes,
    width,
    bgImg,
    bgSize,
    bgRepeat,
    bgPosition,
    backgroundColor,
    children,
}) {
    let containerBgImgStyle = !bgImg
        ? null
        : {
              background: `url(${bgImg})`,
              backgroundSize: bgSize,
              backgroundRepeat: bgRepeat,
              backgroundPosition: bgPosition,
          };

    const containerClass = classNames(
        styles.container,
        styles[width],
        styles[backgroundColor],
        classes
    );

    return (
        <div className={containerClass} style={containerBgImgStyle}>
            {children}
        </div>
    );
}

export default Container;
