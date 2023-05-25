
import { registerTool, registerTemplate } from 'dmeditor';
import {toolFeedbackForm, toolCarousel, toolEmbedContent, toolContentGallery, toolContentGrid} from 'dmeditor-digimaker';
import { initTemplates } from "dmeditor/templates/InitTemplates";

registerTool(toolFeedbackForm);
registerTool(toolContentGrid);
registerTool(toolEmbedContent);
registerTool(toolCarousel);
registerTool(toolContentGallery);

initTemplates();