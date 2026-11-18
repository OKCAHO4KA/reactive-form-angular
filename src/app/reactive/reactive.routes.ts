import { Routes } from "@angular/router";
import { BasicPageComponent } from "./pages/basic-page/basic-page";
import { DinamicPageComponent } from "./pages/dinamic-page/dinamic-page";
import { SwitchesPageComponent } from "./pages/switches-page/switches-page";

export const reactiveRoutes: Routes  = [
    {
        path:'',
        children:[
            {
                path:'basic',
                component: BasicPageComponent,
                title: 'Básicos'
            },
            {
                path:'dynamic',
                component: DinamicPageComponent,
                title: 'Dinámicos'
            },
            {
                path: 'switches',
                component: SwitchesPageComponent,
                title: 'Switches'
            },
            {
                path:'**',
                redirectTo:'basic'
            }

        ]

    }
]