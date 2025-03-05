import fs from "fs"

export function ServerComponentTwo() {
    fs.readFileSync("src/app/components/server-component-one.tsx", "utf-8");
    return <h1>Server Component Two</h1>
}