declare namespace _default {
    export const title: string;
    export { Header as component };
    export namespace parameters {
        const layout: string;
    }
}
export default _default;
export function LoggedIn(args: any): JSX.Element;
export namespace LoggedIn {
    namespace args {
        namespace user {
            const name: string;
        }
    }
}
export function LoggedOut(args: any): JSX.Element;
export namespace LoggedOut {
    const args_1: {};
    export { args_1 as args };
}
import { Header } from "./Header";
