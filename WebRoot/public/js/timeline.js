$(function(){
	createStoryJS({
        type:       'timeline',
        height:     '550',
        source:     'public/Events.json',
        embed_id:   'my-timeline',
        lang: 'zh-cn',
        css:  'public/css/timeline.css',
        js: 'public/js/timeline-min.js'
    });


});