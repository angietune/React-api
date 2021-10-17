export const accesskey = '54aaba10eb5f2aa6e77f7549526e8b8d';

export const flickrData = {
    method: 'flickr.photos.search',
    api_key: accesskey,
    sort: 'interestingness-desc',
    per_page: '12',
    license: '4',
    extras: 'url_m',
    format: 'json',
    nojsoncallback: '1',
};

const parameters = new URLSearchParams(flickrData);

const flickrUrl = `https://api.flickr.com/services/rest/?${parameters}`;

export default flickrData;
