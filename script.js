function openTab(tabName) {
    document.getElementById("html-code").classList.add("hidden");
    document.getElementById("css-code").classList.add("hidden");
    document.getElementById("js-code").classList.add("hidden");

    document.getElementById(tabName + "-code").classList.remove("hidden");
}

function runCode() {
    let html = document.getElementById("html-code").value;
    let css = document.getElementById("css-code").value;
    let js = document.getElementById("js-code").value;

    let output = document.getElementById("output").contentWindow.document;
    output.open();
    output.write(`
        <html>
        <head><style>${css}</style></head>
        <body>${html}<script>${js}<\/script></body>
        </html>
    `);
    output.close();
}
