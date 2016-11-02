public class Television {

  public String brand;
  public String resolution;
  public String channel;
  public boolean poweredOn;
  public String volumeLevel;
  public boolean isDestroyed;

  // int vs Integer?? huh?
    // => int is a primitive, Integer is a reference variable
  // boxed vs unboxed?
    // => "boxing" is the process of converting a primitive to an object

  public Television(
    String brand, String resolution, String channel,
    boolean poweredOn, String volumeLevel
  ) {
      this.brand = brand;
      this.resolution = resolution;
      this.channel = channel;
      this.poweredOn = poweredOn;
      this.volumeLevel = volumeLevel;
      this.isDestroyed = false;
    }

  public String getChannel() {
    return this.channel;
  }

  public static void main(String[] args) {
    Television tv = new Television("Vizio", "1920x1080", "herman", true, "8");
    System.out.println(tv.getChannel());
    System.out.println(tv.brand);
  }

}
