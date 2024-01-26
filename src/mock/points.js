import { ROUTE_POINT_TYPES, TOTAL_ROUTE_POINTS_TO_GENERATE } from './../const';
import { getRandomArrayElement, getRandomDictionaryElement, generateRandomId, getDateTimeData, generateRandomPrice } from '../utils';
import { DESTINATIONS_ARRAY } from './destinations';
import { OFFERS_ARRAY } from './offers';

function generateMockRoutePoints() {
  const result = [];
  for (let i = 0; i < TOTAL_ROUTE_POINTS_TO_GENERATE; i++) {
    const dataTime = getDateTimeData(1);
    result.push({
      id: generateRandomId(),
      type: getRandomDictionaryElement(ROUTE_POINT_TYPES),
      destination: getRandomArrayElement(DESTINATIONS_ARRAY).id,
      dateFrom: dataTime[0][0],
      dateTo: dataTime[0][1],
      basePrice: generateRandomPrice(),
      offers: [getRandomArrayElement(OFFERS_ARRAY).id],
      isFavorite: getRandomArrayElement([true, false])
    });
  }
  return result;
}

export function getRandomRoutePoint() {
  return getRandomArrayElement(generateMockRoutePoints());
}
