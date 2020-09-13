import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SonorousIconsService {

  public readonly icons = {
    favorite2: {
      path: "M12,21.35l-1.45-1.32C5.4,15.36,2,12.28,2,8.5A5.447,5.447,0,0,1,7.5,3,5.988,5.988,0,0,1,12,5.09,5.988,5.988,0,0,1,16.5,3,5.447,5.447,0,0,1,22,8.5c0,3.78-3.4,6.86-8.55,11.54Z",
      w: 32,
      h: 32
    },
  };

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
  }

  refisterIcons() {
    return new Promise<void>((res) => {
      setTimeout(() => {
        const defW = 56;
        const defH = 56;

        Object.keys(this.icons).forEach((k: string) => {
          const nName = `sonorous-${k}`;
          const nPath = `<path d="${this.icons[k].path}" x="0" y="0"/>`;
          this.matIconRegistry.addSvgIconLiteral(nName,
            this.domSanitizer.bypassSecurityTrustHtml(`<svg xmlns="http://www.w3.org/2000/svg" svg viewBox="0 0 ${this.icons[k].w || defW} ${this.icons[k].h || defH}">${nPath}</svg>`));
        });

        this.matIconRegistry.addSvgIconLiteral('sonorous-test',
          this.domSanitizer.bypassSecurityTrustHtml(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56"><path d="M53.64-148.135a1 1 0 0 0 1-1 5.8 5.8 0 0 1 5.791-5.79 5.752 5.752 0 0 1 4.1 1.7 5.752 5.752 0 0 1 1.7 4.1 1 1 0 0 0 1 1 1 1 0 0 0 1-1 7.739 7.739 0 0 0-2.282-5.509 7.737 7.737 0 0 0-5.509-2.282 7.8 7.8 0 0 0-7.791 7.79 1 1 0 0 0 .991.991z"/></svg>`));
        res();
      });
    });
  }
}
