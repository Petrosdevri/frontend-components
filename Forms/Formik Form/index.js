'use strict'

const e = React.createElement;

class FormikForm extends React.Component {
    constructor(props) {
        super(props);
    }
}

const domContainer = document.querySelector('#formik-form');
const root = ReactDOM.createRoot(domContainer);
root.render(e(FormikForm));