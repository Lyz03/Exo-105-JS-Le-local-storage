const storage = window.localStorage;
const result = document.getElementById('result');

// part 1
storage.setItem("key1", "18");
storage.setItem("key2","Material");
storage.setItem("key3", "Black");

// part 2
function printTheme(container, key1, key2, key3) {
    container.innerText += "Thème " + key3 + ", type " + key2 + " et police de caractères " + key1 + " px" + "\n";
}

// part 3
printTheme(result, storage.getItem("key1"), storage.getItem("key2"), storage.getItem("key3"));

// part 4
storage.setItem("key1", "nouvel Valeur");
storage.setItem("key2","nouvel Valeur");
storage.setItem("key3", "nouvel Valeur");

// part 5
printTheme(result, storage.getItem("key1"), storage.getItem("key2"), storage.getItem("key3"));