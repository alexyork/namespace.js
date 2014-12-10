function namespace(ns) {
    if (!ns) return;

    var current = window;
    var nsParts = ns.split(".");

    for (var i = 0; i < nsParts.length; i++) {
        var nsPart = nsParts[i];

        if (!current[nsPart]) {
            current[nsPart] = {};
        }

        current = current[nsPart];
    }
    return current;
}