var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name){
    kittens.push("Ralph")
    return kittens

}

function destructivelyPrependKitten(name){
   kittens.unshift("Bob")
   return kittens
}


function destructivelyRemoveLastKitten(name){
  kittens.pop(1)
  return kittens
}

function destructivelyRemoveFirstKitten(name){
  kittens.shift(1)
  return kittens
}

function appendKitten(name){
  name = [...kittens, "Broom"]
  return name
}

function prependKitten(name){
  name = ["Arnold", ...kittens]
  return name 
}
