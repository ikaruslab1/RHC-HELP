import { createDraggable, utils } from 'animejs';

utils.set('.square', { z: 100 });

createDraggable('.square', {
    x: { mapTo: 'rotateY' },
    y: { mapTo: 'z' },
});