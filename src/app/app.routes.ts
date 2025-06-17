import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'wallet', pathMatch: 'full' },
    { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
    { path: 'wallet', loadChildren: () => import('./wallet/wallet.module').then(m => m.WalletModule) },
    { path: 'expenses', loadChildren: () => import('./expenses/expenses.module').then(m => m.ExpensesModule) },
];
