declare namespace _default {
    export const title: string;
    export { Page as component };
    export namespace parameters {
        const layout: string;
    }
}
export default _default;
export function LoggedOut(args: any): JSX.Element;
export function LoggedIn(args: any): JSX.Element;
export namespace LoggedIn {
    function play({ canvasElement }: {
        canvasElement: any;
    }): Promise<void>;
}
import { Page } from "./Page";
