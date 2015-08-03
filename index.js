var cool = require('cool-ascii-faces');

module.exports = {

    website: {
      assets: "./assets",

      js: [
        "test.js"
      ],
    },

    blocks: {
        // Author will be able to write "{% myTag %}World{% endMyTag %}"
        CoolTag: {
            process: function(blk) {
                return "<div class='mole'>" + blk.body + "</div>";
            }
        }
    }
};
