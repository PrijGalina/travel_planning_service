import { getRandomArrayElement, getRandomDictionaryElement, generateRandomId, getDateTimeData, generateRandomPrice } from '../utils';

export const WAYPOINT_TYPES = {
  Taxi: 'taxi',
  Bus: 'bus',
  Train: 'train',
  Ship: 'ship',
  Drive: 'drive',
  Flight: 'flight',
  CheckIn: 'checkIn',
  Sightseeing: 'sightseeing',
  Restaurant: 'restaurant'
};

export const DESTINATIONS_ARRAY = [
  {
    id: 'cfe416cq-10xa-ye10-8077-2fs9a01edcab',
    description: 'Chamonix, is a beautiful city, a true asian pearl, with crowded streets.',
    name: 'Chamonix',
    pictures: [
      {
        src: 'http://picsum.photos/300/200?r=0.0762563005163317',
        description: 'Chamonix parliament building'
      }
    ]
  },
  {
    id: '0efd952f-c018-e404-48e5-f414243faae1',
    description: 'Geneva is a city in Switzerland that lies at the southern tip of expansive Lac Léman (Lake Geneva).',
    name: 'Geneva',
    pictures: [
      {
        src: 'http://picsum.photos/300/200?r=0.0762563005163317',
        description: 'Geneva'
      }
    ]
  },
  {
    id: '99ad4396-1cbb-24d3-bd7a-60b625184a17',
    description: 'Amsterdam',
    name: 'Amsterdam',
    pictures: [
      {
        src: 'http://picsum.photos/300/200?r=0.0762563005163317',
        description: 'Amsterdam'
      }
    ]
  },
  {
    id: '89ec6928-f3b0-5d1d-6499-f1f98e397d55',
    description: 'Paris',
    name: 'Paris',
    pictures: [
      {
        src: 'http://picsum.photos/300/200?r=0.0762563005163317',
        description: 'Paris'
      }
    ]
  },
  {
    id: 'f6c60b68-4c0e-0ae2-ee72-3885fd1bd309',
    description: 'Oslo',
    name: 'Oslo',
    pictures: [
      {
        src: 'http://picsum.photos/300/200?r=0.0762563005163317',
        description: 'Oslo'
      }
    ]
  },
  {
    id: 'a74d8613-1b27-2ee1-dcd2-fcfffef2294c',
    description: 'Belgrade',
    name: 'Belgrade',
    pictures: [
      {
        src: 'http://picsum.photos/300/200?r=0.0762563005163317',
        description: 'Belgrade'
      }
    ]
  }
];

export const DESTINATIONS = new Map();
DESTINATIONS_ARRAY.map((element) => {
  DESTINATIONS.set(element.id, element);
});

export const OFFERS_ARRAY = [
  {
    id: 'b4c3e4e6-9053-42ce-b747-e281314baa31',
    title: 'Upgrade to a business class',
    price: 190
  },
  {
    id: 'a1f8d2b9-7c4a-4e6d-8f12-6b3e7a8c9d0f',
    title: 'Choose the radio station',
    price: 30
  },
  {
    id: 'c7a2b1d9-0f4e-3c2b-1a8d-9e4f7c3a2b1',
    title: 'Choose temperature',
    price: 170
  },
  {
    id: 'd2e9c4a7-1f3c-7b8a-5e2d-0a1b9c8d7e6',
    title: 'Drive quickly, Im in a hurry',
    price: 100
  },
  {
    id: '9f0e7d8c-6b4a-1e3c-2d9f-8a7c0b1d2e3',
    title: 'Drive slowly',
    price: 110
  }
];

export const OFFERS = new Map();
OFFERS_ARRAY.map((element) => {
  OFFERS.set(element.id, element);
});

export function getRandomMockWaypoint() {
  const result = [];
  for (let i = 0; i < 8; i++) {
    const dataTime = getDateTimeData(1);
    result.push({
      id: generateRandomId(),
      type: getRandomDictionaryElement(WAYPOINT_TYPES),
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

export function getRandomWaypoint() {
  return getRandomArrayElement(getRandomMockWaypoint());
}
