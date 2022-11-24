const ReactDOM = require('react-dom/client')
const {default: App} = require('./components/App')

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <App />
)