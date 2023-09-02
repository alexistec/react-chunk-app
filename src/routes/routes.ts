import { LazyExoticComponent, lazy } from "react";
// import { LazyPageOne, LazyPageThree, LazyPageTwo } from "../01-lazyload/pages";

type JSXComponent = () => JSX.Element;

interface Route {
    to: string;
    path: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string
}

const LazyPageOne = lazy(() => import(/* webpackChunkName: "LazyPage1" */ '../01-lazyload/pages/LazyPageOne'))
const LazyPageTwo = lazy(() => import(/* webpackChunkName: "LazyPage2" */'../01-lazyload/pages/LazyPageTwo'))
const LazyPageThree = lazy(() => import(/* webpackChunkName: "LazyPage3" */'../01-lazyload/pages/LazyPageThree'))

export const routes: Route[] = [
    {
        to:'/lazy-one',
        path:'lazy-one',
        Component: LazyPageOne,
        name:'Lazy one'
    },
    {
        to:'/lazy-two',
        path:'lazy-two',
        Component: LazyPageTwo,
        name:'Lazy two'
    },
    {
        to:'/lazy-three',
        path:'lazy-three',
        Component: LazyPageThree,
        name:'Lazy three'
    }
]