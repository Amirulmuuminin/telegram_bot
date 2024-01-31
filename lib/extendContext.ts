import { Context, Scenes } from "telegraf";

interface hafalanData {
  hal: number;
  ayat: number;
  surat: string;
}
interface MyWizardSession extends Scenes.WizardSessionData {
  // available in scene context under ctx.scene.session.kelas
  kelas: string;
  murid: string;
  h: {
    dari: hafalanData;
    sampai: hafalanData;
  };
  m: {
    dari: hafalanData;
    sampai: hafalanData;
  };
  mh: {
    dari: hafalanData;
    sampai: hafalanData;
  };
}

export interface MyContext extends Context {
  // will be available globally under `ctx.myContextProp`
  myContextProp: string;

  // customize scene object
  scene: Scenes.SceneContextScene<MyContext, MyWizardSession>;

  wizard: Scenes.WizardContextWizard<MyContext>;
}
