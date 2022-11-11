import { IPlugin } from "../../types/plugin";

console.log(window.location.hostname);
const plugins: Record<string, IPlugin> = {
    dashboardDescription: {
        name: "Dashboard Description",
        url: "",
        image: "/images/pluginPreview/dashboard-description.png",
        description:
            "Push your dashboard to the next level with enhanced descriptions. Utilize the full power of Markdown to add headers, text formatting, links, or pictures. Or even create conversational insights with a direct display of metric values.",
        parameters: "",
    },
    themeEditor: {
        name: "Theme Editor",
        url: "https://gdc-ms-pub.s3.amazonaws.com/AIDA5QKRHPNLYV746FYP3_gdc-ms-pub_gooddata-internal-training/plugins/theme_editor/v106/dist/dashboardPlugin/dp_theme_editor.js",
        image: "/images/pluginPreview/theme-editor.png",
        description:
            "Company logo, brand identity, or colors. These items speak of your company like nothing else. Whitelabel your dashboards through this plugin.",
        parameters: "",
    },
    insightGroups: {
        name: "Insight Groups",
        url: "",
        image: "/images/pluginPreview/insight-groups.png",
        description:
            "Make sure your dashboard is clear and easy to read. Use this plugin to group similar insights, and switch between them easily.",
        parameters: "",
        configMd:
            "# Help\n" +
            "\n" +
            "Create a group for each group of insights. The group name can be random, as it is not visible anywhere.\n" +
            "\n" +
            "How to find the <code>insightIdentifier</code> using GoodData Extension:\n" +
            "\n" +
            "1.  Navigate to the dashboard where the plugin will be used\n" +
            "2.  In the extension, go to the tab OBJECT and select Object - this will redirect you to the grey pages.\n" +
            "3.  Scroll down to the <code>widgets</code> section and click the selected widget\n" +
            `   ![insight groups plugin](/images/pluginMd/insight_groups_plugin_1.png)\n` +
            "4. Click the <code>visualization</code> which represents the insight inside the widget\n" +
            `   ![insight groups plugin](/images/pluginMd/insight_groups_plugin_2.png)\n` +
            "5. Scroll down to the <code>meta</code> section and copy the <code>identifier</code>\n" +
            `   ![insight groups plugin](/images/pluginMd/insight_groups_plugin_3.png)\n`,
    },
    svgImageChart: {
        name: "Svg Image Chart",
        url: "",
        image: "/images/pluginPreview/svg-image-chart.png",
        description:
            "Do you need a custom heatmap or perhaps a body parts chart? With this plugin, you can upload any CSV and use it to create your custom chart to visualize almost anything.",
        parameters: "",
        configMd:
            "### Chart Configuration object\n" +
            "\n" +
            "-   `url`: MANDATORY, a link to a publicly accessible SVG image.\n" +
            "-   `colors`: MANDATORY, an array of colors. At least one color has to be defined. Colors can be defined in any of the standard formats: rgb, hex, string... including transparency (rgba, hex code with alpha..).\n" +
            "    -   Colors array:\n" +
            "        -   the first mandatory color is used for **SVG Areas background**.\n" +
            "        -   the second is **data labels fill color**\n" +
            "        -   the third is **data labels outline**(stroke) color.\n" +
            "    -   if data label colors are omitted, black/white fill/outline is used according to the lightness of the background color.\n" +
            "-   `areaMapping`: OPTIONAL, key-value pairs of Data Point IDs (first insight table attribute values) as keys, and SVG Area IDs as values. If omitted, the SVG Areas will be matched directly with the Data point IDs. The relation between Data Points and SVG Area IDs is `1-n`, i.e. there can be multiple SVG Areas with the same ID that will display the same data.\n" +
            "-   `dataLabels`: OPTIONAL, if set to false, data labels will not be displayed. Set to `true` by default.\n" +
            "-   `filterAttributeId`: OPTIONAL: identifier of an attribute filter. The filter should be present in the dashboard, and the same attribute in the insight table. If provided with a valid attribute identifier, areas in SVG become clickable and filter the dashboard on click.\n" +
            "\n" +
            "Below is an example of plugin parameters with a full chart config with all fields defined:\n" +
            "\n" +
            "\t{\n" +
            "\t    acFiQOCuzAL4: {\n" +
            '\t        url: "https://gdc-ms-pub.s3.amazonaws.com/my-s3/Plugins/SvgImageChart/Face.svg",\n' +
            "\t        dataLabels: false,\n" +
            '\t        colors: ["#011C50BB"],\n' +
            '\t        filterAttributeId: "label.bodilylocation.bodilylocationname",\n' +
            "\t        areaMapping: {\n" +
            '\t            A1: "Eye",\n' +
            '\t            A2: "Ear",\n' +
            '\t            A3: "Face",\n' +
            "\t        },\n" +
            "\t    },\n" +
            "\t}",
    },
    tableWithImages: {
        name: "Table with Images",
        url: "",
        image: "/images/pluginPreview/table-with-images.png",
        description:
            "Tables can be a bit boring with all that text. Use this plugin to enhance your tables with a column with images.",
        parameters: "",
    },
    tooltip: {
        name: "Tooltip",
        url: "",
        image: "/images/pluginPreview/tooltip.png",
        description:
            "Sometimes insight names might be overwhelming and a bit cryptic. Alleviate the pain of understanding for your end users with custom tooltips for insights.",
        parameters: "",
        configMd:
            "# Tooltip plugin\n" +
            "\n" +
            "A dashboard plugin to display a tooltip at a widget with text configurable via widget, insight, or metric metadata - summary in grey pages.\n" +
            "\n" +
            `![tooltip plugin](/images/pluginMd/tooltip_plugin.png)\n` +
            "\n" +
            "### Insight widget\n" +
            "\n" +
            "The plugin tries to find the tooltip text in Widget description. If the Widget has no description, it looks for the tooltip text in the Insight summary.\n" +
            "\n" +
            "### KPI Widget\n" +
            "\n" +
            "The plugin tries to find the tooltip text first in the KPI Widget description, then in the underlying Metric summary if there is no widget description.",
    },
};

export default plugins;
