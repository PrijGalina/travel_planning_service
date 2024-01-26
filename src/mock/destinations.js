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
