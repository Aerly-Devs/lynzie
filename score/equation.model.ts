export type ReagentsProducts = 'reagents' | 'products';

export type SideEquation = {
  type: ReagentsProducts;
  substancesAmount: number;
  Substances: Substance[];
}

export type Substance = {
  name: string;
  type: ReagentsProducts;
  quantity: number;
}
