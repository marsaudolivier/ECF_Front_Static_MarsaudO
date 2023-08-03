var snapSlider = document.getElementById('slider-snap');

noUiSlider.create(snapSlider, {
    start: [0,10000],
    snap: true,
    connect: true,
    range: {
        'min': 0,
        '10%': 2500,
        '20%': 5000,
        '30%': 7500,
        '40%': 10000,
        '50%': 12500,
        '60%': 15000,
        '80%': 17500,
        '90%': 20000,
        'max': 22500
    }
});
var snapValues = [
    document.getElementById('slider-snap-value-lower'),
    document.getElementById('slider-snap-value-upper')
];

snapSlider.noUiSlider.on('update', function (values, handle) {
    snapValues[handle].innerHTML = values[handle] + '€';
});