import { ComponentType, lazy } from "react";

const Home = lazy(() => import('../pages/General/Home'))

export interface IRoute {
  path: string;
  component: ComponentType;
  type: string;
}


export enum RoutesNamesPrivate {
    HOME = "/",
}

export enum RoutesNamesPublic {
    HOME = "/",
}

export const privateRoutes: IRoute[] = [
    { path: RoutesNamesPrivate.HOME, component: Home, type: "Home" },
];

export const publicRoutes: IRoute[] = [
    { path: RoutesNamesPrivate.HOME, component: Home, type: "Home" },
];