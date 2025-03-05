import fs from "fs"

import { ServerComponentTwo } from "./server-components-two";
import { ClientComponentOne } from "./client-component-one";

export function ServerComponentOne() {
    fs.readFileSync("src/app/components/server-component-one.tsx", "utf-8");
    return (
        <>
            <h1>Server Component One</h1>
            <ClientComponentOne/>
            {/* <ServerComponentTwo/> */}
        </>
    )
}