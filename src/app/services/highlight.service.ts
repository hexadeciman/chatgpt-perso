import { Injectable } from '@angular/core';

import hljs from 'highlight.js';
import CopyButtonPlugin from "../../customTypings/highlight-copy";

@Injectable({ providedIn: 'root' })
export class HighlightService {

  highlightAll() {
    setTimeout(() => {
      // @ts-ignore
      hljs.addPlugin(new CopyButtonPlugin());
      hljs.highlightAll();
    }, 50);
  }
}
