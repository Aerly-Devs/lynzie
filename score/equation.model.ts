export type ReagentsProducts = 'reagents' | 'products';

export class SideEquation {
  public type: ReagentsProducts;
  public substancesAmount: number;
  public Substances: Substance[];
}

export class Substance {
  public name: string;
  public type: ReagentsProducts;
  public quantity: number;
}
