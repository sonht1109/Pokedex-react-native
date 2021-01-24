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

const PokemonTypeIconColor = {
  bug: "#a3c332",
  dark: "#626472",
  dragon: "#0870c8",
  electric: "#f4db4f",
  fairy: "#ec94e4",
  fighting: "#d84458",
  fire: "#fca44c",
  flying: "#98b1e3",
  ghost: "#616dbc",
  grass: "#5cbc59",
  ground: "#da7f4f",
  ice: "#7cd4c4",
  normal: "#9a9ea1",
  poison: "#b064cb",
  psychic: "#fc948b",
  rock: "#ccbd8c",
  steel: "#548fa1",
  water: "#519add",
  default: "#9a9ea1",
}

const BackgroundColor = "#559EDF";

export { PokemonsAPI, MovesAPI, PokemonTypeIcon, BackgroundColor, PokemonTypeIconColor };