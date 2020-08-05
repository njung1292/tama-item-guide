import _ from 'lodash';

const ITEM_LIST = Object.freeze([
  Object.freeze({
    id: "ART_CANVAS",
    displayName: "Art Canvas",
    locations: ["FOOD_TOWN", "GYM", "MAGIC_LAND", "SALON", "STARRY_LAB", "TAMA_DEPA", "TAMA_FARM", "TAMA_HOTEL", "TOY_PARK"],
  }),
  Object.freeze({
    id: "BALL",
    displayName: "Ball",
    locations: [],
  }),
  Object.freeze({
    id: "BINOCULARS",
    displayName: "Binoculars",
    locations: ["TAMA_HOTEL"],
  }),
  Object.freeze({
    id: "COIN_PURSE",
    displayName: "Coin Purse",
    locations: ["FOOD_TOWN", "GYM", "MAGIC_LAND", "SALON", "STARRY_LAB", "TAMA_DEPA", "TAMA_FARM", "TAMA_HOTEL", "TOY_PARK"],
  }),
  Object.freeze({
    id: "DIY_SOBA",
    displayName: "DIY Soba",
    locations: ["FOOD_TOWN"],
  }),
  Object.freeze({
    id: "FLY_CARPET",
    displayName: "Fly Carpet",
    locations: ["MAGIC_LAND"],
  }),
  Object.freeze({
    id: "FLYING_DISC",
    displayName: "Flying Disc",
    locations: ["FOOD_TOWN", "GYM", "MAGIC_LAND", "SALON", "STARRY_LAB", "TAMA_DEPA", "TAMA_FARM", "TAMA_HOTEL", "TOY_PARK"],
  }),
  Object.freeze({
    id: "FORTUNE",
    displayName: "Fortune",
    locations: ["MAGIC_LAND"],
  }),
  Object.freeze({
    id: "GARDEN_KIT",
    displayName: "Garden Kit",
    locations: ["TAMA_FARM"],
  }),
  Object.freeze({
    id: "HAIR_DRYER",
    displayName: "Hair Dryer",
    locations: ["SALON"],
  }),
  Object.freeze({
    id: "HARMONICA",
    displayName: "Harmonica",
    locations: ["FOOD_TOWN", "GYM", "MAGIC_LAND", "SALON", "STARRY_LAB", "TAMA_DEPA", "TAMA_FARM", "TAMA_HOTEL", "TOY_PARK"],
  }),
  Object.freeze({
    id: "MAGAZINE",
    displayName: "Magazine",
    locations: ["FOOD_TOWN", "GYM", "MAGIC_LAND", "SALON", "STARRY_LAB", "TAMA_DEPA", "TAMA_FARM", "TAMA_HOTEL", "TOY_PARK"],
  }),
  Object.freeze({
    id: "MAGIC_SET",
    displayName: "Magic Set",
    locations: ["TOY_PARK"],
  }),
  Object.freeze({
    id: "NO_G_KIT",
    displayName: "No G Kit",
    locations: ["STARRY_LAB"],
  }),
  Object.freeze({
    id: "OVEN",
    displayName: "Oven",
    locations: ["FOOD_TOWN"],
  }),
  Object.freeze({
    id: "PLANT_TOOLS",
    displayName: "Plant Tools",
    locations: ["TAMA_FARM"],
  }),
  Object.freeze({
    id: "RACKET",
    displayName: "Racket",
    locations: ["GYM"],
  }),
  Object.freeze({
    id: "SCOOTER",
    displayName: "Scooter",
    locations: ["TAMA_DEPA"],
  }),
  Object.freeze({
    id: "STAR_ROOM",
    displayName: "Star Room",
    locations: ["STARRY_LAB"],
  }),
  Object.freeze({
    id: "TRAIN_SET",
    displayName: "Train Set",
    locations: ["TOY_PARK"]
  }),
  Object.freeze({
    id: "TREADMILL",
    displayName: "Treadmill",
    locations: ["GYM"],
  }),
  Object.freeze({
    id: "TRUNK",
    displayName: "Trunk",
    locations: ["TAMA_HOTEL"],
  }),
  Object.freeze({
    id: "UNICYCLE",
    displayName: "Unicycle",
    locations: ["FOOD_TOWN", "GYM", "MAGIC_LAND", "SALON", "STARRY_LAB", "TAMA_DEPA", "TAMA_FARM", "TAMA_HOTEL", "TOY_PARK"],
  }),
  Object.freeze({
    id: "VANITY",
    displayName: "Vanity",
    locations: ["SALON"]
  }),
  Object.freeze({
    id: "VR_SET",
    displayName: "VR Set",
    locations: ["TAMA_DEPA"]
  }),
]);

export const ITEMS_BY_ID = _.keyBy(ITEM_LIST, 'id');
export const ITEM_IDS = _.reduce(ITEM_LIST, (accum, item) => {
  accum[item.id] = item.id;
  return accum;
}, {});
