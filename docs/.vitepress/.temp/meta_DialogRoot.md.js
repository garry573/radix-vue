import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"sidebar":true},"headers":[],"relativePath":"meta/DialogRoot.md","filePath":"meta/DialogRoot.md","lastUpdated":1706592413000}');
const _sfc_main = { name: "meta/DialogRoot.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_PropsTable = resolveComponent("PropsTable");
  const _component_EmitsTable = resolveComponent("EmitsTable");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_PropsTable, { data: [
    {
      "name": "defaultOpen",
      "description": "<p>The open state of the dialog when it is initially rendered. Use when you do not need to control its open state.</p>\n",
      "type": "boolean",
      "required": false,
      "default": "false"
    },
    {
      "name": "modal",
      "description": "<p>The modality of the dialog When set to <code>true</code>, <br>\ninteraction with outside elements will be disabled and only dialog content will be visible to screen readers.</p>\n",
      "type": "boolean",
      "required": false,
      "default": "true"
    },
    {
      "name": "open",
      "description": "<p>The controlled open state of the dialog. Can be binded as <code>v-model:open</code>.</p>\n",
      "type": "boolean",
      "required": false
    }
  ] }, null, _parent));
  _push(ssrRenderComponent(_component_EmitsTable, { data: [
    {
      "name": "update:open",
      "description": "<p>Event handler called when the open state of the dialog changes.</p>\n",
      "type": "[value: boolean]"
    }
  ] }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("meta/DialogRoot.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const DialogRoot = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  DialogRoot as default
};
