import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      [
        {

          path: '',

          loadChildren: () =>

            import(

              '@joke-master-lib'

            ).then(

              (module) => module.JokeMasterApplicationModule,

            ),

        },
      ]
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
