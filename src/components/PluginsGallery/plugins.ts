import { IPlugin } from "../../types/plugin";

const plugins: Record<string, IPlugin> = {
    dashboardDescription: {
        name: "Dashboard Description",
        url: "",
        image: "/images/dashboard-description.png",
        description:
            "Push your dashboard to the next level with enhanced descriptions. Utilize the full power of Markdown to add headers, text formatting, links, or pictures. Or even create conversational insights with a direct display of metric values.",
        parameters: "",
    },
    themeEditor: {
        name: "Theme Editor",
        url: "https://gdc-ms-pub.s3.amazonaws.com/AIDA5QKRHPNLYV746FYP3_gdc-ms-pub_gooddata-internal-training/plugins/theme_editor/v106/dist/dashboardPlugin/dp_theme_editor.js",
        image: "/images/theme-editor.png",
        description:
            "Company logo, brand identity, or colors. These items speak of your company like nothing else. Whitelabel your dashboards through this plugin.",
        parameters: "",
    },
    insightGroups: {
        name: "Insight Groups",
        url: "",
        image: "/images/insight-groups.png",
        description:
            "Make sure your dashboard is clear and easy to read. Use this plugin to group similar insights, and switch between them easily.",
        parameters: "",
    },
    svgImageChart: {
        name: "Svg Image Chart",
        url: "",
        image: "/images/svg-image-chart.png",
        description:
            "Do you need a custom heatmap or perhaps a body parts chart? With this plugin, you can upload any CSV and use it to create your custom chart to visualize almost anything.",
        parameters: "",
    },
    tableWithImages: {
        name: "Table with Images",
        url: "",
        image: "/images/table-with-images.png",
        description:
            "Tables can be a bit boring with all that text. Use this plugin to enhance your tables with a column with images.",
        parameters: "",
    },
    tooltip: {
        name: "Tooltip",
        url: "",
        image: "/images/tooltip.png",
        description:
            "Sometimes insight names might be overwhelming and a bit cryptic. Alleviate the pain of understanding for your end users with custom tooltips for insights.",
        parameters: "",
    },
};

export default plugins;
