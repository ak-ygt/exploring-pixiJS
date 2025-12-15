import { Application, getFontFamilyName, Graphics, Text, TextStyle, Sprite, Assets } from "pixi.js";

(async () => {
    const app = new Application();
    await app.init({
        resizeTo: window,
        backgroundAlpha: 1,
    });
    app.renderer.background.alpha = 1;
    app.canvas.style.position = 'absolute';

    const rectangle = new Graphics()
    .rect(200, 200, 100, 150)
    .fill({
        color: 0xffea00,
        alpha: 0.9,
    }).stroke({
        width: 8,
        color: 0x00ff00,
    });
    app.stage.addChild(rectangle);

    const star = new Graphics()
    .star(250, 500, 12, 80, 2)
    .fill({
        color: 0xffffff, alpha: 0.9
    });
    app.stage.addChild(star);

    const textStyle = new TextStyle({
        fontFamily: 'Helvetica',
        fontSize: 30,
        fill: '#ffffff',
        stroke: '#000000',
        strokeThickness: 3,
        dropShadow: {
            color: '#fefefe',
            blur: 5,
            distance: 4,
            angle: Math.PI / 4,
            alpha: 0.5,
        },
        });

    const text = new Text({
        text: 'Hello World',
        style: textStyle,
    });
    app.stage.addChild(text);



    document.body.appendChild(app.canvas);
}) ();