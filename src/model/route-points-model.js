import { getRandomRoutePoint } from '../mock/points.js';
import { ROUTE_POINTS_COUNT } from '../const.js';

export default class RoutePointsModel {
  routePoints = Array.from({ length: ROUTE_POINTS_COUNT }, getRandomRoutePoint);

  getRoutePoints() {
    return this.routePoints;
  }
}
