export class Pokemon {
  get imageUrl() {
    return `http://pokemon.com/${this.id}.jpg`;
  }

  constructor(
    public readonly id: number,
    public name: string // public imageUrl: string
  ) {}

  public scream() {
    console.log(`${this.name.toUpperCase()} !!!`);
    this.speak();
  }

  private speak() {
    console.log(`${this.name}, ${this.name}`);
  }
}

export const charmander = new Pokemon(2, 'Charmander');
