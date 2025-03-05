import { ClientComponentOne } from "../components/client-component-one";
import { ServerComponentOne } from "../components/server-component-one";


export default function InterleavingComponent() {
    return (
        <>
            <h1>Interleave Component</h1>
            {/* <ServerComponentOne/> */}
            <ServerComponentOne/>
        </>
    )
}