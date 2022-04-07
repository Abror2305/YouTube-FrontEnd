const host = "http://192.168.1.7:5000"

function createElements(...elements) {
    return elements.map(el => document.createElement(el))
}