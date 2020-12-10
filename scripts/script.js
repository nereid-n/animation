document.addEventListener("DOMContentLoaded", function() {
    var lazyImages = [].slice.call(document.querySelectorAll(".img"));
    var lazyTitles = [].slice.call(document.querySelectorAll(".title"));
    var lazyTitlesSmall = [].slice.call(document.querySelectorAll(".title-small"));
    var lazyLabels = [].slice.call(document.querySelectorAll(".labels"));

    if ("IntersectionObserver" in window) {

        let lazyTitlesObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    let lazyImage = entry.target;
                    if (!$(lazyImage).hasClass('done')) {
                        $(lazyImage).addClass('done');
                        $(lazyImage).lettering();
                        let i = 0;
                        let interval = setInterval(function() {
                            let item = $('span', lazyImage)[i];
                            $(item).addClass('span-active');
                            i++;
                            if (i >= $('span', lazyImage).length) {
                                clearInterval(interval);
                            }
                        }, 100);
                    }
                }
            });
        });

        let lazyTitlesSmallObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    let lazyImage = entry.target;
                    if (!$(lazyImage).hasClass('done')) {
                        $(lazyImage).addClass('done');
                        $(lazyImage).lettering('lines');
                        let i = 0;
                        let interval = setInterval(function() {
                            let item = $('span', lazyImage)[i];
                            $(item).addClass('span-active');
                            i++;
                            if (i >= $('span', lazyImage).length) {
                                clearInterval(interval);
                            }
                        }, 500);
                    }
                }
            });
        });

        let lazyLabelsObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    let lazyImage = entry.target;
                    if (!$(lazyImage).hasClass('done')) {
                        $(lazyImage).addClass('done');
                        let i = 0;
                        let interval = setInterval(function() {
                            let item = $('.label .label-bg', lazyImage)[i];
                            let item2 = $('.label span', lazyImage)[i];
                            $(item).addClass('label-bg-active');
                            $(item2).addClass('span-active');
                            i++;
                            if (i >= $('.label .label-bg', lazyImage).length) {
                                clearInterval(interval);
                            }
                        }, 500);
                    }
                }
            });
        });

        let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    let lazyImage = entry.target;
                    lazyImage.classList.add("img-active");
                }
            });
        });

        $(window).on('load', function () {
            $('.container').removeClass('d-none');
            $('.loading').remove();
            lazyTitles.forEach(function(lazyTitle) {
                lazyTitlesObserver.observe(lazyTitle);
            });
            lazyTitlesSmall.forEach(function(lazyTitleSmall) {
                lazyTitlesSmallObserver.observe(lazyTitleSmall);
            });
            lazyLabels.forEach(function(lazyLabel) {
                lazyLabelsObserver.observe(lazyLabel);
            });
            lazyImages.forEach(function(lazyImage) {
                lazyImageObserver.observe(lazyImage);
            });
        });
    }

});