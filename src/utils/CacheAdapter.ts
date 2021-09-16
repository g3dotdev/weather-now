export default class CacheAdapter {
  private store: any;

  private prefix: string;

  constructor(store: any) {
    this.store = store;
    this.prefix = "weather/";
  }

  getItem = async (key: string) => {
    try {
      const valueStr = await this.store.getItem(this.prefix + key);
      if (valueStr) return JSON.parse(valueStr);
      return null;
    } catch (e) {
      throw new Error(`unable to get item, ${e}`);
    }
  };

  setItem = async (key: string, value: string) =>
    this.store.setItem(this.prefix + key, JSON.stringify(value));

  removeItem = async (key: string) => this.store.removeItem(this.prefix + key);

  clear = async () => {
    const keys = await this.store.getAllKeys();
    const filtered = keys.filter((key: string) => key.startsWith(this.prefix));

    if (filtered.length <= 0) return;

    await this.store.multiRemove(filtered);
  };

  length = async () => {
    const keys = await this.store.getAllKeys();
    const filtered = keys.filter((key: string) => key.startsWith(this.prefix));
    return filtered.length;
  };

  iterate = async (fn: Function) => {
    const keys = await this.store.getAllKeys();
    const filtered = keys.filter((key: string) => key.startsWith(this.prefix));

    if (filtered.length <= 0) return;

    const keyValues = await this.store.multiGet(filtered);
    const tasks = keyValues.map((pair: [string, string]) =>
      fn(pair[0].replace(new RegExp(`^${this.prefix}`), ""), pair[1])
    );
    await Promise.all(tasks);
  };
}
