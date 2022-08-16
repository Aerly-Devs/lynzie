export type ReagentsProducts = 'reagents' | 'products';

export type SideEquation = {
  type: ReagentsProducts;
  substancesAmount?: number;
  Substances?: Substance[];
}

export type SubstanceType = {
  name?: string;
  type?: ReagentsProducts;
  quantity?: number;
}
  // constructor(
  //   public name?: string,
  //   public type?: ReagentsProducts,
  //   public quantity?: number
  // ) {};

