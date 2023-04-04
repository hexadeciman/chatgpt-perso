import {EventEmitter, Injectable, Input} from "@angular/core";
import { env } from "src/env";

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  apiKey: string = '';
  selectedModel: string = 'gpt-3.5-turbo';
  temperature: number = 0.7;
  maxTokens: number = 256;
  refreshApiKey = new EventEmitter<string>();

  constructor() {
    const savedApiKey = env.API_KEY;
    if (savedApiKey) {
      this.apiKey = savedApiKey;
    }
    const savedTemperature = localStorage.getItem('temperature');
    if (savedTemperature) {
      this.temperature = parseFloat(savedTemperature);
    }
    const saveMaxTokens = localStorage.getItem('maxTokens');
    if (saveMaxTokens) {
      this.maxTokens = parseInt(saveMaxTokens);
    }
    const savedSelectedModel = localStorage.getItem('selectedModel');
    if (savedSelectedModel) {
      this.selectedModel = savedSelectedModel;
    }
  }
}
