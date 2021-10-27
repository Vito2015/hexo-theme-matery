/* global hexo */
// Usage: {% centerquote %} Something {% endcenterquote %}
// Alias: {% cq %} Something {% endcq %}

function quote (args, content) {
    console.log(args)
    return '<blockquote class="' + args.join(' ') + '">' +
        hexo.render.renderSync({text: content, engine: 'markdown'}) +
        '</blockquote>';
}

function cq (args, content) {
    console.log(args)
    args.unshift('center')
    return quote(args, content);
}

hexo.extend.tag.register('quote', quote, {ends: true});
hexo.extend.tag.register('q', quote, {ends: true});
hexo.extend.tag.register('cq', cq, {ends: true});