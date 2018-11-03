var m = require("mithril")

module.exports = {
    text:'',
    view: function(vnode) {
        return m("main.layout", [
            m("nav.menu", [
                m("a[href='/list']", {oncreate: m.route.link}, "Users"),
                m('br'),
                m('input[type=text]', {
                    oninput: m.withAttr("value", function(value) {vnode.state.text = value})
                }),
                m('label','Search User: '),
                m('span',vnode.state.text)
            ]),
            m("section", vnode.children)
        ])
    }
}