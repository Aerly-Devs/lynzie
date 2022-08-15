import { SideEquation, Substance } from './equation.model';

export class Score {
  public receiveEquation(reagents: SideEquation, products: SideEquation): void {
    let reagentVars: Substance[];
    reagentVars = this.saveAmount(reagents, "reagent", reagentVars, 0);
    let productVars: Substance[];
    productVars = this.saveAmount(products, "products", productVars, reagents.substancesAmount);
  }

  private saveAmount(iterableArray: SideEquation, type: string, array: Substance[], value?: number): Substance[] {
    for (let i = value ?? 0; i < iterableArray.substancesAmount; i++) {
      let element: Substance = {
        name: `Var ${i}`,
        type: type,
        value: 1
      };

      array.push(element);
    }

    return array;
  }
}
