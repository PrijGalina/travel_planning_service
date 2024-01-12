import { render } from './render.js';
import Filter from './view/filter';
import NewEventBtn from './view/new-event-btn';
import TripInfo from './view/tripInfo';
import BoarderPresenter from './presenter/boarderPresenter/index.js';
import WaypointsModel from './model/waypoints-model.js';

const waypointsModel = new WaypointsModel();
const siteMainElement = document.querySelector('.page-main');
const headerElement = document.querySelector('.page-header');
const tripMainElement = headerElement.querySelector('.trip-main');
const filterControlsElement = tripMainElement.querySelector('.trip-controls__filters');
const contentSectionElement = siteMainElement.querySelector('.trip-events');
const boarderPresenter = new BoarderPresenter({ boardContainer: contentSectionElement, waypointsModel });

render(new NewEventBtn(), tripMainElement);
render(new TripInfo(), tripMainElement, 'AFTERBEGIN');
render(new Filter(), filterControlsElement);

boarderPresenter.init();
