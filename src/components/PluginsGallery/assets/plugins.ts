import dashboardDescription from "./images/dashboard-description.png";
import themeEditor from "./images/theme-editor.png";
import insightGroups from "./images/insight-groups.png";
import svgImageChart from "./images/svg-image-chart.png";
import tableWithImages from "./images/table-with-images.png";
import tooltip from "./images/tooltip.png";
import { IPlugin } from "../../../types/plugin";

const plugins: Record<string, IPlugin> = {
    dashboardDescription: {
        name: "Dashboard Description",
        url: "",
        image: dashboardDescription,
        description:
            "Push your dashboard to the next level with enhanced descriptions. Utilize the full power of Markdown to add headers, text formatting, links, or pictures. Or even create conversational insights with a direct display of metric values.",
        parameters: "",
    },
    themeEditor: {
        name: "Theme Editor",
        url: "https://gdc-ms-pub.s3.amazonaws.com/AIDA5QKRHPNLYV746FYP3_gdc-ms-pub_gooddata-internal-training/plugins/theme_editor/v106/dist/dashboardPlugin/dp_theme_editor.js",
        image: themeEditor,
        description:
            "Company logo, brand identity, or colors. These items speak of your company like nothing else. Whitelabel your dashboards through this plugin.",
        parameters: "",
    },
    insightGroups: {
        name: "Insight Groups",
        url: "",
        image: insightGroups,
        description:
            "Make sure your dashboard is clear and easy to read. Use this plugin to group similar insights, and switch between them easily.",
        parameters: "",
    },
    svgImageChart: {
        name: "Svg Image Chart",
        url: "",
        image: svgImageChart,
        description:
            "Do you need a custom heatmap or perhaps a body parts chart? With this plugin, you can upload any CSV and use it to create your custom chart to visualize almost anything.",
        parameters: "",
    },
    tableWithImages: {
        name: "Table with Images",
        url: "",
        image: tableWithImages,
        description:
            "Tables can be a bit boring with all that text. Use this plugin to enhance your tables with a column with images.",
        parameters: "",
    },
    tooltip: {
        name: "Tooltip",
        url: "",
        image: tooltip,
        description:
            "Sometimes insight names might be overwhelming and a bit cryptic. Alleviate the pain of understanding for your end users with custom tooltips for insights.",
        parameters: "",
    },
};

export default plugins;
