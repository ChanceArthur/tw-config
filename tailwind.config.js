const plugin = require("tailwindcss/plugin");

module.exports = {
  // Will remove this when unused variables can be purged without it
  experimental: {
    optimizeUniversalDefaults: true,
  },
  theme: {
    screens: {
      "max-xs": { max: "359px" },
      "min-xs": "360px",
      "max-sm": { max: "639px" },
      "min-sm": "640px",
      "max-md": { max: "767px" },
      "min-md": "768px",
      "max-lg": { max: "1023px" },
      "min-lg": "1024px",
      "max-xl": { max: "1151px" },
      "min-xl": "1152px",
      "max-2xl": { max: "1279px" },
      "min-2xl": "1280px",
      "has-touch": { raw: "(pointer: coarse)" },
      "no-touch": { raw: "(pointer: fine)" },
      "has-hover": { raw: "(any-hover: hover)" },
      "no-hover": { raw: "(any-hover: none)" },
    },
    extend: {
      borderRadius: {
        inherit: "inherit",
      },
      fontSize: {
        "2xs": "0.625rem",
      },
      maxWidth: {
        container: "var(--ct-max)",
      },
      spacing: {
        "sai-t": "env(safe-area-inset-top)",
        "sai-b": "env(safe-area-inset-bottom)",
        container: "var(--ct-padding)",
      },
      transitionProperty: {
        "font-size": "font-size",
        spacing: "gap, margin, padding",
      },
    },
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    plugin(function ({ addBase, addComponents, theme }) {
      addBase({
        "[x-cloak]": {
          display: "none !important",
        },
        body: {
          "scroll-behavior": "smooth",
          "-webkit-font-smoothing": "antialiased",
          "-moz-osx-font-smoothing": "grayscale",
        },
        "body *": {
          "-webkit-overflow-scrolling": "touch",
        },
        "body *::-webkit-scrollbar, p:empty": {
          display: "none",
        },
        "a, a:hover": {
          "backface-visibility": "hidden",
          transform: "translateZ(0) scale(1, 1)",
        },
        svg: {
          fill: "currentColor",
          height: "1em",
        },
        "button, input, optgroup, select, textarea": {
          border: 0,
          outline: 0,
          appearance: "none",
        },
        "input:focus-visible, textarea:focus-visible": {
          outline: 0,
        },
        legend: {
          float: "left",
        },
        "legend + *": {
          clear: "both",
        },
      });
      addComponents({
        ".container": {
          marginRight: "auto",
          marginLeft: "auto",
          paddingRight: theme("spacing.container"),
          paddingLeft: theme("spacing.container"),
          maxWidth: theme("maxWidth.container"),
        },
        ".type": {
          fontSize: theme("fontSize.base"),
          lineHeight: theme("lineHeight.7"),
          "img, video, figure": {
            margin: theme("spacing.8") + " auto",
          },
          "figure > *, figure img": {
            marginTop: "0",
            marginBottom: "0",
          },
          figcaption: {
            maxWidth: "max-content",
            marginTop: theme("spacing.4"),
            marginRight: "auto",
            marginLeft: "auto",
            fontSize: theme("fontSize.sm"),
            lineHeight: theme("lineHeight.6"),
          },
          p: {
            marginTop: theme("spacing.5"),
            marginBottom: theme("spacing.5"),
          },
          "ol, ul": {
            paddingLeft: theme("spacing.6"),
          },
          ol: {
            listStyleType: "decimal",
          },
          'ol[type="A"], ol[type="A" s]': {
            listStyleType: "upper-alpha",
          },
          'ol[type="a"], ol[type="a" s]': {
            listStyleType: "lower-alpha",
          },
          'ol[type="I"], ol[type="I" s]': {
            listStyleType: "upper-roman",
          },
          'ol[type="i"], ol[type="i" s]': {
            listStyleType: "lower-roman",
          },
          'ol[type="1"]': {
            listStyleType: "decimal",
          },
          ul: {
            listStyleType: "disc",
          },
          li: {
            marginTop: theme("spacing.2"),
            marginBottom: theme("spacing.2"),
          },
          "ol > li, ul > li": {
            paddingLeft: theme("spacing.2"),
          },
          "ol > li::marker": {
            fontWeight: "400",
          },
          "> ul > li > *:first-child, > ol > li > *:first-child": {
            marginTop: theme("spacing.5"),
          },
          "> ul > li > *:last-child, > ol > li > *:last-child": {
            marginBottom: theme("spacing.5"),
          },
          "ul ul, ul ol, ol ul, ol ol, > ul > li p": {
            marginTop: theme("spacing.3"),
            marginBottom: theme("spacing.3"),
          },
          hr: {
            marginTop: theme("spacing.12"),
            marginBottom: theme("spacing.12"),
            borderTopWidth: 1,
          },
          blockquote: {
            marginTop: theme("spacing.6"),
            marginBottom: theme("spacing.6"),
            paddingLeft: theme("spacing.4"),
            fontWeight: "500",
            fontStyle: "italic",
            borderLeftWidth: theme("spacing.1"),
            quotes: '"\\201C""\\201D""\\2018""\\2019"',
          },
          "blockquote p:first-of-type::before": {
            content: "open-quote",
          },
          "blockquote p:last-of-type::after": {
            content: "close-quote",
          },
          code: {
            fontSize: "0.875em",
            fontWeight: "600",
          },
          "code::before, code::after": {
            content: '"`"',
          },
          pre: {
            padding: theme("spacing.4"),
            fontSize: theme("fontSize.sm"),
            overflowX: "auto",
            lineHeight: theme("lineHeight.7"),
            borderRadius: theme("borderRadius.lg"),
            color: "white",
            fontWeight: "400",
          },
          "pre code": {
            padding: "0",
            fontFamily: "inherit",
            fontSize: "inherit",
            fontWeight: "inherit",
            lineHeight: "inherit",
            color: "inherit",
            backgroundColor: "transparent",
            borderWidth: "0",
            borderRadius: "0",
          },
          "pre code::before, pre code::after": {
            content: "none",
          },
          "h2, h3, h4": {
            scrollMargin: theme("spacing.4"),
          },
          h2: {
            marginTop: theme("spacing.8"),
            marginBottom: theme("spacing.4"),
            fontSize: theme("fontSize.2xl"),
            fontWeight: "700",
            lineHeight: theme("lineHeight.snug"),
          },
          "h2 strong": {
            fontWeight: "800",
          },
          "h2 code": {
            fontSize: "0.875em",
          },
          h3: {
            marginTop: theme("spacing.7"),
            marginBottom: theme("spacing.3"),
            fontSize: theme("fontSize.xl"),
            fontWeight: "600",
            lineHeight: theme("lineHeight.relaxed"),
          },
          "h3 strong": {
            fontWeight: "700",
          },
          "h3 code": {
            fontSize: "0.9em",
          },
          h4: {
            marginTop: theme("spacing.6"),
            marginBottom: theme("spacing.2"),
            fontWeight: "600",
            lineHeight: theme("lineHeight.normal"),
          },
          "h4 strong": {
            fontWeight: "700",
          },
          table: {
            width: "100%",
            marginTop: theme("spacing.8"),
            marginBottom: theme("spacing.8"),
            tableLayout: "auto",
            fontSize: theme("fontSize.sm"),
            lineHeight: theme("lineHeight.7"),
            textAlign: "left",
          },
          thead: {
            borderBottomWidth: 1,
          },
          "thead th": {
            paddingRight: theme("spacing.2"),
            paddingBottom: theme("spacing.2"),
            paddingLeft: theme("spacing.2"),
            verticalAlign: "bottom",
            fontWeight: "600",
          },
          "tbody tr": {
            borderBottomWidth: 1,
          },
          "tbody tr:last-child": {
            borderBottomWidth: 0,
          },
          "tbody td, tfoot td": {
            padding: theme("spacing.2"),
          },
          "tbody td": {
            verticalAlign: "baseline",
          },
          tfoot: {
            borderTopWidth: "1px",
          },
          "tfoot td": {
            verticalAlign: "top",
          },
          "hr + *, h2 + *, h3 + *, h4 + *": {
            marginTop: "0",
          },
          "thead th:first-child, tbody td:first-child, tfoot td:first-child": {
            paddingLeft: "0",
          },
          "thead th:last-child, tbody td:last-child, tfoot td:last-child": {
            paddingRight: "0",
          },
          "> ul > li p:only-of-type, > table p:only-of-type": {
            margin: "0",
          },
          "> :first-child": {
            marginTop: "0",
          },
          "> :last-child": {
            marginBottom: "0",
          },
        },
      });
    }),
  ],
};
