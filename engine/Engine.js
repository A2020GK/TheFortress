import { device } from "device.js";
class Engine {

    constructor(canvas, loop, render) {
        this.canvas = canvas;
        this.loop = loop;
        this.render = render;

        this.ctx=canvas.getContext("2d");
        if(device.mobile) {
            canvas.requestFullscreen();
        }
    }


}

export default Engine;