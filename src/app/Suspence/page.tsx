// first method
// // using suspence with lazy react 
// "use client";

// import { Suspense, lazy } from "react";

// // Lazy-load the component
// const HeavyComponent = lazy(() => import("../components/HomeComponent"));

// export default function Page() {
//   return (
//     <div>
//       <h1>Next.js Suspense Example</h1>
//       <Suspense fallback={<p>Loading component...</p>}>
//         <HeavyComponent />
//       </Suspense>
//     </div>
//   );
// }


// second method server compenent -> data fetching 

import { Suspense } from "react";

async function ServerComponent() {
    await new Promise((resolve) => setTimeout(resolve, 2000)); 
    return <p>Data loaded from server!</p>;
}

export default function Page() {
    return (
        <div>
            <h1>Next.js Suspense Example</h1>
            <Suspense fallback={<p>Loading data...</p>}>
                <ServerComponent />
            </Suspense>
        </div>
    );
}
