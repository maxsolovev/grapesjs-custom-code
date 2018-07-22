import grapesjs from 'grapesjs';
import loadComponents from './components';
import loadBlocks from './blocks';

export default grapesjs.plugins.add('YOUR-PLUGIN-NAME', (editor, opts = {}) => {
  const options = { ...{
    // Object to extend the default custom code properties, eg. `{ name: 'Custom Code', droppable: false, ... }`
    propsCustomCode: {},

    // Initial content of the custom code component
    placeholderContent: '<span>Insert here your custom code</span>',

    // Object to extend the default component's toolbar button for the code, eg. `{ label: '</>', attributes: { title: 'Open custom code' } }`
    // If you pass `false` the button won't be inserted
    toolbarBtnCustomCode: {},

    // Content to show when the custom code contains `<script>`
    placeholderScript: `<div style="pointer-events: none; padding: 10px;">
      <svg viewBox="0 0 24 24" style="height: 30px; vertical-align: middle;">
        <path d="M13 14h-2v-4h2m0 8h-2v-2h2M1 21h22L12 2 1 21z"></path>
        </svg>
      Custom code with <i>&lt;script&gt;</i> can't be rendered on the canvas
    </div>`,
  },  ...opts };

  // Add components
  loadComponents(editor, options);

  // Add blocks
  loadBlocks(editor, options);

  // TODO Remove
  editor.on('load', () => editor.addComponents(`<div style="margin:100px; padding:25px;">Content loaded from the plugin</div>`, { at: 0 }))
});
