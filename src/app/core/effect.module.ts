import { Injector, ModuleWithProviders, NgModule } from '@angular/core';

@NgModule({
})
export class EffectModule {

  constructor( private injector:Injector ){
    EffectModuleEffects.map( effect => this.injector.get(effect));
  }

  static registerEffects(effects: any[]): ModuleWithProviders<EffectModule> {
    EffectModuleEffects.push(...effects);
    return { ngModule: EffectModule, /* providers: [...effects] */ };
  }

}

const EffectModuleEffects:any[] = [];
