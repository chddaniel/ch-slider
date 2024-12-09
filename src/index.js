// import './styles.css';

import EmblaCarousel from 'embla-carousel'
import Autoplay from 'embla-carousel-autoplay'

import {
    addThumbBtnsClickHandlers,
    addToggleThumbBtnsActive
} from './thumbs'


(() => {
    const sliders = document.querySelectorAll('.embla');
    if (!sliders.length) return;
    sliders.forEach(rootNode => {

        const viewportNode = rootNode.querySelector('.embla__viewport')
        const isLoop = rootNode.dataset.loop;
        const isAutoPlay = rootNode.dataset.autoplay;

        const options = { loop: isLoop ? true : false, containscroll: false }
        const plugins = []

        if (isAutoPlay) plugins.push(Autoplay());
        const emblaApiMain = EmblaCarousel(viewportNode, options, plugins)

        // Set up next & prev buttons
        if (rootNode.querySelector('.embla__arrows')) {
            // Grab button nodes
            const prevButtonNode = rootNode.querySelector('.embla__prev')
            const nextButtonNode = rootNode.querySelector('.embla__next')
            // Add click listeners
            prevButtonNode.addEventListener('click', emblaApiMain.scrollPrev, false)
            nextButtonNode.addEventListener('click', emblaApiMain.scrollNext, false)
        }

        // Set up thumbs
        if (rootNode.querySelector('.embla-thumbs')) {

            const OPTIONS_THUMBS = {
                containScroll: 'keepSnaps',
                dragFree: true
            }

            const viewportNodeThumbCarousel = document.querySelector(
                '.embla-thumbs__viewport'
            )
            const emblaApiThumb = EmblaCarousel(viewportNodeThumbCarousel, OPTIONS_THUMBS);
            const removeThumbBtnsClickHandlers = addThumbBtnsClickHandlers(
                emblaApiMain,
                emblaApiThumb
            )
            const removeToggleThumbBtnsActive = addToggleThumbBtnsActive(
                emblaApiMain,
                emblaApiThumb
            )

            emblaApiMain
                .on('destroy', removeThumbBtnsClickHandlers)
                .on('destroy', removeToggleThumbBtnsActive)

            emblaApiThumb
                .on('destroy', removeThumbBtnsClickHandlers)
                .on('destroy', removeToggleThumbBtnsActive)

        }
    })
})();
