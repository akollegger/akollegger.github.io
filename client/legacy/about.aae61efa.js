import { _ as _inherits, a as _getPrototypeOf, b as _possibleConstructorReturn, c as _classCallCheck, i as init, d as _assertThisInitialized, e as dispatch_dev, S as SvelteComponentDev, s as safe_not_equal, g as space, f as element, t as text, u as query_selector_all, m as detach_dev, l as claim_space, h as claim_element, j as children, k as claim_text, o as add_location, n as attr_dev, p as insert_dev, q as append_dev, r as noop, y as validate_slots } from './client.886afe2a.js';

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file = "src/routes/about.svelte";

function create_fragment(ctx) {
  var t0;
  var h1;
  var t1;
  var t2;
  var div;
  var a;
  var img;
  var img_src_value;
  var block = {
    c: function create() {
      t0 = space();
      h1 = element("h1");
      t1 = text("About ABK");
      t2 = space();
      div = element("div");
      a = element("a");
      img = element("img");
      this.h();
    },
    l: function claim(nodes) {
      var head_nodes = query_selector_all("[data-svelte=\"svelte-1ine71f\"]", document.head);
      head_nodes.forEach(detach_dev);
      t0 = claim_space(nodes);
      h1 = claim_element(nodes, "H1", {});
      var h1_nodes = children(h1);
      t1 = claim_text(h1_nodes, "About ABK");
      h1_nodes.forEach(detach_dev);
      t2 = claim_space(nodes);
      div = claim_element(nodes, "DIV", {});
      var div_nodes = children(div);
      a = claim_element(div_nodes, "A", {
        href: true
      });
      var a_nodes = children(a);
      img = claim_element(a_nodes, "IMG", {
        src: true,
        alt: true,
        height: true,
        width: true
      });
      a_nodes.forEach(detach_dev);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      document.title = "About";
      add_location(h1, file, 4, 0, 52);
      if (img.src !== (img_src_value = "https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg")) attr_dev(img, "src", img_src_value);
      attr_dev(img, "alt", "Andreas Kollegger's DEV Profile");
      attr_dev(img, "height", "30");
      attr_dev(img, "width", "30");
      add_location(img, file, 9, 2, 119);
      attr_dev(a, "href", "https://dev.to/akollegger");
      add_location(a, file, 8, 1, 80);
      add_location(div, file, 7, 0, 73);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      insert_dev(target, h1, anchor);
      append_dev(h1, t1);
      insert_dev(target, t2, anchor);
      insert_dev(target, div, anchor);
      append_dev(div, a);
      append_dev(a, img);
    },
    p: noop,
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(h1);
      if (detaching) detach_dev(t2);
      if (detaching) detach_dev(div);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance($$self, $$props) {
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("About", slots, []);
  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<About> was created with unknown prop '".concat(key, "'"));
  });
  return [];
}

var About = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(About, _SvelteComponentDev);

  var _super = _createSuper(About);

  function About(options) {
    var _this;

    _classCallCheck(this, About);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "About",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  return About;
}(SvelteComponentDev);

export default About;
