const PokemonsAPI =
  "https://gamepress.gg/sites/default/files/aggregatedjson/pokemon-data-full-en-PoGO.json";
const MovesAPI =
  "https://gamepress.gg/sites/default/files/aggregatedjson/move-data-full-PoGO.json";

const PokemonTypeIcon = {
  bug: require("../../assets/images/type-bug.png"),
  dark: require("../../assets/images/type-dark.png"),
  dragon: require("../../assets/images/type-dragon.png"),
  electric: require("../../assets/images/type-electric.png"),
  fairy: require("../../assets/images/type-fairy.png"),
  fighting: require("../../assets/images/type-fighting.png"),
  fire: require("../../assets/images/type-fire.png"),
  flying: require("../../assets/images/type-flying.png"),
  ghost: require("../../assets/images/type-ghost.png"),
  grass: require("../../assets/images/type-grass.png"),
  ground: require("../../assets/images/type-ground.png"),
  ice: require("../../assets/images/type-ice.png"),
  normal: require("../../assets/images/type-normal.png"),
  poison: require("../../assets/images/type-poison.png"),
  psychic: require("../../assets/images/type-psychic.png"),
  rock: require("../../assets/images/type-rock.png"),
  steel: require("../../assets/images/type-steel.png"),
  water: require("../../assets/images/type-water.png"),
  default: require("../../assets/images/type-normal.png"),
};

const BackgroundColor = "#559EDF";

export { PokemonsAPI, MovesAPI, PokemonTypeIcon, BackgroundColor };