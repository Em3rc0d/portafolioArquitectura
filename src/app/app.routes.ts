import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ResultadoA1Component } from './components/resultado-a1/resultado-a1.component';
import { ResultadoA2Component } from './components/resultado-a2/resultado-a2.component';
import { ResultadoA3Component } from './components/resultado-a3/resultado-a3.component';
import { ResultadoA4Component } from './components/resultado-a4/resultado-a4.component';
import { IndiceComponent } from './components/indice/indice.component';
import { LecturasComponent } from './components/lecturas/lecturas.component';
import { ReflexionesComponent } from './components/reflexiones/reflexiones.component';

export const routes: Routes = [
    {path: '', redirectTo: 'inicio', pathMatch: 'full'},
    {path: 'inicio', component: AppComponent},
    {path: 'indice', component: IndiceComponent},
    {path: 'resultadoAprendizaje1', component: ResultadoA1Component},
    {path: 'resultadoAprendizaje2', component: ResultadoA2Component},
    {path: 'resultadoAprendizaje3', component: ResultadoA3Component},
    {path: 'resultadoAprendizaje4', component: ResultadoA4Component},
    {path: 'lecturas', component: LecturasComponent},
    {path: 'reflexiones', component: ReflexionesComponent},
    {path: '**', redirectTo: 'inicio', pathMatch: 'full'},
];
