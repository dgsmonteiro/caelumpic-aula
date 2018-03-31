import { Routes, RouterModule } from '@angular/router';

import { GaleriaComponent } from './pages/galeria/galeria.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { Page404Component } from './pages/page404/page404.component';

const rotasDaApp: Routes = [
    {path: '', component: GaleriaComponent},
    {path: 'cadastro', component: CadastroComponent},
    {path: 'cadastro/:_id', component: CadastroComponent},
    {path: '**', component: Page404Component }
];

export const roteamento = RouterModule.forRoot(rotasDaApp);