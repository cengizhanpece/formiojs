import * as Formio  from '@formio/js'
import 'jquery/src/jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";

window.manager = Formio.Formio;

Formio.Formio.builder(document.getElementById("builder"), {}, {});
const form = new Formio.Formio('https://exampleapp.form.io/renderertest');

form.loadForm().then(function(form) {
  
});

