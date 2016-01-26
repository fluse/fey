var galleryExample = [{
    image: '/public/destination/au/gallery/melbourne.jpg',
    grid: 'grd-3-1',
    title: 'Melbourne',
    url: 'melbourne'
},{
    image: '/public/destination/au/gallery/sydney.jpg',
    grid: 'grd-3-2',
    title: 'Sydney',
    url: 'sydney'
},{
    image: '/public/destination/au/gallery/adelaide.jpg',
    grid: 'grd-3-2',
    title: 'Adelaide',
    url: 'adelaide'
},{
    image: '/public/destination/au/gallery/brisbane.jpg',
    grid: 'grd-3-1',
    title: 'Brisbane',
    url: 'brisbane'
}];
var sliderExample = [{
    image: '/public/destination/au/slider/slider_03.jpg',
    title: ''
}, {
    image: '/public/destination/au/slider/slider_02.jpg',
    title: ''
}, {
    image: '/public/destination/au/slider/slider_01.jpg',
    title: ''
}];
var destinations = {
    australien: {
        country: 'Australien',
        moodImage: 'destination/au/stage/stage_04.jpg',
        moodVideo: false,
        gallery: galleryExample,
        slider: sliderExample
    },
    deutschland: {
        country: 'Deutschland',
        moodImage: false,
        moodVideo: 'destination/au/australien.mp4',
        gallery: galleryExample,
        slider: sliderExample
    },
    neuseeland: {
        country: 'Neuseeland',
        moodImage: 'destination/nz/stage_01.jpg',
        moodVideo: false
    }
};

module.exports = {

    get(destination) {
        if (destinations.hasOwnProperty(destination)) {
            return destinations[destination];
        }

        return destinations.australien;
    }

};
