import './controller';
import $ from 'jquery';
import moment from 'moment';

export const handle = () => {
    $('body').append(`<p>${moment.now()}</p>`);
};

