'use strict';


module.exports = srcPath => {
  return {
    listeners: {
      spawn: state => function() {
        state.GossipEmitter.emit('players/sign-in', this);
      },

      quit: state => function() {
        state.GossipEmitter.emit('players/sign-out', this);
      },
    }
  };
};
