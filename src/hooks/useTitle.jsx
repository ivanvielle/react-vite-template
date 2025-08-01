import { useEffect, useRef } from "react";

function useTitle(title) {
    const documentDefined = typeof document !== "undefined";
    const originalTitle = useRef(documentDefined ? document.title : null);

    useEffect(() => {
        if (!documentDefined) return;

        if (document.title !== title) {
            document.title = title;
        }

        return () => {
            document.title = originalTitle.current;
        };
    }, [title]);
}

export default useTitle;
