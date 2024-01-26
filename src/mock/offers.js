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
