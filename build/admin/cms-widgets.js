/**
 * Decap CMS editor enhancements — friendly inputs with placeholders.
 * Register before CMS.init() (see index.html CMS_MANUAL_INIT).
 */
(function () {
  if (typeof CMS === "undefined" || typeof createClass === "undefined") {
    console.error("[cms-widgets] Decap CMS is not available.");
    return;
  }

  var StringWithPlaceholder = createClass({
    handleChange: function (event) {
      this.props.onChange(event.target.value);
    },
    render: function () {
      var field = this.props.field;
      var placeholder = field.get("placeholder") || "";
      return h("input", {
        type: "text",
        id: this.props.forID,
        className: this.props.classNameWrapper,
        value: this.props.value != null ? this.props.value : "",
        placeholder: placeholder,
        style: {
          fontFamily:
            'BlinkMacSystemFont, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
        },
        onChange: this.handleChange,
        onFocus: this.props.setActiveStyle,
        onBlur: this.props.setInactiveStyle,
      });
    },
  });

  var TextWithPlaceholder = createClass({
    handleChange: function (event) {
      this.props.onChange(event.target.value);
    },
    render: function () {
      var field = this.props.field;
      var placeholder = field.get("placeholder") || "";
      return h("textarea", {
        id: this.props.forID,
        className: this.props.classNameWrapper + " cms-textarea",
        value: this.props.value != null ? this.props.value : "",
        placeholder: placeholder,
        rows: 5,
        style: {
          fontFamily:
            'BlinkMacSystemFont, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
        },
        onChange: this.handleChange,
        onFocus: this.props.setActiveStyle,
        onBlur: this.props.setInactiveStyle,
      });
    },
  });

  CMS.registerWidget("cms-string", StringWithPlaceholder);
  CMS.registerWidget("cms-text", TextWithPlaceholder);
})();
