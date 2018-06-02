import $ from "jquery";
import {log} from "./logger";
import {html} from './assets.urls';

$(() => {
        $('#button1').click(async () => {
            log('button 1 clicked');
            const mod = await import('./button1/controller');
            mod.handle()
        });

        $('#button2').click(async () => {
            log('button 2 clicked');
            const mod = await import('./button2/controller');
            mod.handle();
            log(html);
        });
    }
);

