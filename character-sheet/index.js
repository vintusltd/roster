const {ipcRenderer} = require('electron');

$(function() {
    function getFormData(formElement) {
        let array = $(formElement).serializeArray();
        let obj = {};

        for (let i = 0; i < array.length; i++){
            obj[array[i]['name']] = array[i]['value'];
        }

        return obj;
    }

    $('#overview-form').submit(e => {
        e.preventDefault();

        let overviewData = {
            overview: getFormData('#overview-form')
        }

        ipcRenderer.once('save-complete', (event, args) => {
            console.log('save complete!');

            $.notify('Save complete!', 'success');
        });

        ipcRenderer.send('save-component', overviewData);
    });
});