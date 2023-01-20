import { defineComponent as r, ref as l, openBlock as u, createElementBlock as p, Fragment as a, createElementVNode as c, toDisplayString as _ } from "vue";
const d = { class: "card" }, i = /* @__PURE__ */ r({
  __name: "Module",
  props: {
    msg: { type: String }
  },
  setup(t) {
    const e = l(0);
    return (n, o) => (u(), p(a, null, [
      c("h1", null, _(t.msg), 1),
      c("div", d, [
        c("button", {
          type: "button",
          onClick: o[0] || (o[0] = (s) => e.value++)
        }, "count is " + _(e.value), 1)
      ])
    ], 64));
  }
});
const m = (t, e) => {
  const n = t.__vccOpts || t;
  for (const [o, s] of e)
    n[o] = s;
  return n;
}, g = /* @__PURE__ */ m(i, [["__scopeId", "data-v-3cb97861"]]);
export {
  g as Module
};
