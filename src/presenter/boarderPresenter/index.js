import { render } from '../../render.js';
import Sorting from '../../view/sorting';
import RoutePointsList from '../../view/route-points-list';
import RoutePoint from '../../view/route-point';
import FormEdit from '../../view/form-edit';

export default class BoarderPresenter {
  sortComponent = new Sorting();
  listComponent = new RoutePointsList();

  constructor({ boardContainer, routePointsModel }) {
    this.container = boardContainer;
    this.routePointsModel = routePointsModel;
  }

  init() {
    this.routePointsData = [...this.routePointsModel.getRoutePoints()];
    render(this.sortComponent, this.container);
    render(this.listComponent, this.container);
    render(new FormEdit(), this.listComponent.getElement());

    for (let i = 0; i < this.routePointsData.length; i++) {
      render(new RoutePoint({ point: this.routePointsData[i] }), this.listComponent.getElement());
    }
  }
}
