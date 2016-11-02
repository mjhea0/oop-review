/*

Modeling a TV
------------

state: brand, size, resolution, inputs, controls, channel, poweredON, volume level, isDestroyed
behavior: turn on/off, change channel, increase/decrese volume, change input, change settings

 */


class Television {
  constructor(brand, resolution, channel, poweredOn, volumeLevel) {
      this.brand = brand;
      this.resolution = resolution;
      this.channel = channel;
      this.poweredOn = poweredOn;
      this.volumeLevel = volumeLevel;
      this.isDestroyed = false;
  }
  get getPower() {
    return this.poweredOn;
  }
  get togglePower() {
    return this.poweredOn;
  }
  set togglePower(bool) {
    this.poweredOn = bool;
  }
  changeVolume(level) {
    if (level === 'up') {
      this.volumeLevel++;
    } else {
      this.volumeLevel--;
    }
  }
  destroy() {
    this.isDestroyed = true;
  }
}

const leftTelevision = new Television(
  'Vizio', '1920x1080', 'herman', true, 8);

leftTelevision.togglePower = false;
console.log(leftTelevision.togglePower);
