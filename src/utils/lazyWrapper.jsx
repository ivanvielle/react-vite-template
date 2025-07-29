import { lazy, Suspense } from "react";
import Loader from "../components/Loader/Loader";

function lazyWrapper(importFn, { fallback = null } = {}) {
    const LazyComponent = lazy(importFn);

    return (
        <Suspense fallback={fallback || <Loader />}>
            <LazyComponent />
        </Suspense>
    );
}

export default lazyWrapper;
