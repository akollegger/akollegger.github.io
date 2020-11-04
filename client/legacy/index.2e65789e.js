import { _ as _inherits, a as _getPrototypeOf, b as _possibleConstructorReturn, c as _classCallCheck, i as init, d as _assertThisInitialized, e as dispatch_dev, S as SvelteComponentDev, s as safe_not_equal, f as element, t as text, g as space, h as claim_element, j as children, k as claim_text, l as detach_dev, m as claim_space, n as attr_dev, o as add_location, p as insert_dev, q as append_dev, r as create_bidirectional_transition, u as query_selector_all, v as listen_dev, w as _slicedToArray, x as transition_in, y as transition_out, z as check_outros, A as validate_slots, B as add_render_callback, C as group_outros } from './client.bd9a9cfd.js';

function cubicOut(t) {
  var f = t - 1.0;
  return f * f * f + 1.0;
}

function slide(node, _ref4) {
  var _ref4$delay = _ref4.delay,
      delay = _ref4$delay === void 0 ? 0 : _ref4$delay,
      _ref4$duration = _ref4.duration,
      duration = _ref4$duration === void 0 ? 400 : _ref4$duration,
      _ref4$easing = _ref4.easing,
      easing = _ref4$easing === void 0 ? cubicOut : _ref4$easing;
  var style = getComputedStyle(node);
  var opacity = +style.opacity;
  var height = parseFloat(style.height);
  var padding_top = parseFloat(style.paddingTop);
  var padding_bottom = parseFloat(style.paddingBottom);
  var margin_top = parseFloat(style.marginTop);
  var margin_bottom = parseFloat(style.marginBottom);
  var border_top_width = parseFloat(style.borderTopWidth);
  var border_bottom_width = parseFloat(style.borderBottomWidth);
  return {
    delay: delay,
    duration: duration,
    easing: easing,
    css: function css(t) {
      return 'overflow: hidden;' + "opacity: ".concat(Math.min(t * 20, 1) * opacity, ";") + "height: ".concat(t * height, "px;") + "padding-top: ".concat(t * padding_top, "px;") + "padding-bottom: ".concat(t * padding_bottom, "px;") + "margin-top: ".concat(t * margin_top, "px;") + "margin-bottom: ".concat(t * margin_bottom, "px;") + "border-top-width: ".concat(t * border_top_width, "px;") + "border-bottom-width: ".concat(t * border_bottom_width, "px;");
    }
  };
}

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file = "src/routes/index.svelte"; // (77:2) {#if show}

function create_if_block(ctx) {
  var div;
  var h2;
  var t0;
  var t1;
  var img;
  var img_src_value;
  var div_transition;
  var current;
  var block = {
    c: function create() {
      div = element("div");
      h2 = element("h2");
      t0 = text("Great success!");
      t1 = space();
      img = element("img");
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", {
        class: true
      });
      var div_nodes = children(div);
      h2 = claim_element(div_nodes, "H2", {
        class: true
      });
      var h2_nodes = children(h2);
      t0 = claim_text(h2_nodes, "Great success!");
      h2_nodes.forEach(detach_dev);
      t1 = claim_space(div_nodes);
      img = claim_element(div_nodes, "IMG", {
        class: true,
        src: true,
        alt: true
      });
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(h2, "class", "text-7xl text-gray-600 mb-10 uppercase font-bold");
      add_location(h2, file, 78, 6, 1891);
      attr_dev(img, "class", "min-w-full");
      if (img.src !== (img_src_value = "success.jpg")) attr_dev(img, "src", img_src_value);
      attr_dev(img, "alt", "wovaweewa!");
      add_location(img, file, 81, 6, 1994);
      attr_dev(div, "class", "text-center bg-gray-200 p-20");
      add_location(div, file, 77, 4, 1819);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      append_dev(div, h2);
      append_dev(h2, t0);
      append_dev(div, t1);
      append_dev(div, img);
      current = true;
    },
    i: function intro(local) {
      if (current) return;

      if (local) {
        add_render_callback(function () {
          if (!div_transition) div_transition = create_bidirectional_transition(div, slide, {}, true);
          div_transition.run(1);
        });
      }

      current = true;
    },
    o: function outro(local) {
      if (local) {
        if (!div_transition) div_transition = create_bidirectional_transition(div, slide, {}, false);
        div_transition.run(0);
      }

      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(div);
      if (detaching && div_transition) div_transition.end();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block.name,
    type: "if",
    source: "(77:2) {#if show}",
    ctx: ctx
  });
  return block;
}

function create_fragment(ctx) {
  var t0;
  var div1;
  var div0;
  var h2;
  var t1;
  var t2;
  var p0;
  var t3;
  var strong0;
  var t4;
  var t5;
  var strong1;
  var t6;
  var t7;
  var p1;
  var t8;
  var strong2;
  var t9;
  var t10;
  var strong3;
  var t11;
  var t12;
  var strong4;
  var t13;
  var t14;
  var t15;
  var p2;
  var t16;
  var a0;
  var t17;
  var t18;
  var p3;
  var t19;
  var t20;
  var p4;
  var a1;
  var t21;
  var t22;
  var t23;
  var button;
  var t24;
  var mounted;
  var dispose;
  var if_block =
  /*show*/
  ctx[0] && create_if_block(ctx);
  var block = {
    c: function create() {
      t0 = space();
      div1 = element("div");
      div0 = element("div");
      h2 = element("h2");
      t1 = text("Sapper Boilerplate");
      t2 = space();
      p0 = element("p");
      t3 = text("with\n      ");
      strong0 = element("strong");
      t4 = text("PostCSS");
      t5 = text("\n      and\n      ");
      strong1 = element("strong");
      t6 = text("Tailwind CSS");
      t7 = space();
      p1 = element("p");
      t8 = text("This is a working example of a\n    ");
      strong2 = element("strong");
      t9 = text("Sapper");
      t10 = text("\n    app with the easiest\n    ");
      strong3 = element("strong");
      t11 = text("PostCSS");
      t12 = text("\n    +\n    ");
      strong4 = element("strong");
      t13 = text("Tailwind CSS");
      t14 = text("\n    setup.");
      t15 = space();
      p2 = element("p");
      t16 = text("You can find the code at\n    ");
      a0 = element("a");
      t17 = text("github.com/codechips/sapper-with-postcss-and-tailwind");
      t18 = space();
      p3 = element("p");
      t19 = text("Read the blog post if you want to know all the juicy details 🍊");
      t20 = space();
      p4 = element("p");
      a1 = element("a");
      t21 = text("Solid Sapper setup with PostCSS and Tailwind");
      t22 = space();
      if (if_block) if_block.c();
      t23 = space();
      button = element("button");
      t24 = text("don't press this button.\n    seriously.");
      this.h();
    },
    l: function claim(nodes) {
      var head_nodes = query_selector_all("[data-svelte=\"svelte-1hxgo4w\"]", document.head);
      head_nodes.forEach(detach_dev);
      t0 = claim_space(nodes);
      div1 = claim_element(nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", {});
      var div0_nodes = children(div0);
      h2 = claim_element(div0_nodes, "H2", {
        class: true
      });
      var h2_nodes = children(h2);
      t1 = claim_text(h2_nodes, "Sapper Boilerplate");
      h2_nodes.forEach(detach_dev);
      t2 = claim_space(div0_nodes);
      p0 = claim_element(div0_nodes, "P", {
        class: true
      });
      var p0_nodes = children(p0);
      t3 = claim_text(p0_nodes, "with\n      ");
      strong0 = claim_element(p0_nodes, "STRONG", {});
      var strong0_nodes = children(strong0);
      t4 = claim_text(strong0_nodes, "PostCSS");
      strong0_nodes.forEach(detach_dev);
      t5 = claim_text(p0_nodes, "\n      and\n      ");
      strong1 = claim_element(p0_nodes, "STRONG", {});
      var strong1_nodes = children(strong1);
      t6 = claim_text(strong1_nodes, "Tailwind CSS");
      strong1_nodes.forEach(detach_dev);
      p0_nodes.forEach(detach_dev);
      div0_nodes.forEach(detach_dev);
      t7 = claim_space(div1_nodes);
      p1 = claim_element(div1_nodes, "P", {
        class: true
      });
      var p1_nodes = children(p1);
      t8 = claim_text(p1_nodes, "This is a working example of a\n    ");
      strong2 = claim_element(p1_nodes, "STRONG", {});
      var strong2_nodes = children(strong2);
      t9 = claim_text(strong2_nodes, "Sapper");
      strong2_nodes.forEach(detach_dev);
      t10 = claim_text(p1_nodes, "\n    app with the easiest\n    ");
      strong3 = claim_element(p1_nodes, "STRONG", {});
      var strong3_nodes = children(strong3);
      t11 = claim_text(strong3_nodes, "PostCSS");
      strong3_nodes.forEach(detach_dev);
      t12 = claim_text(p1_nodes, "\n    +\n    ");
      strong4 = claim_element(p1_nodes, "STRONG", {});
      var strong4_nodes = children(strong4);
      t13 = claim_text(strong4_nodes, "Tailwind CSS");
      strong4_nodes.forEach(detach_dev);
      t14 = claim_text(p1_nodes, "\n    setup.");
      p1_nodes.forEach(detach_dev);
      t15 = claim_space(div1_nodes);
      p2 = claim_element(div1_nodes, "P", {});
      var p2_nodes = children(p2);
      t16 = claim_text(p2_nodes, "You can find the code at\n    ");
      a0 = claim_element(p2_nodes, "A", {
        href: true
      });
      var a0_nodes = children(a0);
      t17 = claim_text(a0_nodes, "github.com/codechips/sapper-with-postcss-and-tailwind");
      a0_nodes.forEach(detach_dev);
      p2_nodes.forEach(detach_dev);
      t18 = claim_space(div1_nodes);
      p3 = claim_element(div1_nodes, "P", {});
      var p3_nodes = children(p3);
      t19 = claim_text(p3_nodes, "Read the blog post if you want to know all the juicy details 🍊");
      p3_nodes.forEach(detach_dev);
      t20 = claim_space(div1_nodes);
      p4 = claim_element(div1_nodes, "P", {});
      var p4_nodes = children(p4);
      a1 = claim_element(p4_nodes, "A", {
        class: true,
        href: true
      });
      var a1_nodes = children(a1);
      t21 = claim_text(a1_nodes, "Solid Sapper setup with PostCSS and Tailwind");
      a1_nodes.forEach(detach_dev);
      p4_nodes.forEach(detach_dev);
      t22 = claim_space(div1_nodes);
      if (if_block) if_block.l(div1_nodes);
      t23 = claim_space(div1_nodes);
      button = claim_element(div1_nodes, "BUTTON", {
        class: true
      });
      var button_nodes = children(button);
      t24 = claim_text(button_nodes, "don't press this button.\n    seriously.");
      button_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      document.title = "Sapper with PostCSS and Tailwind";
      attr_dev(h2, "class", "text-8xl font-semibold");
      add_location(h2, file, 45, 4, 952);
      add_location(strong0, file, 48, 6, 1058);
      add_location(strong1, file, 50, 6, 1099);
      attr_dev(p0, "class", "text-5xl mt-4");
      add_location(p0, file, 46, 4, 1015);
      add_location(div0, file, 44, 2, 942);
      add_location(strong2, file, 55, 4, 1208);
      add_location(strong3, file, 57, 4, 1261);
      add_location(strong4, file, 59, 4, 1296);
      attr_dev(p1, "class", "text-lg");
      add_location(p1, file, 53, 2, 1149);
      attr_dev(a0, "href", "https://github.com/codechips/sapper-with-postcss-and-tailwind");
      add_location(a0, file, 64, 4, 1383);
      add_location(p2, file, 62, 2, 1346);
      add_location(p3, file, 69, 2, 1538);
      attr_dev(a1, "class", "font-semibold text-2xl text-blue-500");
      attr_dev(a1, "href", "https://codechips.me/sapper-with-postcss-and-tailwind/");
      add_location(a1, file, 71, 4, 1619);
      add_location(p4, file, 70, 2, 1611);
      attr_dev(button, "class", "btn svelte-1kwcty1");
      add_location(button, file, 84, 2, 2077);
      attr_dev(div1, "class", "space-y-8");
      add_location(div1, file, 43, 0, 916);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      insert_dev(target, div1, anchor);
      append_dev(div1, div0);
      append_dev(div0, h2);
      append_dev(h2, t1);
      append_dev(div0, t2);
      append_dev(div0, p0);
      append_dev(p0, t3);
      append_dev(p0, strong0);
      append_dev(strong0, t4);
      append_dev(p0, t5);
      append_dev(p0, strong1);
      append_dev(strong1, t6);
      append_dev(div1, t7);
      append_dev(div1, p1);
      append_dev(p1, t8);
      append_dev(p1, strong2);
      append_dev(strong2, t9);
      append_dev(p1, t10);
      append_dev(p1, strong3);
      append_dev(strong3, t11);
      append_dev(p1, t12);
      append_dev(p1, strong4);
      append_dev(strong4, t13);
      append_dev(p1, t14);
      append_dev(div1, t15);
      append_dev(div1, p2);
      append_dev(p2, t16);
      append_dev(p2, a0);
      append_dev(a0, t17);
      append_dev(div1, t18);
      append_dev(div1, p3);
      append_dev(p3, t19);
      append_dev(div1, t20);
      append_dev(div1, p4);
      append_dev(p4, a1);
      append_dev(a1, t21);
      append_dev(div1, t22);
      if (if_block) if_block.m(div1, null);
      append_dev(div1, t23);
      append_dev(div1, button);
      append_dev(button, t24);

      if (!mounted) {
        dispose = listen_dev(button, "click",
        /*click_handler*/
        ctx[1], false, false, false);
        mounted = true;
      }
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (
      /*show*/
      ctx[0]) {
        if (if_block) {
          if (dirty &
          /*show*/
          1) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block(ctx);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(div1, t23);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, function () {
          if_block = null;
        });
        check_outros();
      }
    },
    i: function intro(local) {
      transition_in(if_block);
    },
    o: function outro(local) {
      transition_out(if_block);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(div1);
      if (if_block) if_block.d();
      mounted = false;
      dispose();
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

function instance($$self, $$props, $$invalidate) {
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("Routes", slots, []);
  var show = false;
  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Routes> was created with unknown prop '".concat(key, "'"));
  });

  var click_handler = function click_handler() {
    return $$invalidate(0, show = !show);
  };

  $$self.$capture_state = function () {
    return {
      slide: slide,
      show: show
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("show" in $$props) $$invalidate(0, show = $$props.show);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [show, click_handler];
}

var Routes = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Routes, _SvelteComponentDev);

  var _super = _createSuper(Routes);

  function Routes(options) {
    var _this;

    _classCallCheck(this, Routes);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Routes",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  return Routes;
}(SvelteComponentDev);

export default Routes;
