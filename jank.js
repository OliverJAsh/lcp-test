console.log("jank script loaded");

const jank = () => {
    console.log("jank start");
    var start = Date.now();
    while (Date.now() - start < 1000) {}
    console.log("jank end");
};

jank();
