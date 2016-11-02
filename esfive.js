/*

Modeling a TV
------------

state: brand, size, resolution, inputs, controls, channel, poweredON, volume level, isDestroyed
behavior: turn on/off, change channel, increase/decrese volume, change input, change settings

 */

const Television = function(
  brand, resolution, channel, poweredOn, volumeLevel) {
  this.brand = brand;
  this.resolution = resolution;
  this.channel = channel;
  this.poweredOn = poweredOn;
  this.volumeLevel = volumeLevel;
  this.isDestroyed = false;
};

Television.prototype.togglePower = function () {
  this.poweredOn = !this.poweredOn;
};

Television.prototype.changeVolume = function (level) {
  if (level === 'up') {
    this.volumeLevel++;
  } else {
    this.volumeLevel--;
  }
};

Television.prototype.destroy = function () {
  this.isDestroyed = true;
};

const leftTelevsion = new Television('Vizio', '1920x1080', 'herman', true, 8);
const rightTelevsion = new Television('Vizio', '1920x1080', 'wes', true, 99999);

rightTelevsion.changeVolume('down');
rightTelevsion.changeVolume('down');
rightTelevsion.changeVolume('down');
rightTelevsion.changeVolume('down');
rightTelevsion.changeVolume('down');
rightTelevsion.togglePower();
leftTelevsion.destroy();
