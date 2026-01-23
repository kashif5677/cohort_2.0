import box from './app.js'
import circle from './test.js'

let root = ReactDOM.createRoot(document.querySelector("#root"))

const parent = React.createElement('div', null, [box(), circle()])


root.render(parent)

