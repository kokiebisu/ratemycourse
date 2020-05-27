import dev from './dev';
import prod from './prod';

export class Keys {
  private mongoURI: string;

  constructor() {
    this.selectKeys();
  }

  private selectKeys(): void {
    if (process.env.NODE_ENV === 'production') {
      this.mongoURI = prod.mongoURI;
    } else {
      this.mongoURI = dev.mongoURI;
    }
  }

  public getKeys(): string {
    return this.mongoURI;
  }
}
