const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  plugins: [
    new UglifyJsPlugin({
      uglifyOptions: {
        mangle: true,
        compress: {
          arrows: false,
          booleans: false,
          collapse_vars: false,
          comparisons: false,
          computed_props: false,
          hoist_funs: false,
          hoist_props: false,
          hoist_vars: false,
          if_return: false,
          inline: false,
          join_vars: false,
          keep_infinity: true,
          loops: false,
          negate_iife: false,
          properties: false,
          reduce_funcs: false,
          reduce_vars: false,
          sequences: false,
          side_effects: false,
          switches: false,
          top_retain: false,
          toplevel: false,
          typeofs: false,
          unused: false,
          conditionals: true,
          dead_code: true,
          evaluate: true
        }
      }
    })
  ]
};
