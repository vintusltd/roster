$.notify.addStyle('milligram', {
    html: "<div><b><span data-notify-text/></b></div>",
    classes: {
        base: {
            "padding": "1.5rem 3rem",
            "border": "solid 1px",
            "border-radius": "0.5rem",
        },
        success: {
            "border-color": "#269f42",
            "background-color": "#a7e2b3",
            "color": "#19682a"
        },
        error: {
            "border-color": "#cea0a5",
            "background-color": "#ffdce0",
            "color": "#86181d"
        }
    }
});

$.notify.defaults({
    autoHide: false,//true,
    autoHideDelay: 3000, // milliseconds,
    globalPosition: 'bottom left',
    style: 'milligram'
});