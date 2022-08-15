import { ReagentsProducts, SideEquation, Substance } from './equation.model';

export class Score {
  public receiveEquation(reagents: SideEquation, products: SideEquation): void {
    let reagentVars: Substance[];
    reagentVars = this.saveAmount(reagents, "reagents", reagentVars, 0);
    let productVars: Substance[];
    productVars = this.saveAmount(products, "products", productVars, reagents.substancesAmount);
  }

  private saveAmount(iterableArray: SideEquation, type: ReagentsProducts, array: Substance[], value?: number): Substance[] {
    for (let i = value ?? 0; i < iterableArray.substancesAmount; i++) {
      let element: Substance = {
        name: `Var ${i}`,
        type: type,
        quantity: 1
      };

      array.push(element);
    }

    return array;
  }

  private identifyElements(): void {

  }

  private operateQuantities(): void {

  }
}
