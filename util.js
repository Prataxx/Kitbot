// Cooldown functions

// Check if the username is stored in the cooldowns array
function hasCooldown(username) {
  if (global.cooldowns.includes(username)) return true;
  else return false;
}

// Find and delete the username out of the cooldowns array
function removeCooldown(username) {
  const index = global.cooldowns.indexOf(username);
  if (index > -1) {
    cooldowns.splice(index, 1);
  }
}

// Exports the functions to be used in other files

module.exports = {
  hasCooldown,
  removeCooldown,
};
