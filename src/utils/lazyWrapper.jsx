import { lazy, Suspense } from "react";

function lazyWrapper(importFn, { fallback = null } = {}) {
    const LazyComponent = lazy(importFn);

    return (
        <Suspense fallback={fallback || <div>Loading...</div>}>
            <LazyComponent />
        </Suspense>
    );
}

export default lazyWrapper;
